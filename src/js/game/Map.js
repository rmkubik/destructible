import Phaser from 'phaser';

class Map {
  constructor(scene) {
    this.grassTileList = [0, 1, 2, 3];
    this.width = 12;
    this.height = 12;

    this.map = scene.make.tilemap({
      data: this.createMapData(),
      tileWidth: 64,
      tileHeight: 64,
      tileSpacing: 10,
    });

    const tileset = this.map.addTilesetImage('tiles', 'tiles', 64, 64, 0, 10);
    this.ground = this.map.createDynamicLayer(0, tileset, 0, 0);
    this.terrain = this.map.createBlankDynamicLayer(1, tileset);

    this.growGrass();
    this.growGrass();
    this.growGrass();
    this.growGrass();
    this.growGrass();
  }

  createMapData() {
    const dirtTileList = [4, 5];
    const mapData = [];

    for (let y = 0; y < this.height; y += 1) {
      const row = [];
      for (let x = 0; x < this.width; x += 1) {
        //  Scatter the tiles so we get more mud and less stones
        const tileIndex = Phaser.Math.RND.weightedPick(dirtTileList);
        row.push(tileIndex);
      }
      mapData.push(row);
    }

    const grassSeedCount = 3;
    for (let i = 0; i < grassSeedCount; i += 1) {
      mapData[Phaser.Math.RND.integerInRange(0, this.height - 1)][
        Phaser.Math.RND.integerInRange(0, this.width - 1)
      ] = Phaser.Math.RND.weightedPick(this.grassTileList);
    }

    return mapData;
  }

  growGrass() {
    const newGrassTiles = [];
    for (let y = 0; y < this.height; y += 1) {
      for (let x = 0; x < this.width; x += 1) {
        const neighbors = this.getNeighbors({ x, y });
        if (
          neighbors.some(({ index }) =>
            this.grassTileList.some(grassTileIndex => grassTileIndex === index),
          )
        ) {
          newGrassTiles.push({ x, y });
        }
      }
    }

    newGrassTiles.forEach(({ x, y }) => {
      this.ground.putTileAt(
        Phaser.Math.RND.weightedPick(this.grassTileList),
        x,
        y,
      );
    });
  }

  static isTileInMap(tile, mapData) {
    const { x, y } = tile;
    return x >= 0 && x < mapData[0].length && y >= 0 && y < mapData.length;
  }

  getNeighbors(tile) {
    const neighbors = [];

    const up = { x: tile.x, y: tile.y - 1 };
    const down = { x: tile.x, y: tile.y + 1 };
    const left = { x: tile.x - 1, y: tile.y };
    const right = { x: tile.x + 1, y: tile.y };

    if (this.ground.getTileAt(up.x, up.y)) {
      neighbors.push(this.ground.getTileAt(up.x, up.y));
    }
    if (this.ground.getTileAt(down.x, down.y)) {
      neighbors.push(this.ground.getTileAt(down.x, down.y));
    }
    if (this.ground.getTileAt(left.x, left.y)) {
      neighbors.push(this.ground.getTileAt(left.x, left.y));
    }
    if (this.ground.getTileAt(right.x, right.y)) {
      neighbors.push(this.ground.getTileAt(right.x, right.y));
    }

    return neighbors;
  }
}

export default Map;
