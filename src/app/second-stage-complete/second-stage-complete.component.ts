import { Component, OnInit } from '@angular/core';
import { trigger, transition, useAnimation } from '@angular/animations';
import { bounceInUp } from 'ng-animate';

@Component({
  selector: 'app-second-stage-complete',
  templateUrl: './second-stage-complete.component.html',
  styleUrls: ['./second-stage-complete.component.css'],
  animations: [
    trigger('bounceInUp', [transition('* => *', useAnimation(bounceInUp))])
  ],
})
export class SecondStageCompleteComponent implements OnInit {

  public loading : boolean = false;

  constructor() { }

  ngOnInit() {
  }

  ngAfterViewInit() {
  
  }

}
