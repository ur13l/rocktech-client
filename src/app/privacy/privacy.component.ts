import { Component, OnInit } from '@angular/core';
import { environment } from '../../environments/environment';

@Component({
  selector: 'app-privacy',
  templateUrl: './privacy.component.html',
  styleUrls: ['./privacy.component.css']
})
export class PrivacyComponent implements OnInit {

  public pdfSrc : string = environment.app_url + "assets/pdf/privacy.pdf"
  constructor() { }

  ngOnInit() {
  }

}
