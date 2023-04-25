import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthorizationService {
  private isloggedIn: boolean;
  constructor() {
    this.isloggedIn=false;
  }


//   login(){
//     this.isloggedIn=true;
//   }
//   isUserLoggedIn(): boolean {
//     return this.isloggedIn;
// }
log(){
  this.isloggedIn=true
}
isuserloggedin(){
  return this.isloggedIn
}
}
