import Phaser from 'phaser';

class Player extends Phaser.GameObjects.Sprite {
  constructor({ scene, position }) {
    super(scene, position.x, position.y, 'characters', 'survivor1_stand.png');
    scene.physics.world.enable(this);
    scene.add.existing(this);

    this.setPosition(this.width / 2, this.height / 2);

    this.wKey = scene.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.W);
    this.aKey = scene.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.A);
    this.sKey = scene.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.S);
    this.dKey = scene.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.D);
    scene.input.keyboard.on('keydown_SPACE', () => this.placeBlock(scene));

    scene.terrain.setCollision([204]);
    scene.physics.add.collider(this, scene.terrain, () => {
      console.log('collided with terrain layer');
    });
  }

  update() {
    this.body.setVelocity(0);

    if (this.wKey.isDown) {
      this.body.setVelocityY(-200);
    }
    if (this.aKey.isDown) {
      this.body.setVelocityX(-200);
    }
    if (this.sKey.isDown) {
      this.body.setVelocityY(200);
    }
    if (this.dKey.isDown) {
      this.body.setVelocityX(200);
    }
  }

  placeBlock(scene) {
    scene.terrain.putTileAt(
      204,
      Math.floor(this.x / 64),
      Math.floor(this.y / 64),
    );
  }
}

export default Player;
