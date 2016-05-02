import { Meteor } from 'meteor/meteor';
import { Tasks } from '../imports/api/tasks';

Meteor.startup(() => {
  // code to run on server at startup
   /************Stress test***************/
  if (Tasks.find({}).count() == 0) {
    for (let i = 0; i < 2000; i ++) {
      Meteor.call('tasks.addTask', `text ${i}`);
    }     
  }
});
