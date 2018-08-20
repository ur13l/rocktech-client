import { Component, OnInit } from '@angular/core';
import { UserService } from '../../_services/user.service';
import { Router } from '@angular/router';
import { User } from '../../_models/user';

@Component({
  selector: 'app-admin-dashboard',
  templateUrl: './admin-dashboard.component.html',
  styleUrls: ['./admin-dashboard.component.css']
})
export class AdminDashboardComponent implements OnInit {
  public users : User[];
  public loading : boolean = true;

  constructor(
    private userService : UserService,
    private router : Router
  ) { }

  ngOnInit() {
    this.userService.getUsers()
      .subscribe(
        response => {
          this.loading = false;
          this.users = response.data;
        }
      )
  }


}
