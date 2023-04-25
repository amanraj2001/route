import { Injectable } from '@angular/core';
import { hero } from './her';

@Injectable({
  providedIn: 'root'
})
export class HeroService {

  constructor() { }
list:any=hero

}
