export class User {
  public id: number | any;
  public userId: string | any;
  public firstName: string;
  public lastName: string;
  public username: string;

  public password: string | any;
  public email: string;

  public profileImageUrl: string | any;

  public lastLoginDate: Date | any;
  public lastLogindateDisplay: Date | any;
  public joinDate: Date | undefined;

  public role: string;
  public authorities: [];
  public isActive: boolean;
  public isNotLocked: boolean;

  constructor() {
    this.authorities = [];
    this.role = '';
    this.email = '';
    this.isActive = false;
    this.isNotLocked = false;
    this.firstName = '';
    this.lastName = '';
    this.username = '';
  }
}
