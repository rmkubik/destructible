import Phaser from 'phaser';

class Map {
  constructor(scene) {
    this.map = scene.make.tilemap({
      data: Map.createMapData(),
      tileWidth: 64,
      tileHeight: 64,
      tileSpacing: 10,
    });
    const tileset = this.map.addTilesetImage('tiles', 'tiles', 64, 64, 0, 10);
    this.ground = this.map.createDynamicLayer(0, tileset, 0, 0);
    this.terrain = this.map.createBlankDynamicLayer(1, tileset);
    this.width = 12;
    this.height = 12;
    this.grassTileList = [0, 1, 2, 3];
  }

  static createMapData() {
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

  static growGrass(currentMapData) {
    const newMapData = [];
    for (let y = 0; y < this.height; y += 1) {
      const row = [];
      for (let x = 0; x < this.width; x += 1) {
        const tileIndex = Phaser.Math.RND.weightedPick(dirtTileList);
        row.push(tileIndex);
      }
      newMapData.push(row);
    }
    return newMapData;
  }

  static isTileInMap(tile, mapData) {
    const { x, y } = tile;
    return x >= 0 && x < mapData[0].length && y >= 0 && y < mapData.length;
  }

  static getNeighbors(tile, mapData) {
    const neighbors = [];

    const up = { x: tile.x, y: tile.y - 1 };
    const down = { x: tile.x, y: tile.y + 1 };
    const left = { x: tile.x - 1, y: tile.y };
    const right = { x: tile.x + 1, y: tile.y };

    if (Map.isTileInMap(up, mapData)) {
      neighbors.push(mapData[up.y][up.x]);
    }
    if (Map.isTileInMap(down, mapData)) {
      neighbors.push(mapData[down.y][down.x]);
    }
    if (Map.isTileInMap(left, mapData)) {
      neighbors.push(mapData[left.y][left.x]);
    }
    if (Map.isTileInMap(right, mapData)) {
      neighbors.push(mapData[right.y][right.x]);
    }

    return neighbors;
  }
}

export default Map;
