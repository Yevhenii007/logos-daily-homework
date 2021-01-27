import { IBlogs } from '../interfaces/blogs-hw16.interface';

export class Blogs implements IBlogs {
  constructor(
    public id: number,
    public postedBy: string,
    public topic: string,
    public date: object,
    public message: string,
    public image?: string,
  ) {

  }
}
