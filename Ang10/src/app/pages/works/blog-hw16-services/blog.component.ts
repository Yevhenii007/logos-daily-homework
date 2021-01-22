import { Component, OnInit, TemplateRef } from '@angular/core';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { Subscription } from 'rxjs';
import { IBlogs } from '../../../shared/interfaces/blogs-hw16.interface';
import { IUsers } from '../../../shared/interfaces/users-hw16.interface';
import { Blogs } from '../../../shared/models/blogs-hw16.module';
import { Users } from '../../../shared/models/users-hw16.module';
import { BlogsHw16Service } from '../../../shared/services/blogs-hw16.service';
import { UsersHw16Service } from '../../../shared/services/users-hw16.service';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.scss']
})
export class BlogComponent implements OnInit {

  currentUser: string;
  btnValueForModalTitle: string;
  signInStatus: boolean;
  signUpStatus: boolean;
  addPostStatus: boolean;
  editPostStatus: boolean;

  userNameInput = '';
  emailInput = '';
  passwordInput = '';
  titleInput = '';
  textarea = '';
  postsId: number;

  userExisting = false;
  userAccessing = false;
  existedUser: IUsers;
  editStatus: boolean;

  localArrayBlogs: Array<IBlogs> = [];
  localArrayUsers: Array<IUsers> = [];


  modalRef: BsModalRef;
  subscriptions: Subscription[] = [];
  constructor(private usersService: UsersHw16Service, private blogsService: BlogsHw16Service, private modalService: BsModalService) { }
  ngOnInit(): void {
    this.getBlogs();
    this.getUsers();
  }
  openModal(template: TemplateRef<any>): void {
    this.modalRef = this.modalService.show(template);
    this.subscriptions.push(
      this.modalRef.onHidden.subscribe(() => {
        this.unsubscribe();
      })
    );
  }
  unsubscribe(): void {
    this.subscriptions.forEach((subscription: Subscription) => {
      subscription.unsubscribe();
    });
    this.subscriptions = [];
    this.resetInputs();
  }
  private resetInputs(): void {
    this.userNameInput = '';
    this.emailInput = '';
    this.passwordInput = '';
    this.titleInput = '';
    this.textarea = '';
    this.editStatus = false;
  }
  private getBlogs(): void {
    this.localArrayBlogs = this.blogsService.getBlogsService();
  }
  private getUsers(): void {
    this.localArrayUsers = this.usersService.getUsersService();
  }


  determinationOfModalTitle(btnValue: string): void {
    this.btnValueForModalTitle = btnValue;
  }

  showModalFunction(btnValue: string, template: TemplateRef<any>, blog: IBlogs): void {
    switch (btnValue) {
      case 'Sign In':
        this.signInStatus = true;
        this.signUpStatus = false;
        this.addPostStatus = false;
        this.editPostStatus = false;
        break;
      case 'Sign Up':
        this.signInStatus = false;
        this.signUpStatus = true;
        this.addPostStatus = false;
        this.editPostStatus = false;
        break;
      case 'Add post':
        this.signInStatus = false;
        this.signUpStatus = false;
        this.addPostStatus = true;
        this.editPostStatus = false;
        break;
      case 'Edit post':
        this.titleInput = blog.topic;
        this.textarea = blog.message;
        this.postsId = blog.id;
        this.editStatus = true;

        this.signInStatus = false;
        this.signUpStatus = false;
        this.addPostStatus = false;
        this.editPostStatus = true;
        break;
    }
    this.openModal(template);
    this.determinationOfModalTitle(btnValue);
  }

  signInSignUpSubmit(): void {
    if (!this.signInStatus) {
      this.signUpImplementation();
    } else {
      this.signInImplementation();
    }
  }
  signInImplementation(): void {
    if (
      this.emailInput === '' ||
      this.passwordInput === ''
    ) {
      alert('Not enougth data for sign in!');
    } else {
      for (const user of this.localArrayUsers) {
        if (user.email === this.emailInput) {
          this.userExisting = true;
          this.existedUser = user;
          break;
        }
        this.userExisting = false;
      }
      if (this.userExisting === true) {
        if (this.existedUser.password === this.passwordInput) {
          this.currentUser = this.existedUser.username;
          this.modalRef.hide();
        } else {
          alert('Incorrect password!');
        }
      } else {
        alert('User with such email doesn`t exist!');
      }
    }
  }
  signUpImplementation(): void {
    if (
      this.userNameInput === '' ||
      this.emailInput === '' ||
      this.passwordInput === ''
    ) {
      alert('Not enougth data for sign up!');
    } else {
      for (const user of this.localArrayUsers) {
        if (user.username !== this.userNameInput) {
          this.userExisting = false;
        } else {
          alert('User with such username already exist!');
          this.userExisting = true;
          break;
        }
        if (user.email !== this.emailInput) {
          this.userExisting = false;
        } else {
          alert('User with such email already exist!');
          this.userExisting = true;
          break;
        }
      }
      if (this.userExisting === false) {
        const newUser = new Users(1, this.userNameInput, this.emailInput, this.passwordInput);
        if (this.localArrayUsers.length > 0) {
          newUser.id = this.localArrayUsers.slice(-1)[0].id + 1;
        }
        this.usersService.addUserService(newUser);
        this.currentUser = newUser.username;
        this.modalRef.hide();
      }
    }
  }
  addEditPostSubmit(): void {
    if (
      this.titleInput === '' ||
      this.textarea === ''
    ) {
      alert('Not enough data to add a post!');
    } else {
      if (!this.editStatus) {
        const newBlog = new Blogs(1, this.currentUser, this.titleInput, new Date(), this.textarea);
        if (this.localArrayBlogs.length > 0) {
          newBlog.id = this.localArrayBlogs.slice(-1)[0].id + 1;
        }
        this.blogsService.addBlogService(newBlog);
      } else {
        const editedBlog = new Blogs(this.postsId, this.currentUser, this.titleInput, new Date(), this.textarea);
        const searchIndexEditedPost = this.localArrayBlogs.findIndex(item => item.id === this.postsId);
        this.blogsService.editBlogService(editedBlog, searchIndexEditedPost);
        this.editStatus = false;
      }
      this.modalRef.hide();
    }
  }
  deletePost(blog: IBlogs): void {
    const searchIndexEditedPost = this.localArrayBlogs.findIndex(item => item.id === blog.id);
    this.blogsService.deleteBlogService(searchIndexEditedPost);
  }

  signOutBtn(): void {
    this.currentUser = '';
  }
  userCheck(blogPostedBy: string): boolean {
    if (
      this.currentUser === blogPostedBy ||
      this.currentUser === 'admin'
    ) {
      return true;
    } else {
      return false;
    }
  }
}
