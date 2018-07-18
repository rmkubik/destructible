import Mob from './Mob';

class Zebra extends Mob {
  constructor({ scene, position }) {
    super({ scene, position, sprite: 'zebra' });
  }
}

export default Zebra;
