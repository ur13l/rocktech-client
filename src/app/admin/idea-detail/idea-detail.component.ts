import { Component, OnInit } from '@angular/core';
import { User } from '../../_models/user';
import { UserService } from '../../_services/user.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-idea-detail',
  templateUrl: './idea-detail.component.html',
  styleUrls: ['./idea-detail.component.css']
})
export class IdeaDetailComponent implements OnInit {
  public user : User;
  public loading : boolean = true;

  constructor(
    private userService : UserService,
    private router : Router,
    private route : ActivatedRoute
  ) { 
    this.userService.getUserById(this.route.snapshot.params.id)
      .subscribe(
        response => {
          this.loading = false;
          this.user = response.data;
        }
      )
      
  }

  ngOnInit() {

  }

  /**
   * Approve the idea to move it to second round
   */
  approve(id : number) {
    this.loading = true;
    this.userService.approve(id)
      .subscribe(
        response => {
          this.loading = false;
          this.router.navigate(['/admin-dashboard'])
        }
      )
  }

}
