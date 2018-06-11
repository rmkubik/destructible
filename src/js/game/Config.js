import Phaser from 'phaser';

export default {
  type: Phaser.AUTO,
  width: 480,
  height: 480,
  parent: 'Game',
  physics: {
    default: 'arcade',
    arcade: {
      debug: false,
    },
  },
  pixelArt: false,
};
