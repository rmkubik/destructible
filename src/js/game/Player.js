import Phaser from 'phaser';

import Prefab from './Prefab';
import Inventory from './Inventory';

class Player extends Prefab {
  constructor({ scene, position }) {
    super({
      scene,
      position,
      sheet: 'characters',
      sprite: 'survivor1_stand',
    });

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

    scene.input.keyboard.on('keydown_Q', () => this.selectOrUseItem(0));
    scene.input.keyboard.on('keydown_W', () => this.selectOrUseItem(1));
    scene.input.keyboard.on('keydown_E', () => this.selectOrUseItem(2));
    scene.input.keyboard.on('keydown_R', () => this.selectOrUseItem(3));

    // scene.map.terrain.setCollision([204]);
    scene.physics.add.collider(this, scene.map.terrain);

    this.direction = { x: 0, y: 0 };
    this.speed = 200;

    this.inventory = new Inventory(scene);
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
      this.angle = Prefab.convertVelocityToAngle(this.direction);

      this.body.setVelocityX(
        this.speed * Math.cos(this.angle / (180 / Math.PI)),
      );
      this.body.setVelocityY(
        this.speed * Math.sin(this.angle / (180 / Math.PI)),
      );
    }
  }

  selectOrUseItem(slot) {
    if (this.inventory.getSelectedItemIndex() === slot) {
      this.inventory.useItem(this);
    } else {
      this.inventory.selectItem(slot);
    }
  }

  // TODO: placeBlock, deleteBlock, and convertPixelsToTile should probably be map methods
  placeBlock(map) {
    const tileSize = 64;
    const currentTile = Prefab.convertPixelsToTile(
      { x: this.x, y: this.y },
      tileSize,
    );

    map.terrain.putTileAt(
      204,
      currentTile.x + this.direction.x,
      currentTile.y + this.direction.y,
    );
  }

  deleteBlock(map) {
    const tileSize = 64;
    const currentTile = Prefab.convertPixelsToTile(
      { x: this.x, y: this.y },
      tileSize,
    );

    map.terrain.putTileAt(
      -1,
      currentTile.x + this.direction.x,
      currentTile.y + this.direction.y,
    );
  }
}

export default Player;
