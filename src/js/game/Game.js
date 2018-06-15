import Phaser from 'phaser';

import config from './Config';
import Player from './Player';

import characters from '../../../assets/images/spritesheet_characters.png';
import charactersAtlas from '../../../assets/images/spritesheet_characters.xml';
import tiles from '../../../assets/images/spritesheet_tiles.png';
import map1 from '../../../assets/images/map1.json';

class Game {
  constructor() {
    this.game = new Phaser.Game({
      scene: {
        preload: this.preload,
        create: this.create,
        update: Game.update,
      },
      ...config,
    });
  }

  preload() {
    this.load.atlasXML('characters', characters, charactersAtlas);
    this.load.spritesheet('tiles', tiles, {
      frameWidth: 64,
      frameHeight: 64,
      spacing: 10,
    });
    this.load.tilemapTiledJSON('map', map1);
  }

  create() {
    const tileList = [0, 1, 2, 3];
    const mapData = [];

    for (let y = 0; y < 12; y += 1) {
      const row = [];
      for (let x = 0; x < 12; x += 1) {
        //  Scatter the tiles so we get more mud and less stones
        const tileIndex = Phaser.Math.RND.weightedPick(tileList);
        row.push(tileIndex);
      }
      mapData.push(row);
    }

    this.map = this.make.tilemap({
      data: mapData,
      tileWidth: 64,
      tileHeight: 64,
      tileSpacing: 10,
    });
    const tileset = this.map.addTilesetImage('tiles', 'tiles', 64, 64, 0, 10);
    const ground = this.map.createDynamicLayer(0, tileset, 0, 0);
    this.terrain = this.map.createBlankDynamicLayer(1, tileset);

    this.char = new Player({ scene: this, position: { x: 0, y: 0 } });
  }

  static update() {
    this.char.update();
  }
}

export default Game;
