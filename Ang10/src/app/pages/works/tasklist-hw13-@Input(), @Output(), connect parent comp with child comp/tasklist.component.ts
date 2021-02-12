import { Component, OnInit } from '@angular/core';

import { ITask } from '../../../shared/interfaces/task.interface';
import { Task } from '../../../shared/models/task.module';

@Component({
  selector: 'app-tasklist',
  templateUrl: './tasklist.component.html',
  styleUrls: ['./tasklist.component.scss']
})
export class TasklistComponent implements OnInit {
  public arrayObjTasks: Array<ITask> = [
    {
      id: 1,
      task: 'HTML',
      status: true
    },
    {
      id: 2,
      task: 'Angular',
      status: false
    },
    {
      id: 3,
      task: 'Javascript',
      status: false
    }
  ];
  public task: string;

  public existingOfObjWithSuchTask = false;
  public editedObjStatus = true;
  public editedObjId: number;
  public editedObjTask: string;


  constructor() { }

  ngOnInit(): void {
  }

  getNewElemId(): number {
    if (this.arrayObjTasks.length > 0) {
      return this.arrayObjTasks.slice(-1)[0].id + 1;
    } else {
      return 1;
    }
  }
  addTask(): void {
    for (const objTask of this.arrayObjTasks) {
      if (this.arrayObjTasks.length > 0) {
        if (objTask.task === this.task) {
          alert('Such task already exist');
          this.existingOfObjWithSuchTask = true;
          break;
        } else {
          this.existingOfObjWithSuchTask = false;
        }
      }
    }
    if (this.existingOfObjWithSuchTask === false) {
      const objTask: ITask = new Task(this.getNewElemId(), this.task);
      this.arrayObjTasks.push(objTask);
      this.task = '';
    }
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
    const objTaskIndex = this.arrayObjTasks.findIndex(item => item.id === objTask.id);
    this.arrayObjTasks.splice(objTaskIndex, 1);
  }
  saveTask(): void {
    for (const objTask of this.arrayObjTasks) {
      if (objTask.task === this.editedObjTask) {
        alert('Such task already exist');
        this.existingOfObjWithSuchTask = true;
        break;
      } else {
        this.existingOfObjWithSuchTask = false;
      }
    }
    if (this.existingOfObjWithSuchTask === false) {
      const objTaskIndex = this.arrayObjTasks.findIndex(item => item.id === this.editedObjId);
      this.arrayObjTasks[objTaskIndex].task = this.editedObjTask;
      this.editedObjTask = '';
      this.editedObjStatus = !this.editedObjStatus;
    }
  }
}
