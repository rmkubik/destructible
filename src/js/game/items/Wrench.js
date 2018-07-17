import Item from './Item';

class Wrench extends Item {
  constructor() {
    super();
    this.icon = '🔧';
  }

  use(user, scene) {
    user.deleteBlock(scene.map);
  }
}

export default Wrench;
