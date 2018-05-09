import { Component } from '@angular/core';
import {PageScrollConfig} from 'ngx-page-scroll';
//import { WindowRef } from './shared.services/windowRef';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],

})
export class AppComponent {

//public theWinHeight:string =  this.winRef.nativeWindow.innerHeight;

  constructor() {

    console.log(PageScrollConfig)
     PageScrollConfig.defaultDuration = 300;
  }

  ngOnInit() {

  }

}
