import { Item } from './Item';

class Wall extends Item {
  use() {
    console.log('wall');
  }
}

export default Wall;
