import Phaser from 'phaser';

import config from './Config';
import Player from './Player';
import Mob from './Mob';
import Map from './Map';

import characters from '../../../assets/images/spritesheet_characters.png';
import charactersAtlas from '../../../assets/images/spritesheet_characters.xml';
import animals from '../../../assets/images/roundOutline.png';
import animalsAtlas from '../../../assets/images/roundOutline.xml';
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
    this.load.atlasXML('animals', animals, animalsAtlas);
    this.load.spritesheet('tiles', tiles, {
      frameWidth: 64,
      frameHeight: 64,
      spacing: 10,
    });
    this.load.tilemapTiledJSON('map', map1);
  }

  create() {
    this.map = new Map(this);
    this.objects = this.add.group({
      runChildUpdate: true,
    });

    this.char = new Player({ scene: this, position: { x: 0, y: 0 } });

    const mob = new Mob({
      scene: this,
      position: { x: 400, y: 400 },
      sprite: 'zebra',
    });
    const mob1 = new Mob({
      scene: this,
      position: { x: 400, y: 400 },
      sprite: 'goat',
    });
    const mob2 = new Mob({
      scene: this,
      position: { x: 400, y: 400 },
      sprite: 'cow',
    });
    const mob3 = new Mob({
      scene: this,
      position: { x: 400, y: 400 },
      sprite: 'elephant',
    });
  }

  static update() {}
}

export default Game;
