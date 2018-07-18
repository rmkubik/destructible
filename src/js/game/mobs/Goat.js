import Mob from './Mob';

class Goat extends Mob {
  constructor({ scene, position }) {
    super({ scene, position, sprite: 'goat' });
  }
}

export default Goat;
