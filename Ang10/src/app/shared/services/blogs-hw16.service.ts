import { Injectable } from '@angular/core';
import { IBlogs } from '../interfaces/blogs-hw16.interface';

@Injectable({
  providedIn: 'root'
})
export class BlogsHw16Service {
  private arrayBlogs: Array<IBlogs> = [
    {
      id: 1,
      postedBy: 'admin',
      topic: 'First post',
      date: new Date(2020, 4, 22, 10, 0),
      message: 'Sign up to create your account and start to use Angular Blog'
    }
  ];

  constructor() { }

  getBlogsService(): Array<IBlogs> {
    return this.arrayBlogs;
  }

  addBlogService(newBlog: IBlogs): void {
    this.arrayBlogs.push(newBlog);
  }

  editBlogService(editedBlog: IBlogs, searchIndexEditedPost: number): void {
    this.arrayBlogs.splice(searchIndexEditedPost, 1, editedBlog);
  }

  deleteBlogService(searchIndexEditedPost: number): void {
    this.arrayBlogs.splice(searchIndexEditedPost, 1);
  }
}
