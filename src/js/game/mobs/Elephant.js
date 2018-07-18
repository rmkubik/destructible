import Mob from './Mob';

class Elephant extends Mob {
  constructor({ scene, position }) {
    super({ scene, position, sprite: 'elephant' });
  }
}

export default Elephant;
