import { Component,OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { HeroService } from '../hero.service';

@Component({
  selector: 'app-hero-details',
  templateUrl: './hero-details.component.html',
  styleUrls: ['./hero-details.component.css']
})
export class HeroDetailsComponent implements OnInit {

  constructor(private route:ActivatedRoute,private demo:HeroService,private router:Router) {

  }
  result:any
  ans:string=''
  ngOnInit(): void {
    this.route.params.subscribe(p=>{
      console.log(p['id']);
      this.result=this.demo.list.find((x:any)=>x.id==p['id'])
      console.log(this.result);
      this.ans=this.result.name
    })
  }
    back(){
      this.router.navigate(['/hero'])
    }
}
