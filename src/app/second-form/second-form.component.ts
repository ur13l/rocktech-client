import { Component, OnInit } from '@angular/core';
import { trigger, transition, useAnimation } from '@angular/animations';
import { fadeIn } from 'ng-animate';
import { User } from '../_models/user';
import { Project } from '../_models/project';
import { UserService } from '../_services/user.service';
import { CountryService } from '../_services/country.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-second-form',
  templateUrl: './second-form.component.html',
  styleUrls: ['./second-form.component.css'],
  animations: [
    trigger('fadeIn', [transition('* => *', useAnimation(fadeIn))])
  ],
})
export class SecondFormComponent implements OnInit {
  public stages : string[] = [
    'Early development',
    'En desarrollo',
    'Prototipo',
    'Implementación'
  ] ;
  public user : User = new User({});
  public project : Project = new Project({});
  public countries = [];
  public states = [];
  public loading : boolean = false;


  constructor(
    private userService : UserService,
    private countryService : CountryService,
    private router : Router
  ) { }

  ngOnInit() {
    this.user = this.userService.getUser();
    this.project = this.user.neuron.project;
    this.project.stage = "Early development";
    this.user.country = '0';
    this.user.state = '0';
    this.countryService.getCountries().subscribe(
      response => {
        this.countries = response.countries;
      }
    )
  }

  /**
   * Change of country option
   * @param country 
   */
  onChangeCountry(country) {
    this.states = this.countries.find(c => c.country == country).states
  }

  /**
   * Submitting form
   */
  submit(event : Event) {
    event.preventDefault();
    this.loading = true;
    this.userService.complementation(this.user)
      .subscribe(
        response => {
          this.loading = false;
          this.router.navigate(['/tercera-etapa']);
        }
      )
  }

}
