import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'video-modal',
  templateUrl: './video-modal.component.html',
  styleUrls: ['./video-modal.component.css']
})
export class VideoModalComponent implements OnInit {
  @Input('show') public show : boolean;
  constructor() { }

  ngOnInit() {
  }

  close() {
    this.show = false;
  }
}
