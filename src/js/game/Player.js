import Phaser from 'phaser';

class Player extends Phaser.GameObjects.Sprite {
  constructor({ scene, position }) {
    super(scene, position.x, position.y, 'characters', 'survivor1_stand.png');
    scene.physics.world.enable(this);
    scene.add.existing(this);

    this.setPosition(this.width / 2, this.height / 2);

    this.wKey = scene.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.UP);
    this.aKey = scene.input.keyboard.addKey(
      Phaser.Input.Keyboard.KeyCodes.LEFT,
    );
    this.sKey = scene.input.keyboard.addKey(
      Phaser.Input.Keyboard.KeyCodes.DOWN,
    );
    this.dKey = scene.input.keyboard.addKey(
      Phaser.Input.Keyboard.KeyCodes.RIGHT,
    );
    scene.input.keyboard.on('keydown_Q', () => this.placeBlock(scene));
    scene.input.keyboard.on('keydown_W', () => this.deleteBlock(scene));

    scene.terrain.setCollision([204]);
    scene.physics.add.collider(this, scene.terrain);

    this.direction = { x: 0, y: 0 };
    this.speed = 200;
  }

  update() {
    const direction = { x: 0, y: 0 };
    this.body.setVelocity(0);

    if (this.wKey.isDown) {
      direction.y = -1;
    }
    if (this.aKey.isDown) {
      direction.x = -1;
    }
    if (this.sKey.isDown) {
      direction.y = 1;
    }
    if (this.dKey.isDown) {
      direction.x = 1;
    }

    if (direction.x !== 0 || direction.y !== 0) {
      this.direction = direction;
      this.angle = Player.convertVelocityToAngle(this.direction);

      this.body.setVelocityX(
        this.speed * Math.cos(this.angle / (180 / Math.PI)),
      );
      this.body.setVelocityY(
        this.speed * Math.sin(this.angle / (180 / Math.PI)),
      );
    }
  }

  static convertVelocityToAngle(velocity) {
    const { x, y } = velocity;
    return Math.atan2(y, x) * (180 / Math.PI);
  }

  placeBlock(scene) {
    const tileSize = 64;
    const currentTile = Player.convertPixelsToTile(
      { x: this.x, y: this.y },
      tileSize,
    );

    scene.terrain.putTileAt(
      204,
      currentTile.x + this.direction.x,
      currentTile.y + this.direction.y,
    );
  }

  deleteBlock(scene) {
    const tileSize = 64;
    const currentTile = Player.convertPixelsToTile(
      { x: this.x, y: this.y },
      tileSize,
    );

    scene.terrain.putTileAt(
      -1,
      currentTile.x + this.direction.x,
      currentTile.y + this.direction.y,
    );
  }

  static convertPixelsToTile(position, tileSize) {
    const { x, y } = position;
    return {
      x: Math.floor(x / tileSize),
      y: Math.floor(y / tileSize),
    };
  }
}

export default Player;
