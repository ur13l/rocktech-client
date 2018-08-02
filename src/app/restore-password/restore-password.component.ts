import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { UserService } from '../_services/user.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-restore-password',
  templateUrl: './restore-password.component.html',
  styleUrls: ['./restore-password.component.css']
})
export class RestorePasswordComponent implements OnInit {

  public errorMessage : string;
  public email : string;
  public password : string;
  public token : string;
  public confirm_password : string;
  public restored : boolean = false;
  public loading : boolean = false;

  constructor(
    private title : Title,
    private userService : UserService,
    private route : ActivatedRoute
  ) { 
    this.title.setTitle("Restablecer contraseña");
    this.token = this.route.snapshot.params.token;
  }

  ngOnInit() {
  }

  submit (event : Event) {
      event.preventDefault();
      this.loading = true;
      this.userService.restorePassword(this.email, this.password, this.confirm_password, this.token)
        .subscribe(
          response => {
            if(response.data) {
              this.restored = true;  
              this.loading = false;              
            }
            else {
              this.errorMessage = response.errors[0];
              this.loading = false;    
            }
          }
        )
  }

}
