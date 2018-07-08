import Phaser from 'phaser';

import Fsm from './Fsm';
import Prefab from './Prefab';

class Mob extends Prefab {
  constructor({ scene, position, sprite }) {
    super({ scene, position, sheet: 'animals', sprite });

    this.scene = scene;

    this.setScale(0.25);

    scene.physics.add.collider(this, scene.map.terrain);

    this.direction = [0, 0];
    this.speed = 100;
    this.followRadius = 250;

    this.body.setCollideWorldBounds(true);
    this.body.setBounce(1, 1);

    this.state = new Fsm(
      {
        unmoving: {
          wander: () => {
            this.moveInDirection(Mob.pickRandomDirection());

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
          playerNear: this.playerNearAction.bind(this),
        },
        wandering: {
          stop: this.stopAction.bind(this),
          playerNear: this.playerNearAction.bind(this),
        },
        following: {
          stopFollow: this.stopAction.bind(this),
        },
      },
      'unmoving',
    );
  }

  update() {
    if (
      Phaser.Math.Distance.Between(
        this.scene.player.x,
        this.scene.player.y,
        this.x,
        this.y,
      ) <= this.followRadius
    ) {
      this.state.action('playerNear');
    } else {
      this.state.action('stopFollow');
    }

    if (this.state.currentState === 'unmoving') {
      this.state.action('wander');
    } else if (this.state.currentState === 'following') {
      this.moveInDirection(Mob.pickRandomDirection());
    }
  }

  stopAction() {
    this.body.setVelocity(0);
    this.state.transition('unmoving');
  }

  playerNearAction() {
    this.state.transition('following');
  }

  moveInDirection(direction) {
    this.direction = direction;
    const angle = Prefab.convertVelocityToAngle(direction);

    this.body.setVelocityX(this.speed * Math.cos(angle / (180 / Math.PI)));
    this.body.setVelocityY(this.speed * Math.sin(angle / (180 / Math.PI)));
  }

  static pickRandomDirection() {
    return {
      x: Phaser.Math.RND.pick([-1, 0, 1]),
      y: Phaser.Math.RND.pick([-1, 0, 1]),
    };
  }
}

export default Mob;
