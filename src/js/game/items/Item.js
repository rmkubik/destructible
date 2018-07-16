class Item {
  constructor(type) {
    this.type = type;
  }

  use() {
    console.error(`Item "${this.type}" use function is not implemented`);
  }
}

export default Item;
