import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import {
  HttpClient,
  HttpErrorResponse,
  HttpResponse,
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from '../model/user';
import { JwtHelperService } from '@auth0/angular-jwt';

@Injectable({
  providedIn: 'root',
})
export class AuthenticationService {
  public host: string = environment.apiUrl;
  private token!: string | null;

  // difference here in null attr.
  private loggedInUsername!: string | null;
  private jwtHelper = new JwtHelperService();
  constructor(private http: HttpClient) {}

  //  login method
  public login(user: User): Observable<HttpResponse<User>> {
    return this.http.post<User>(`${this.host}/user/login`, user, {
      observe: 'response',
    });
  }

  //  register method
  public register(user: User): Observable<User> {
    return this.http.post<User>(`${this.host}/user/register`, user);
  }

  //  logout method
  public logout(): void {
    this.token = null;
    this.loggedInUsername = null;
    localStorage.removeItem('user');
    localStorage.removeItem('token');
    localStorage.removeItem('users');
  }

  //  logout method
  public saveToken(token: string): void {
    this.token = token;
    localStorage.setItem('token', token);
  }

  // adding users to cahe
  public addUsersToLocalStorage(user: User): void {
    localStorage.setItem('user', JSON.stringify(user));
  }
  // geting usr from localStorage
  public getUserFromLocalcache(): User {
    return JSON.parse(localStorage.getItem('user')!);
    // changed
  }

  // loading token
  public loadToken(): void {
    this.token = localStorage.getItem('token');
  }

  // get token
  public getToken(): string {
    return this.token!;
    // chahnged
  }

  public isLoggedIn(): boolean | undefined {
    // chqanged Code
    this.loadToken();
    if (this.token != null && this.token !== '') {
      if (this.jwtHelper.decodeToken(this.token).sub != null || '') {
        if (!this.jwtHelper.isTokenExpired(this.token)) {
          this.loggedInUsername = this.jwtHelper.decodeToken(this.token).sub;
          return true;
        }
      }
    } else {
      // this.logout;
      this.logout();
      return false;
    }
    return false;
  }
}
// public isUserLoggedIn(): boolean  {
//   this.loadToken();
//   if (this.token != null && this.token !== '') {
//     if (this.jwtHelper.decodeToken(this.token).sub != null || '') {
//       if (!this.jwtHelper.isTokenExpired(this.token)) {
//         this.loggedInUsername = this.jwtHelper.decodeToken(this.token).sub;
//         return true;
//       }
//     }
//   } else {
//     this.logout();
//     return false;
//   }
// }
