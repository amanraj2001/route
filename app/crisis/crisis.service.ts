import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CrisisService {

  constructor() { }
  data:Array<any>=[
    {
      id:1,
      desc:"Dragon Burning Cities"
    },
    {
      id:2,
      desc:"Sky Rains Great White Sharks"
    },
    {
      id:3,
      desc:"Giant Asteroid Heading For Earth"
    },
    {
      id:4,
      desc:"Procrastinators Meeting Delayed Again"
    },
  ]
}
