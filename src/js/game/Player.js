import Phaser from 'phaser';

class Player {
  constructor(scene, position) {
    this.sprite = scene.add.sprite(
      position.x,
      position.y,
      'characters',
      'survivor1_stand.png',
    );

    this.sprite.setPosition(this.sprite.width / 2, this.sprite.height / 2);

    this.wKey = scene.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.W);
    this.aKey = scene.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.A);
    this.sKey = scene.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.S);
    this.dKey = scene.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.D);
  }

  update() {
    if (this.wKey.isDown) {
      this.sprite.y -= 5;
    }
    if (this.aKey.isDown) {
      this.sprite.x -= 5;
    }
    if (this.sKey.isDown) {
      this.sprite.y += 5;
    }
    if (this.dKey.isDown) {
      this.sprite.x += 5;
    }
  }
}

export default Player;
