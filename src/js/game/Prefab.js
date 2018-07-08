import Phaser from 'phaser';

class Prefab extends Phaser.GameObjects.Sprite {
  constructor({ scene, position, sheet, sprite }) {
    super(scene, position.x, position.y, sheet, `${sprite}.png`);
    scene.physics.world.enable(this);
    scene.add.existing(this);
    scene.objects.add(this);

    this.setPosition(this.width / 2, this.height / 2);
  }
}

export default Prefab;
