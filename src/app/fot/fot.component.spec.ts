import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FotComponent } from './fot.component';

describe('FotComponent', () => {
  let component: FotComponent;
  let fixture: ComponentFixture<FotComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FotComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FotComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
