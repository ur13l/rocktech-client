import { Component, OnInit, ViewChild} from '@angular/core';
import { WizardComponent, WizardStepComponent } from 'angular2-wizard';
import { StepperComponent } from '../stepper/stepper.component';
import { trigger, transition, useAnimation } from '@angular/animations';
import { bounce, bounceInDown, bounceInUp } from 'ng-animate';


@Component({
  selector: 'app-first-stage-complete',
  templateUrl: './first-stage-complete.component.html',
  styleUrls: ['./first-stage-complete.component.css'],
  animations: [
    trigger('bounceInUp', [transition('* => *', useAnimation(bounceInUp))])
  ],
})
export class FirstStageCompleteComponent implements OnInit {
  @ViewChild('stepper') public stepper : StepperComponent;

  constructor() { }

  ngOnInit() {
  }

  ngAfterViewInit() {
  
  }

}
