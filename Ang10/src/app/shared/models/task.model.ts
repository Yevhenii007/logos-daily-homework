import { ITask } from '../interfaces/task.interface';

export class Task implements ITask {
  constructor(
    public id: number,
    public task: string,
    public status: boolean = false
  ) {
  }
}
