import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { trigger, transition, useAnimation } from '@angular/animations';
import { fadeIn } from 'ng-animate';
import { UserService } from '../_services/user.service';
import { Route } from '@angular/compiler/src/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css'],
  animations: [
    trigger('fadeIn', [transition('* => *', useAnimation(fadeIn))])
  ],
})
export class SignInComponent implements OnInit {
  public email : string;
  public password : string
  public errorMessage : string;
  public loading : boolean = false;

  constructor(
    private title : Title,
    private userService : UserService,
    private route : Router
  ) { 
    this.title.setTitle("Accede");
  }

  ngOnInit() {
  }


  submit(event : Event) {
    this.loading = true;
    this.userService.login(this.email, this.password)
      .subscribe(response => {
        if(response.data) {          
          this.route.navigate(['/segunda-etapa']);
          this.loading = false;
        }
        else {
          this.errorMessage = response.errors[0];
          this.loading = false;
        }
      });
  }

}
