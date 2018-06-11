import Phaser from 'phaser';

import config from './Config';

class Game {
  constructor() {
    this.game = new Phaser.Game({
      scene: {
        preload: Game.preload,
        create: Game.create,
        update: Game.update,
      },
      ...config,
    });
  }

  static preload() {}

  static create() {}

  static update() {}
}

export default Game;
