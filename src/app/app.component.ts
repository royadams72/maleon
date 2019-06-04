import { Component, Renderer, HostListener } from '@angular/core';
import {PageScrollConfig} from 'ngx-page-scroll';
import { LocationStrategy } from '@angular/common';
import { CustomUtilsService } from './services/custom-utils.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],

})
export class AppComponent {
  constructor(private locationStrategy: LocationStrategy) {
     PageScrollConfig.defaultDuration = 400;
     PageScrollConfig.defaultEasingLogic = {
            ease: (t: number, b: number, c: number, d: number): number => {
                // easeInOutExpo easing
                if (t === 0) {return b};
                if (t === d) {return b + c};
                if ((t /= d / 2) < 1) {return c / 2 * Math.pow(2, 10 * (t - 1)) + b};
                return c / 2 * (-Math.pow(2, -10 * --t) + 2) + b;
            }
        };
  }

}
