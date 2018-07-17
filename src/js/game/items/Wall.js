import Item from './Item';

class Wall extends Item {
  constructor() {
    super();
    this.icon = '🔨';
  }

  use(user, scene) {
    user.placeBlock(scene.map);
  }
}

export default Wall;
