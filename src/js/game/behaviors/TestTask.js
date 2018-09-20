import { BehaviorTree, Sequence, Task, SUCCESS, FAILURE } from 'behaviortree';

const TestTask = Task;
// const TestTask = new Task({
//   // (optional) this function is called directly before the run method
//   // is called. It allows you to setup things before starting to run
//   // Beware: if task is resumed after calling this.running(), start is not called.
//   start: blackboard => {
//     blackboard.isStarted = true;
//   },
//
//   // (optional) this function is called directly after the run method
//   // is completed with either this.success() or this.fail(). It allows you to clean up
//   // things, after you run the task.
//   end: blackboard => {
//     blackboard.isStarted = false;
//   },
//
//   // This is the meat of your task. The run method does everything you want it to do.
//   run: blackboard => {
//     console.log('running');
//     return SUCCESS;
//   },
// });

export default TestTask;
