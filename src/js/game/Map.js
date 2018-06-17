import Phaser from 'phaser';

class Map {
  constructor(scene) {
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

    this.map = scene.make.tilemap({
      data: mapData,
      tileWidth: 64,
      tileHeight: 64,
      tileSpacing: 10,
    });
    const tileset = this.map.addTilesetImage('tiles', 'tiles', 64, 64, 0, 10);
    this.ground = this.map.createDynamicLayer(0, tileset, 0, 0);
    this.terrain = this.map.createBlankDynamicLayer(1, tileset);
  }
}

export default Map;
