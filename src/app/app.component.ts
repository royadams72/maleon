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
     PageScrollConfig.defaultDuration = 400;
     PageScrollConfig.defaultEasingLogic = {
            ease: (t: number, b: number, c: number, d: number): number => {
                // easeInOutExpo easing
                if (t === 0) return b;
                if (t === d) return b + c;
                if ((t /= d / 2) < 1) return c / 2 * Math.pow(2, 10 * (t - 1)) + b;
                return c / 2 * (-Math.pow(2, -10 * --t) + 2) + b;
            }
        };
  }

  ngOnInit() {

  }

}
