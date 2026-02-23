import { NgFor } from '@angular/common';
import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { BehaviorSubject, Subscription } from 'rxjs';
import { NotificationType } from '../Enum/notification-type';
import { CustomHttpResponse } from '../model/CustomHttpResponse';
import { User } from '../model/user';
import { AuthenticationService } from '../service/authentication.service';
import { NotificationService } from '../service/notification.service';
import { UserService } from '../service/user.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css'],
})
export class UserComponent implements OnInit {
  private titleSubject = new BehaviorSubject<string>('Users');
  public titleAction$ = this.titleSubject.asObservable();
  public users: User[] | any = [];
  public user: User | any;
  public active: boolean = false;
  public isAdmin: boolean = false;
  public refreshing: boolean | undefined;
  private subscriptions: Subscription[] = [];
  public selectedUser: User | undefined;
  public fileName: string | any;
  public profileImage: File | any;
  public editUser = new User();
  private currentUsername: string | any;
  public fileStatus: any;

  constructor(
    private router: Router,
    private authenticationService: AuthenticationService,
    private userService: UserService,
    private notificationService: NotificationService
  ) {}

  ngOnInit(): void {
    this.user = this.authenticationService.getUserFromLocalcache();
    this.getUsers(true);
  }

  public changeTitle(title: string): void {
    this.titleSubject.next(title);
  }

  public getUsers(showNotification: boolean): void {
    this.refreshing = true;
    this.subscriptions.push(
      this.userService.getUsers().subscribe(
        (response: User[]) => {
          this.userService.addusertoLocalCache(response);
          this.users = response;
          this.refreshing = false;
          if (showNotification) {
            this.sendNotification(
              NotificationType.SUCCESS,
              `${response.length} user(s) loaded successfully.`
            );
          }
        },
        (errorResponse: HttpErrorResponse) => {
          console.log(errorResponse);

          this.sendNotification(
            NotificationType.ERROR,
            errorResponse.error.message
          );
          this.refreshing = false;
        }
      )
    );
  }

  public onEditUser(editUser: User) {
    this.editUser = editUser;
    this.currentUsername = editUser.username;
    this.clickButton('openUserEdit');
  }

  onUpdateUser() {
    const formData = this.userService.createUserFormdata(
      this.currentUsername,
      this.editUser,
      this.profileImage
    );

    console.log(formData.get('role'));
    // roles logging

    this.subscriptions.push(
      this.userService.updateUser(formData).subscribe((response: User) => {
        this.clickButton('closeEditUserModalButton');
        this.getUsers(false);
        this.fileName = null;
        this.profileImage = null;

        this.sendNotification(
          NotificationType.SUCCESS,
          `${response.firstName} ${response.lastName} updated successfully`
        );
        (errorResponse: HttpErrorResponse) => {
          this.sendNotification(
            NotificationType.ERROR,
            errorResponse.error.message
          );
          this.profileImage = null;
        };
      })
    );
  }

  public searchUsers(searchTerm: string): void {
    const results: User[] = [];
    for (const user of this.userService.getUsersFromLocalcache()!) {
      // console.log(user);

      if (
        user.firstName.toLowerCase().indexOf(searchTerm.toLowerCase()) !== -1 ||
        user.lastName.toLowerCase().indexOf(searchTerm.toLowerCase()) !== -1 ||
        user.username.toLowerCase().indexOf(searchTerm.toLowerCase()) !== -1 ||
        user.userId.toLowerCase().indexOf(searchTerm.toLowerCase()) !== -1
      ) {
        results.push(user);
      }
    }

    this.users = results;
    if (results.length === 0 || !searchTerm) {
      this.users = this.userService.getUsersFromLocalcache();
    }
  }

  public onSelectUser(selectedUser: User): void {
    this.selectedUser = selectedUser;
    // this.clickButton('openUserInfo');
    // this.clickButton('openUserInfo');
    // this.clickButton('viewUserModal');

    document.getElementById('openUserInfo')?.click();
  }
  // on deleting user without confirmation
  public onDeleteUser(userId: number) {
    if (confirm('are you sure want to delete the user with id ' + userId)) {
      this.subscriptions.push(
        this.userService.deletuser(userId).subscribe(
          (response: CustomHttpResponse) => {
            this.sendNotification(NotificationType.SUCCESS, response.message);
            // this.getUsers(true);
          },
          (error: HttpErrorResponse) => {
            this.sendNotification(NotificationType.ERROR, error.error.message);
          },
          () => {
            this.getUsers(true);
          }
        )
      );
    }
  }
  // on deleting user without confirmation
  // reset password for user

  onResetPassword(emailForm: NgForm): void {
    this.refreshing = true;

    const emailAddress = emailForm.value['reset-password-email'];
    this.subscriptions.push(
      this.userService.resetPassword(emailAddress).subscribe(
        (response: CustomHttpResponse) => {
          this.sendNotification(NotificationType.SUCCESS, response.message);
          this.refreshing = false;
        },
        (error: HttpErrorResponse) => {
          this.sendNotification(NotificationType.WARNNG, error.error.message);
          this.refreshing = false;
        },
        () => emailForm.reset()
      )
    );

    // this.refreshing = true;

    // const emailAddress = emailForm.value['reset-password-email'];
    // this.subscriptions.push(
    //   this.userService.resetPassword(emailAddress).subscribe(
    //     (response: CustomHttpResponse) => {
    //       this.sendNotification(NotificationType.SUCCESS, response.message);
    //     },
    //     (error: HttpErrorResponse) => {
    //       console.log(error);

    //       this.sendNotification(NotificationType.WARNNG, error.error.message);
    //     },
    //     () => {
    //       emailForm.reset();
    //     }
    //   )
    // );
  }

  // reset password for user

  onAddNewUser(userForm: NgForm): void {
    const formData = this.userService.createUserFormdata(
      null,
      userForm.value,
      this.profileImage
    );
    console.log(formData.getAll);

    this.subscriptions.push(
      this.userService.addUser(formData).subscribe((response: User) => {
        this.clickButton('new-user-close');
        this.getUsers(false);
        this.fileName = null;
        this.profileImage = null;
        userForm.reset();
        this.sendNotification(
          NotificationType.SUCCESS,
          `${response.firstName} ${response.lastName} updated successfully`
        );
        (errorResponse: HttpErrorResponse) => {
          this.sendNotification(
            NotificationType.ERROR,
            errorResponse.error.message
          );
          this.profileImage = null;
        };
      })
    );
  }

  private clickButton(buttonId: string) {
    document.getElementById(buttonId)?.click();
  }

  public onProfileImageChange(fileName: string, file: File): void {
    this.fileName = fileName;
    this.profileImage = file;
  }
  saveNewUser() {
    this.clickButton('new-user-save');
  }

  onLogOut() {}
  updateProfileImage() {}
  // updating current loggedin user
  onUpdateCurrentUser(user: User) {
    console.log(user);
    this.currentUsername =
      this.authenticationService.getUserFromLocalcache().username;
    console.log(this.currentUsername);
    const formData = this.userService.createUserFormdata(
      this.currentUsername,
      user,
      this.profileImage
    );
    // console.log(formData.get('role'));

    this.subscriptions.push(
      this.userService.updateUser(formData).subscribe((response) => {
        console.log('hhhhhh' + response);
      })
    );
  }

  private sendNotification(
    notificationType: NotificationType,
    message: string
  ): void {
    if (message) {
      this.notificationService.notify(notificationType, message);
    } else {
      this.notificationService.notify(
        notificationType,
        'An error occurred. Please try again.'
      );
    }
  }
}
