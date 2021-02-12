import { Component, OnInit } from '@angular/core';
import { IBlogs } from 'src/app/shared/interfaces/blogs-hw16.interface';
import { Blogs } from 'src/app/shared/models/blogs-hw16.module';
import { BlogsHw17ServerService } from 'src/app/shared/services/blogs-hw17-server.service';

@Component({
  selector: 'app-site-admin-blogs',
  templateUrl: './site-admin-blogs.component.html',
  styleUrls: ['./site-admin-blogs.component.scss']
})
export class SiteAdminBlogsComponent implements OnInit {

  blogId: number;
  blogAuthor = '';
  blogTitle = '';
  blogText = '';
  blogImage = 'https://www.lapiec-pizza.com.ua/wp-content/uploads/2018/08/Salyami.png';
  editStatus: boolean;
  searchWord: string;
  propertiesSearch: Array<string> = ['topic', 'message', 'date', 'postedBy'];

  arrowOrderNumberDirection = 'fa fa-chevron-up';
  arrowTitleDirection: string;
  arrowTextDirection: string;
  arrowDateDirection: string;
  arrowAuthorDirection: string;
  order: string;
  reverseStatus = true;

  arrayBlogs: Array<IBlogs> = [];

  constructor(private blogsService: BlogsHw17ServerService) { }

  ngOnInit(): void {
    this.getBlogs();
  }

  private getBlogs(): void {
    this.blogsService.getJSONBlogs().subscribe(
      data => {
        this.arrayBlogs = data;
      }
    );
  }

  addBlog(): void {
    const newBlog = new Blogs(this.blogId, this.blogAuthor, this.blogTitle, new Date(), this.blogText, this.blogImage);
    if (
      this.blogAuthor.trim() !== '' &&
      this.blogText.trim() !== '' &&
      this.blogTitle.trim() !== ''
    ) {
      if (!this.editStatus) {
        delete newBlog.id;
        this.blogsService.postJSONBlogs(newBlog).subscribe(
          () => {
            this.getBlogs();
          }
        );
        this.cleaningInputs();
      } else {
        this.blogsService.editJSONBlogs(newBlog).subscribe(
          () => {
            this.getBlogs();
          }
        );
        this.editStatus = false;
        this.cleaningInputs();
      }
    } else {
      alert('Please, add more data!');
    }
  }

  editBlog(blog: IBlogs): void {
    this.blogId = blog.id;
    this.blogTitle = blog.topic;
    this.blogText = blog.message;
    this.blogAuthor = blog.postedBy;
    this.editStatus = true;
  }

  deleteBlog(blog: IBlogs): void {
    this.blogsService.deleteJSONBlogs(blog.id).subscribe(
      () => {
        this.getBlogs();
      }
    );
  }

  cleaningInputs(): void {
    this.blogAuthor = '';
    this.blogTitle = '';
    this.blogText = '';
  }

  orderByFunction(arrowDirection: string, order: string): void {
    this.arrowOrderNumberDirection = '';
    this.arrowTitleDirection = '';
    this.arrowTextDirection = '';
    this.arrowDateDirection = '';
    this.arrowAuthorDirection = '';
    this.order = order;
    this.reverseStatus = !this.reverseStatus;
    if (this.reverseStatus) {
      this[arrowDirection] = 'fa fa-chevron-down';
    } else {
      this[arrowDirection] = 'fa fa-chevron-up';
    }
  }

}
