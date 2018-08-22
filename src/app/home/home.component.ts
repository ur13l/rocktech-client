import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { trigger, transition, useAnimation } from '@angular/animations';
import { fadeIn } from 'ng-animate';
import { User } from '../_models/user';
import { UserService } from '../_services/user.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  animations: [
    trigger('fadeIn', [transition('* => *', useAnimation(fadeIn))])
  ],
})
export class HomeComponent implements OnInit {
  public user : User;
  constructor(
    private title : Title,
    private userService : UserService
  ) { 
    this.user = this.userService.getUser();
  }

  ngOnInit() {
    this.title.setTitle("R O C K T E C H")
  }

}
