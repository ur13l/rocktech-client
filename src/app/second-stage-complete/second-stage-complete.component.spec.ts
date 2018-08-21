import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SecondStageCompleteComponent } from './second-stage-complete.component';

describe('SecondStageCompleteComponent', () => {
  let component: SecondStageCompleteComponent;
  let fixture: ComponentFixture<SecondStageCompleteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SecondStageCompleteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SecondStageCompleteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
