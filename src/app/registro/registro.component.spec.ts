import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RegistroComponent } from './registro.component';

describe('RegistroComponent', () => {
  let component: RegistroComponent;
  let fixture: ComponentFixture<RegistroComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RegistroComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RegistroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should confirm passwords', () => {
    component.user.password = '123asdZXC';
    component.user.confirm_password = '123asdZXC';
    expect(component.form.controls['confirmPasswordInput'].valid).toBeTruthy();
  })
});
