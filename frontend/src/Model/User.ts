export class User {
  public userId: number;
  public userName: string;
  public userMail: string;
  public isAdmin: boolean;
  public userPassword: string;

  constructor(
    userId: number,
    userName: string,
    userMail: string,
    isAdmin: boolean,
    userPassword: string
  ) {
    this.userId = userId;
    this.userName = userName;
    this.userMail = userMail;
    this.isAdmin = isAdmin;
    this.userPassword = userPassword;
  }
}

export class UserLogIn {
  public email: string;
  public password: string;

  constructor(email: string, password: string) {
    this.email = email;
    this.password = password;
  }
}
