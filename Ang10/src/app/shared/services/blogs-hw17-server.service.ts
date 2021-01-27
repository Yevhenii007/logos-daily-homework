import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { IBlogs } from '../interfaces/blogs-hw16.interface';

@Injectable({
  providedIn: 'root'
})
export class BlogsHw17ServerService {

  private urlBlogs: string;
  constructor(private http: HttpClient) {
    this.urlBlogs = 'http://localhost:3000/blogs';
  }

  getJSONBlogs(): Observable<Array<IBlogs>> {
    return this.http.get<Array<IBlogs>>(this.urlBlogs);
  }

  postJSONBlogs(blog: IBlogs): Observable<IBlogs> {
    return this.http.post<IBlogs>(this.urlBlogs, blog);
  }

  deleteJSONBlogs(id: number): Observable<IBlogs> {
    return this.http.delete<IBlogs>(`${this.urlBlogs}/${id}`);
  }

  editJSONBlogs(blog: IBlogs): Observable<IBlogs> {
    return this.http.put<IBlogs>(`${this.urlBlogs}/${blog.id}`, blog);
  }
}
