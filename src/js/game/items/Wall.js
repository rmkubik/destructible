import Item from './Item';

class Wall extends Item {
  use(user, scene) {
    user.placeBlock(scene.map);
  }
}

export default Wall;
