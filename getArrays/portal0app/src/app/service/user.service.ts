import { HttpClient, HttpErrorResponse, HttpEvent } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { User } from '../model/user';
import { CustomHttpResponse } from '../model/CustomHttpResponse';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  private host = environment.apiUrl;
  constructor(private httpClient: HttpClient) {}
  public getUsers(): Observable<User[]> {
    return this.httpClient.get<User[]>(`${this.host}/user/list`);
  }
  // User | HttpErrorResponse
  // User | HttpErrorResponse
  public addUser(formdata: FormData): Observable<any> {
    return this.httpClient.post(`${this.host}/user/add`, formdata);
  }
  public updateUser(
    formdata: FormData
  ): Observable<User | HttpErrorResponse | any> {
    return this.httpClient.post<User>(`${this.host}/user/update`, formdata);
  }
  public resetPassword(
    email: string
  ): Observable<CustomHttpResponse | HttpErrorResponse | any> {
    return this.httpClient.get<CustomHttpResponse>(
      `${this.host}/user/resetPassword/${email}`
    );
  }
  public updateProfileImage(
    formdata: FormData
  ): Observable<HttpEvent<User> | HttpErrorResponse> {
    return this.httpClient.post<User>(
      `${this.host}/user/updateProfileImage`,
      formdata,
      { reportProgress: true, observe: 'events' }
    );
  }
  public deletuser(
    userId: number
  ): Observable<CustomHttpResponse | HttpErrorResponse | any> {
    return this.httpClient.delete<CustomHttpResponse>(
      `${this.host}/user/delete/${userId}`
    );
  }
  public addusertoLocalCache(users: User[]): void {
    localStorage.setItem('users', JSON.stringify(users));
  }
  public getUsersFromLocalcache(): User[] | null {
    if (localStorage.getItem('users')) {
      const storedData = localStorage.getItem('users');
      if (storedData !== null) {
        return JSON.parse(storedData);
      }
    }
    return null;
  }

  public gettingUsersFromLocalcaheOld(): User[] | null {
    if (localStorage.getItem('users')) {
      return JSON.parse(localStorage.getItem('users')!);
    }
    return null;
  }

  public createUserFormdata(
    loggedInUsername: string | any,
    user: User,
    profileImage: File
  ): FormData {
    const formdata = new FormData();
    formdata.append('currentUsername', loggedInUsername);
    formdata.append('firstName', user.firstName);
    formdata.append('lastName', user.lastName);
    formdata.append('username', user.username);
    formdata.append('email', user.email);
    formdata.append('role', user.role);
    formdata.append('profileImage', profileImage);
    formdata.append('isActive', JSON.stringify(user.isActive));
    formdata.append('isNonLocked', JSON.stringify(user.isNotLocked));
    // isNonLocked
    // formdata.append('firstName', user.firstName);
    // formdata.append('firstName', user.firstName);
    return formdata;
  }
}
