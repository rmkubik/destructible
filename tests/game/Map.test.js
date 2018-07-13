import Map from '../../src/js/game/Map';

let map;
beforeEach(() => {
  map = new Map();
});

describe('getNeighbors', () => {
  it('should return correct neighbors', () => {
    const expected = [2, 4, 6, 8];
    const neighbors = Map.getNeighbors({ x: 1, y: 1 }, [
      [1, 2, 3],
      [4, 5, 6],
      [7, 8, 9],
    ]);
    expect(neighbors.sort()).toEqual(expected.sort());
  });
});
