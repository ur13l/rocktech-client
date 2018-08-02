import { Component, OnInit, ViewChild, Input } from '@angular/core';

@Component({
  selector: 'stepper',
  templateUrl: './stepper.component.html',
  styleUrls: ['./stepper.component.css']
})
export class StepperComponent implements OnInit {
  @Input('activeStep') public activeStep : number;
  constructor() { }

  ngOnInit() {
  }


  ngAfterViewInit() {
  }
}
