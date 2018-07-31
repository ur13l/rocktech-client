import { Component, OnInit, Input } from '@angular/core';
declare var $: any;
declare var anime : any;

@Component({
  selector: 'loading-screen',
  templateUrl: './loading-screen.component.html',
  styleUrls: ['./loading-screen.component.css']
})
export class LoadingScreenComponent implements OnInit {
  @Input('loading') public loading : boolean;

  constructor() { }

  ngOnInit() {
    
  }

}
