
import {Component, Input, OnChanges} from 'angular2/core';

import {TaskView} from '../task/task';

import {MeteorComponent} from 'angular2-meteor';

import { Tasks } from '../../api/tasks';

import {Mongo} from "meteor/mongo";

@Component({
  selector: 'task-list',
  templateUrl: 'imports/components/tasks-list/tasks-list.html',
  directives: [TaskView]
})
export class TaskList extends MeteorComponent implements OnChanges {
  tasks: Mongo.Cursor<Task>;
  @Input() hideCompleted: boolean = false;
  isLoading: boolean;

  constructor() {
    super();
    this.isLoading = true;
    this.subscribe('tasks.public', () => {
      this.isLoading = false;
    }, true);
  }

  ngOnChanges() {
    this.tasks = this._getTasks(this.hideCompleted);
  }

  addTask(text) {
    this.call('tasks.addTask', text);
  }

  get todoCount() {
    return Tasks.find({
      checked: false
    }).count();
  };

  _getTasks(hideCompleted) {
    if (hideCompleted) {
      return Tasks.find({
        checked: false
      }, {sort: {createdAt: -1}});
    }
    return Tasks.find({}, {sort: {createdAt: -1}});
  }
}