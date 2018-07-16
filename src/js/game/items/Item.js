class Item {
  constructor(type) {
    this.type = type;
  }

  use() {
    console.log(this.type);

    // console.error(
    //   `Item: ${
    //     this.scene.state.inventory.items[
    //       this.scene.state.inventory.selectedItemIndex
    //     ].type
    //   } use function is not implemented`,
    // );
  }
}

export default Item;
