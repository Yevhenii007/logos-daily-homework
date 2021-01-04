import { Component, Input, OnInit } from '@angular/core';

import { ITask } from './task.interface';
import { Task } from './task.model';

@Component({
  selector: 'app-hw13',
  templateUrl: './hw13.component.html',
  styleUrls: ['./hw13.component.scss']
})
export class Hw13Component implements OnInit {

  @Input() arrayObjTasksFromParent: Array<ITask>;

  public existingOfObjWithSuchTask = false;
  public editedObjStatus = true;
  public editedObjId: number;
  public editedObjTask: string;


  constructor() { }

  ngOnInit(): void {
  }


  changeStatus(objTask: ITask): void {
    objTask.status = !objTask.status;
  }
  editTask(objTask: ITask): void {
    this.editedObjTask = objTask.task;
    this.editedObjId = objTask.id;
    this.editedObjStatus = !this.editedObjStatus;
  }
  deleteTask(objTask: ITask): void {
    const objTaskIndex = this.arrayObjTasksFromParent.findIndex(item => item.id === objTask.id);
    this.arrayObjTasksFromParent.splice(objTaskIndex, 1);
  }
  saveTask(): void {
    for (const objTask of this.arrayObjTasksFromParent) {
      if (objTask.task === this.editedObjTask) {
        alert('Such task already exist');
        this.existingOfObjWithSuchTask = true;
        break;
      } else {
        this.existingOfObjWithSuchTask = false;
      }
    }
    if (this.existingOfObjWithSuchTask === false) {
      const objTaskIndex = this.arrayObjTasksFromParent.findIndex(item => item.id === this.editedObjId);
      this.arrayObjTasksFromParent[objTaskIndex].task = this.editedObjTask;
      this.editedObjTask = '';
      this.editedObjStatus = !this.editedObjStatus;
    }
  }
}
