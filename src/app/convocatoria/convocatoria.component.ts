import { Component, OnInit } from '@angular/core';
import { trigger, transition, useAnimation } from '@angular/animations';
import { fadeIn } from 'ng-animate';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-convocatoria',
  templateUrl: './convocatoria.component.html',
  styleUrls: ['./convocatoria.component.css'],
  animations: [
    trigger('fadeIn', [transition('* => *', useAnimation(fadeIn))])
  ],
})
export class ConvocatoriaComponent implements OnInit {

  constructor(
    private title : Title
  ) { }

  ngOnInit() {
    this.title.setTitle('Brain Race by Rocktech')
  }

}
