import { Component, Renderer2, Input, OnChanges, ViewChild,ElementRef, AfterViewInit, Inject} from '@angular/core';
import { HeightsService } from '../../shared.services/heights.service';
import {ActiveTrigger, NavServices, NavUl} from './nav.animations';
import { DOCUMENT } from '@angular/platform-browser';
import { Router,  NavigationEnd } from '@angular/router';
import {PageScrollConfig, PageScrollService, PageScrollInstance} from 'ng2-page-scroll/';
import 'rxjs/add/operator/filter';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css'],
    animations: [ActiveTrigger, NavServices, NavUl]
})
export class NavComponent implements AfterViewInit {
  private servicesActive:string = 'default';
  private contactActive: string = 'default';
  private socialActive: string = 'default';
  private conn:any;
  private top:number = 0;
  private services:number = 0;
  private contact:number = 0;
  private social:number = 0;
  private navActiveState: string = 'default'
  private servicesUlState: string = 'inActive';
  private defaultUlState: string = 'active';
  private pageEnd:number;
  private padding:number = 30;
  private sectionArr:Array<number> = [];
  private easingLogic:any;
  @ViewChild('nav') nav: ElementRef;

  constructor(public renderer: Renderer2,
              private heightsService: HeightsService,
              private router: Router,
              @Inject(DOCUMENT) private document: any,
              private pageScrollService: PageScrollService) {
                  //Listens for router events, checks if hash tag is present
                this.conn =  this.router.events
                .filter(event => event instanceof NavigationEnd)
                .subscribe((p) => {
                     let page = p['url'];
                     let homepages = page.search(/#contact|#services|#social/);
                    //  console.log(hash, page)
                     if(homepages != -1 || page == "/"){
                       console.log(homepages)
                      //Show homepage nav
                      this.animateNav('default', 'inActive', 'active')
                    }else if(homepages == -1 || page != "/"){
                      console.log(homepages)
                          //Show services nav
                      this.animateNav('active', 'active', 'inActive')
                    }
              });
            }


    ngAfterViewInit(){
      PageScrollConfig.defaultEasingLogic = {
          ease: (t: number, b: number, c: number, d: number): number => {
              // easeInOutExpo easing
              if (t === 0) return b;
         if (t === d) return b + c;
         if ((t /= d / 2) < 1) return c / 2 * Math.pow(2, 10 * (t - 1)) + b;
         return c / 2 * (-Math.pow(2, -10 * --t) + 2) + b;
          }
       };

  this.heightsService.heightsObjs.subscribe(divObjs=>{
          // console.log(divObjs)
     if (divObjs.length == 4){
         this.top = divObjs[0].height;
         this.services = divObjs[1].height-this.padding;
         this.contact = divObjs[2].height-this.padding;
         this.social = divObjs[3].height;
        }
      })
  //console.log(document)
    this.renderer.listen('window', 'scroll', (evt) => {
       /*let windowHeight = "innerHeight" in window ? window.innerHeight : document.documentElement.offsetHeight;
       let body = document.body, html = document.documentElement;
       let docHeight = Math.max(body.scrollHeight,
           body.offsetHeight, html.clientHeight,
           html.scrollHeight, html.offsetHeight);
       let windowBottom = windowHeight + window.pageYOffset;*/
//console.log(window.scrollY, "top="+this.top, "services="+this.services, "contact="+this.contact, "social="+this.social)

if(window.scrollY >= this.top && window.scrollY <= this.services){
            this.servicesActive = 'default';
            this.contactActive = 'default';
            this.socialActive = 'default';
          }else if(window.scrollY >= this.services-this.padding && window.scrollY <= this.contact){
            this.servicesActive = 'active';
            this.contactActive = 'inService';
            this.socialActive = 'inService';
         }else if(window.scrollY  >= this.contact && window.scrollY  <= this.social){
            this.servicesActive = 'default';
            this.contactActive = 'active';
            this.socialActive = 'default';
         }else{
           this.servicesActive = 'default';
           this.contactActive = 'default';
           this.socialActive = 'active';
         }
    });
}

  public animateNav(bgState, servicesUL, defaultUL){
    //console.log(bgState, servicesUL, defaultUL)
      this.navActiveState = bgState;
      if(servicesUL=='active'){
        setTimeout(() => {
           this.servicesUlState = servicesUL;
           console.log(bgState, servicesUL, defaultUL)
        }, 500);
        this.defaultUlState = defaultUL;

    }else if(defaultUL=='active'){
        setTimeout(() => {
          this.defaultUlState = defaultUL;
          console.log(bgState, servicesUL, defaultUL)
          }, 500);
          this.servicesUlState = servicesUL;

        }
  }

}
