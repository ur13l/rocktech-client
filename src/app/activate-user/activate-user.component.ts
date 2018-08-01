import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { UserService } from '../_services/user.service';
import { trigger, useAnimation, transition } from '@angular/animations';
import { bounceInUp } from 'ng-animate';

@Component({
  selector: 'app-activate-user',
  templateUrl: './activate-user.component.html',
  styleUrls: ['./activate-user.component.css'],
  animations: [
    trigger('bounceInUp', [transition('* => *', useAnimation(bounceInUp))])
  ],
})
export class ActivateUserComponent implements OnInit {
  public loading : boolean = true;
  public activated : boolean = false;
  public invalidToken : boolean = false;

  constructor(
    private router : Router,
    private userService : UserService,
    private route : ActivatedRoute
  ) { }

  ngOnInit() {
    
    this.userService.activateUser(this.route.snapshot.params.token)
      .subscribe(
        response => {
          this.loading = false;          
          if(response.errors) {
            this.invalidToken = true;
          }
          else {
            this.invalidToken = false;
            this.activated = true;
          }
        },
        error => {
          this.loading = false;
        }
      )

  }
}
