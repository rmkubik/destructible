class Item {
  constructor(type) {
    this.type = type;
  }

  use() {
    console.log(this.type);
  }
}

export default Item;
