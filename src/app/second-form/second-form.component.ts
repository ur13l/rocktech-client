import { Component, OnInit } from '@angular/core';
import { trigger, transition, useAnimation } from '@angular/animations';
import { fadeIn } from 'ng-animate';
import { User } from '../_models/user';

@Component({
  selector: 'app-second-form',
  templateUrl: './second-form.component.html',
  styleUrls: ['./second-form.component.css'],
  animations: [
    trigger('fadeIn', [transition('* => *', useAnimation(fadeIn))])
  ],
})
export class SecondFormComponent implements OnInit {
  public stages : string[] = [
    'Early development',
    'En desarrollo',
    'Prototipo',
    'Implementación'
  ] ;
  public user : User;

  constructor() { }

  ngOnInit() {
  }

}
