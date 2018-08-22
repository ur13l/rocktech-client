import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-fot',
  templateUrl: './fot.component.html',
  styleUrls: ['./fot.component.css']
})
export class FotComponent implements OnInit {

  constructor(
    private title : Title
  ) { }

  ngOnInit() {
    this.title.setTitle("Future of Things");
  }

}
