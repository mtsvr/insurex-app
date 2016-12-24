import { Injectable } from '@angular/core';
import { Router } from '@angular/router';


export class User {
  constructor(
    public rut: string,
    public pwd: string,
    public rol: number,
  ) {}
}

let users = [
  new User('184068702','matias1',1),
  new User('11111111','1234',2),
  new User('55555555','admin',0),
];

@Injectable()
export class AuthService {

  constructor(
    private router: Router){
  }

  logout() {
    localStorage.clear();
    this.router.navigate(['login']);
  }

  login(user){
         let authenticatedUser = users.find(u => u.rut === user.rut);
     if (authenticatedUser && authenticatedUser.pwd === user.pwd){
      localStorage.setItem("rut", authenticatedUser.rut);
      localStorage.setItem("pwd", authenticatedUser.pwd);
      console.log(authenticatedUser);
      this.navigateUser(authenticatedUser.rol);
     }
  }

  navigateUser(rol: number){
    if (rol == 1){
      this.router.navigate(['../cliente']);
    }
    else if (rol == 2){
      this.router.navigate(['../corredor']);
    }
    else if (rol == 0) {
      this.router.navigate(['../admin']);
    }
  }

  checkCredentials(){
    if (localStorage.getItem("rut") === null){
      this.router.navigate(['login']);
    }
  }

}
