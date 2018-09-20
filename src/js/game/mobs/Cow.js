import { BehaviorTree, Sequence, Task, SUCCESS, FAILURE } from 'behaviortree';

import Mob from './Mob';
import TestTask from '../behaviors/TestTask';

class Cow extends Mob {
  constructor({ scene, position }) {
    super({ scene, position, sprite: 'cow' });

    console.log(BehaviorTree);

    // this.bTree = new BehaviorTree({
    //   tree: new Sequence({
    //     nodes: [new TestTask()],
    //   }),
    //   blackboard: this,
    // });
  }

  // update() {
  //   this.bTree.step();
  // }
}

export default Cow;
