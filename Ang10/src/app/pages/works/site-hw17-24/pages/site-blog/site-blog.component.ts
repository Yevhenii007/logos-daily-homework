import { Component, OnInit } from '@angular/core';
import { IBlogs } from 'src/app/shared/interfaces/blogs-hw16.interface';
import { BlogsHw17ServerService } from 'src/app/shared/services/blogs-hw17-server.service';

@Component({
  selector: 'app-site-blog',
  templateUrl: './site-blog.component.html',
  styleUrls: ['./site-blog.component.scss']
})
export class SiteBlogComponent implements OnInit {

  arrayBlogs: Array<IBlogs> = [];

  constructor(private blogsServise: BlogsHw17ServerService) { }

  ngOnInit(): void {
    this.getBlogs();
  }

  getBlogs(): void {
    this.blogsServise.getJSONBlogs().subscribe(
      data => {
        this.arrayBlogs = data;
      }
    );
  }

}
