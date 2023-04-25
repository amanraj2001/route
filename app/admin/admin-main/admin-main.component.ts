import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-admin-main',
  templateUrl: './admin-main.component.html',
  styleUrls: ['./admin-main.component.css']
})
export class AdminMainComponent {




      constructor(private router:Router){


      }
      // managecrisis(){
      //   this.router.navigate(['managecrisis'])
      // }
      dash(){
        this.router.navigate(['admin'])
      }

}
