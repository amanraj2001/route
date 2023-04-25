import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CrisisService } from '../crisis.service';

@Component({
  selector: 'app-crisis-detail',
  templateUrl: './crisis-detail.component.html',
  styleUrls: ['./crisis-detail.component.css']
})
export class CrisisDetailComponent implements OnInit {
            constructor(private route:ActivatedRoute,private demo:CrisisService){

            }
            crisisname:any
            result!:any
            ngOnInit(): void {
              //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
              //Add 'implements OnInit' to the class.
              this.route.params.subscribe(p=>{
                console.log(p['id']);
                this.result=this.demo.data.find(e=>e.id==p['id'])
                console.log(this.result);
                this.crisisname=this.result.desc
              })
            }

            save(){
              this.result.desc=this.crisisname
            }
}
