import { Component, OnInit } from '@angular/core';
import { User } from '../_models/user';
import { UserService } from '../_services/user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  public user : User;

  constructor(
    private userService : UserService,
    private router : Router
  ) { 
    this.user = this.userService.getUser();
  }

  ngOnInit() {
  }

  logout () {
    this.userService.logout();
    this.router.navigate(['/']);
  }
}
