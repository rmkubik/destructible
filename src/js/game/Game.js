import Phaser from 'phaser';

import config from './Config';

import phaserLogo from '../../../assets/images/phaser_logo.png';

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
    this.load.image('phaserLogo', phaserLogo);
  }

  create() {
    const logo = this.add.image(0, 0, 'phaserLogo');
    logo.setPosition((0.15 * logo.width) / 2, (0.15 * logo.height) / 2);
    logo.setScale(0.15);
  }

  static update() {}
}

export default Game;
