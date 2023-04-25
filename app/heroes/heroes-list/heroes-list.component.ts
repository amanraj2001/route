import { Component } from '@angular/core';
import { AuthguardGuard } from 'src/app/authguard.guard';
import { AuthorizationService } from 'src/app/authorization.service';
import { hero } from '../her';

@Component({
  selector: 'app-heroes-list',
  templateUrl: './heroes-list.component.html',
  styleUrls: ['./heroes-list.component.css']
})
export class HeroesListComponent {
    herodata:Array<any>=hero

      constructor(private authservice:AuthorizationService, private authguard:AuthguardGuard) {

      }
   
}
