import { Component, OnInit } from '@angular/core';
import { trigger, transition, useAnimation } from '@angular/animations';
import { fadeIn } from 'ng-animate';
import { UserService } from '../_services/user.service';

@Component({
  selector: 'app-recover-password',
  templateUrl: './recover-password.component.html',
  styleUrls: ['./recover-password.component.css'],
  animations: [
    trigger('fadeIn', [transition('* => *', useAnimation(fadeIn))])
  ],
})
export class RecoverPasswordComponent implements OnInit {

  public formSent : boolean = false;
  public email : string;
  public errorMessage : string;
  public loading : boolean;

  constructor(
    private userService : UserService
  ) { }

  ngOnInit() {
  }

  submit(event : Event) {
    event.preventDefault();
    this.loading = true;
    this.userService.recoverPassword(this.email)
      .subscribe(
        response => {
          if(response.data) {
            this.formSent = true;          
            this.loading = false;
          }
          else {
            this.errorMessage = "Ha habido un error al recuperar la contraseña, verifica que la dirección esté bien escrita o que tu correo sí se ha registrado."
            this.loading = false;
          }
        }
      )

  }

}
