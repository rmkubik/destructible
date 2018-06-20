import Phaser from 'phaser';

import config from './Config';

import phaserLogo from '../../../assets/images/phaser_logo.png';
import characters from '../../../assets/images/spritesheet_characters.png';

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
    this.load.spritesheet('characters', characters, {
      frameWidth: 64,
      frameHeight: 64,
    });
  }

  create() {
    const char = this.add.image(0, 0, 'characters', 0);
    char.setPosition((0.15 * char.width) / 2, (0.15 * char.height) / 2);
    char.setScale(0.15);
  }

  static update() {}
}

export default Game;
