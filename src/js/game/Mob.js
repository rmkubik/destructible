import Phaser from 'phaser';

import Fsm from './Fsm';
import Prefab from './Prefab';

class Mob extends Prefab {
  constructor({ scene, position, sprite }) {
    super({ scene, position, sheet: 'animals', sprite });

    this.setScale(0.25);

    scene.physics.add.collider(this, scene.map.terrain);

    this.direction = [0, 0];
    this.speed = 100;

    this.body.setCollideWorldBounds(true);
    this.body.setBounce(1, 1);

    this.state = new Fsm(
      {
        unmoving: {
          wander: () => {
            // pick random direction
            this.direction = Mob.pickRandomDirection();
            const angle = Mob.convertVelocityToAngle(this.direction);

            this.body.setVelocityX(
              this.speed * Math.cos(angle / (180 / Math.PI)),
            );
            this.body.setVelocityY(
              this.speed * Math.sin(angle / (180 / Math.PI)),
            );

            scene.time.addEvent({
              // pick random amount of time to wander
              delay: Phaser.Math.RND.integerInRange(1000, 5000),
              callback: () => {
                // transition back to unmoving
                this.state.action('stop');
              },
            });
            this.state.transition('wandering');
          },
        },
        wandering: {
          stop: () => {
            this.body.setVelocity(0);
            this.state.transition('unmoving');
          },
        },
      },
      'unmoving',
    );
    // this.state.action('wander');
  }

  update() {
    if (this.state.currentState === 'unmoving') {
      this.state.action('wander');
    }
  }

  static pickRandomDirection() {
    return {
      x: Phaser.Math.RND.pick([-1, 0, 1]),
      y: Phaser.Math.RND.pick([-1, 0, 1]),
    };
  }

  static convertVelocityToAngle(velocity) {
    const { x, y } = velocity;
    return Math.atan2(y, x) * (180 / Math.PI);
  }

  static convertPixelsToTile(position, tileSize) {
    const { x, y } = position;
    return {
      x: Math.floor(x / tileSize),
      y: Math.floor(y / tileSize),
    };
  }
}

export default Mob;
