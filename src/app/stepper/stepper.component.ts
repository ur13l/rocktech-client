import { Component, OnInit, ViewChild } from '@angular/core';
import { WizardComponent, WizardStepComponent } from 'angular2-wizard';

@Component({
  selector: 'stepper',
  templateUrl: './stepper.component.html',
  styleUrls: ['./stepper.component.css']
})
export class StepperComponent implements OnInit {
  constructor() { }

  ngOnInit() {
  }


  ngAfterViewInit() {
  }
}
