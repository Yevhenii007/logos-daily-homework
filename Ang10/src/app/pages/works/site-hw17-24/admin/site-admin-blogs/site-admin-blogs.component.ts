import { Component, OnInit } from '@angular/core';
import { AngularFireStorage } from '@angular/fire/storage';
import { Observable } from 'rxjs';
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
  blogImage = '';
  imageStatus: boolean;
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
  uploadProgressStatus: boolean;
  uploadProgress: Observable<number>;

  constructor(
    private blogsService: BlogsHw17ServerService,
    private angularFireStorage: AngularFireStorage
    ) { }

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
    this.blogImage = blog.image;
    this.editStatus = true;
    this.imageStatus = true;
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

  resetInputs(): void {
    this.blogTitle = '';
    this.blogText = '';
    this.blogAuthor = '';
    this.editStatus = false;
    this.resetImage();
  }
  resetImage(): void {
    this.imageStatus = false;
    this.uploadProgressStatus = false;
    this.blogImage = '';
  }
  uploadFile(event): void {
    const file = event.target.files[0];
    const type = file.type.slice(file.type.indexOf('/') + 1);
    const name = file.name.slice(0, file.name.lastIndexOf('.')).toLowerCase();
    const filePath = `images/${name}.${type}`;
    console.log(file, type, name, filePath);
    const task = this.angularFireStorage.upload(filePath, file);
    this.uploadProgressStatus = true;
    this.uploadProgress = task.percentageChanges();
    task.then(image => {
      this.angularFireStorage.ref(`images/${image.metadata.name}`).getDownloadURL().subscribe(url => {
        this.blogImage = url;
        this.imageStatus = true;
      });
    });
  }

  disabledBtn(): boolean {
    if (
      this.blogTitle.trim() === '' ||
      this.blogText.trim() === '' ||
      this.blogAuthor.trim() === '' ||
      this.blogImage.trim() === ''
    ) {
      return true;
    } else {
      return false;
    }
  }

}
