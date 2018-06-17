import Phaser from 'phaser';

import config from './Config';
import Player from './Player';
import Map from './Map';

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
    this.map = new Map(this);

    this.char = new Player({ scene: this, position: { x: 0, y: 0 } });
  }

  static update() {
    this.char.update();
  }
}

export default Game;
