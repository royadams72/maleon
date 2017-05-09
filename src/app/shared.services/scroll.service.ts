import { Injectable, OnInit } from '@angular/core';
import { WindowRef } from './windowRef';
import {PageScrollConfig, PageScrollService, PageScrollInstance} from 'ng2-page-scroll/';
@Injectable()
export class ScrollService implements OnInit {
private doc:any;
    constructor(private winRef: WindowRef, private pageScrollService: PageScrollService) {

      this.doc = this.winRef.nativeWindow

         PageScrollConfig.defaultScrollOffset = 0;
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
 ngOnInit(){

 }
 public scrollTo(target, duration) {
     let pageScrollInstance: PageScrollInstance = PageScrollInstance.newInstance({
       document: this.doc ,
       pageScrollDuration: duration,
       scrollTarget: target

     });
     this.pageScrollService.start(pageScrollInstance);

   }


}
