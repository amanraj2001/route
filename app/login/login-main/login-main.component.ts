import { Component } from '@angular/core';
import { AuthorizationService } from 'src/app/authorization.service';

@Component({
  selector: 'app-login-main',
  templateUrl: './login-main.component.html',
  styleUrls: ['./login-main.component.css']
})
export class LoginMainComponent {

  constructor(private demo:AuthorizationService){

  }

      log(){
      return  this.demo.log();
      }
}
