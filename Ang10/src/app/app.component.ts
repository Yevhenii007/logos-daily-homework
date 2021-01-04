import { Component } from '@angular/core';
import { ITask } from './hw13/task.interface';
import { Task } from './hw13/task.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Ang10';

  //// * hw.13 array to child ///////////////
  public arrayObjTasks: Array<ITask> = [];
  public task: string;
  public existingOfObjWithSuchTask = false;
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
}
