import Item from './Item';

class Corn extends Item {
  constructor() {
    super();
    this.icon = '🌽';
  }

  use(user, scene) {}
}

export default Corn;
