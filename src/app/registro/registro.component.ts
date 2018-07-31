import { Component, OnInit, ViewChild } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { User } from '../_models/user';
import { Neuron } from '../_models/neuron';
import { Project } from '../_models/project';
import { UserService } from '../_services/user.service';
import { Router } from '@angular/router';
import { FormGroup } from '@angular/forms';
@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})
export class RegistroComponent implements OnInit {
  public user : User;
  public neuron : Neuron;
  public project : Project;
  public loading : boolean = false;
  public errorMessage : string;
  @ViewChild('form') public form : FormGroup;

  constructor(
    private title : Title,
    private userService : UserService,
    private router : Router
  ) { 
    this.user = new User({});
    this.neuron = new Neuron({});
    this.project = new Project({});
    this.neuron.members.push(this.user);
  }

  ngOnInit() {
  }

  /** 
   * Adds a new member to the neuron (Empty user)
  */
  addMember() {
    this.neuron.members.push(new User({}));
  }

  /**
   * Remove a member of the neuron
   * @param member 
   */
  removeMember(member : User) {
    let index = this.neuron.members.findIndex((user, index, obj) => user == member);
    this.neuron.members.splice(index, 1);
  } 

  /**
   * Once all validations are done, we sent the data to the server
   */
  submit(event : Event) {
    this.loading = true;
    event.preventDefault();
    this.userService.register(this.user, this.neuron, this.project)
      .subscribe(
        data => {
          if(data.data) {
            this.router.navigate(['/first-stage-complete']);          
          }
          else if(data.errors && data.errors.length > 0 ){
            this.errorMessage = data.errors[0];
          }
          this.loading = false;
        },
        error => {
          this.errorMessage = "Hubo un error al hacer tu registro, es posible que ya hayas realizado un registro con este correo."
          console.log(error);
          this.loading = false;
        }
      )
  }

}
