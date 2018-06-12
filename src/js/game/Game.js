import Phaser from 'phaser';

import config from './Config';

import characters from '../../../assets/images/spritesheet_characters.png';
import charactersAtlas from '../../../assets/images/spritesheet_characters.xml';

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
  }

  create() {
    const char = this.add.image(0, 0, 'characters', 0);
    char.setPosition(char.width / 2, char.height / 2);
  }

  static update() {}
}

export default Game;
