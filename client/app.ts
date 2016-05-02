import 'zone.js/dist/zone';
import 'reflect-metadata';

import {Component, NgZone, provide, enableProdMode} from 'angular2/core';

// import {Tasks} from '../imports/api/tasks';

import {TaskList} from '../imports/components/tasks-list/tasks-list';

import {bootstrap} from 'angular2-meteor-auto-bootstrap';

enableProdMode();

@Component({
  selector: 'app',
  templateUrl: 'client/app.html',
  directives: [TaskList]
})
export class Todos {
}

bootstrap(Todos);