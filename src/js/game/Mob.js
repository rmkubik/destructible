import Phaser from 'phaser';

import fsm from './fsm';

class Mob extends Phaser.GameObjects.Sprite {
  constructor({ scene, position, sprite }) {
    super(scene, position.x, position.y, 'animals', `${sprite}.png`);
    scene.physics.world.enable(this);
    scene.add.existing(this);

    this.setPosition(this.width / 2, this.height / 2);
    this.setScale(0.25);

    scene.physics.add.collider(this, scene.map.terrain);

    this.direction = {
      x: Phaser.Math.RND.pick([-1, 0, 1]),
      y: Phaser.Math.RND.pick([-1, 0, 1]),
    };
    this.speed = 100;

    const angle = Mob.convertVelocityToAngle(this.direction);

    this.body.setVelocityX(this.speed * Math.cos(angle / (180 / Math.PI)));
    this.body.setVelocityY(this.speed * Math.sin(angle / (180 / Math.PI)));

    this.body.setCollideWorldBounds(true);
    this.body.setBounce(1, 1);

    this.state = fsm(
      {
        unmoving: {
          wander: () => {},
        },
        wandering: {
          stop: () => {},
        },
      },
      'unmoving',
    );
  }

  update() {}

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
