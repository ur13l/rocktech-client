import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { User } from '../_models/user';
import { Neuron } from '../_models/neuron';
import { Project } from '../_models/project';
@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})
export class RegistroComponent implements OnInit {
  public user : User;
  public neuron : Neuron;
  public project : Project;

  constructor(
    private title : Title
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
  submit() {
    
  }

}
