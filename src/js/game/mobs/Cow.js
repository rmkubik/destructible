import Mob from './Mob';

class Cow extends Mob {
  constructor({ scene, position }) {
    super({ scene, position, sprite: 'cow' });
  }
}

export default Cow;
