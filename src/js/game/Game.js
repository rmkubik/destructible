import Phaser from 'phaser';

import config from './Config';
import Player from './Player';
import Cow from './mobs/Cow';
import Goat from './mobs/Goat';
import Zebra from './mobs/Zebra';
import Elephant from './mobs/Elephant';
import Map from './Map';
import {
  HyperappActionsFactory,
  HyperappStateFactory,
} from './plugins/Hyperapp';

import characters from '../../../assets/images/spritesheet_characters.png';
import charactersAtlas from '../../../assets/images/spritesheet_characters.xml';
import animals from '../../../assets/images/roundOutline.png';
import animalsAtlas from '../../../assets/images/roundOutline.xml';
import tiles from '../../../assets/images/spritesheet_tiles.png';
import map1 from '../../../assets/images/map1.json';

function preload() {
  this.load.atlasXML('characters', characters, charactersAtlas);
  this.load.atlasXML('animals', animals, animalsAtlas);
  this.load.spritesheet('tiles', tiles, {
    frameWidth: 64,
    frameHeight: 64,
    spacing: 10,
  });
  this.load.tilemapTiledJSON('map', map1);
}

function create() {
  this.map = new Map(this);
  this.objects = this.add.group({
    runChildUpdate: true,
  });

  this.player = new Player({ scene: this, position: { x: 0, y: 0 } });

  const mob1 = new Zebra({ scene: this, position: { x: 400, y: 400 } });
  const mob2 = new Cow({ scene: this, position: { x: 400, y: 400 } });
  const mob3 = new Goat({ scene: this, position: { x: 400, y: 400 } });
  const mob4 = new Elephant({ scene: this, position: { x: 400, y: 400 } });
}

function update() {}

class Game {
  constructor(actions, state) {
    this.game = new Phaser.Game({
      scene: {
        preload,
        create,
        update,
      },
      plugins: {
        global: [
          {
            key: 'HyperappActions',
            plugin: HyperappActionsFactory(actions),
            start: false,
            mapping: 'actions',
          },
          {
            key: 'HyperappState',
            plugin: HyperappStateFactory(state),
            start: false,
            mapping: 'state',
          },
        ],
      },
      ...config,
    });
  }
}

export default Game;
