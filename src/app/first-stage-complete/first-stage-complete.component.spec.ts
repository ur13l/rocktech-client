import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FirstStageCompleteComponent } from './first-stage-complete.component';

describe('FirstStageCompleteComponent', () => {
  let component: FirstStageCompleteComponent;
  let fixture: ComponentFixture<FirstStageCompleteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FirstStageCompleteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FirstStageCompleteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
