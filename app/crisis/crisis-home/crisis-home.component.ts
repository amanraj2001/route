import { Component } from '@angular/core';
import { CrisisService } from '../crisis.service';

@Component({
  selector: 'app-crisis-home',
  templateUrl: './crisis-home.component.html',
  styleUrls: ['./crisis-home.component.css']
})
export class CrisisHomeComponent {

  data:any
  constructor(private demo:CrisisService) {
    this.data=this.demo.data

  }
}
