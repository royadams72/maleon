import { Component, Renderer2, Input, OnChanges, ViewChild,ElementRef, AfterViewInit, Inject} from '@angular/core';
import { DivPositionsService } from '../../services/div-positions.service';
import {NavBg, NavUl} from './nav.animations';
import { DOCUMENT } from '@angular/platform-browser';
import { Router,  NavigationEnd } from '@angular/router';
import 'rxjs/add/operator/filter';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css'],
    animations: [ NavBg, NavUl]
})
export class NavComponent implements AfterViewInit {
  public servicesActive:string = 'default';
  public contactActive: string = 'default';
  public socialActive: string = 'default';
  public aboutActive: string = 'default';
  private conn:any;
  private top:number = 0;
  private services:number = 0;
  private contact:number = 0;
  private social:number = 0;
  public navBgActiveState: string = 'inActive';
  public servicesNavState: string = 'inActive';
  public defaultNavState: string = 'active';
  private homePageActive:boolean = false;
  private padding:number = 30;
  private sectionArr:Array<number> = [];
  private easingLogic:any;
  public dataTarget:string = 'none';
  public dataToggle:string = 'none';
  @ViewChild('nav') nav: ElementRef;

  constructor(public renderer: Renderer2,
              private divPosService: DivPositionsService,
              private router: Router,
              @Inject(DOCUMENT) private document: any) {
                  //Listens for router events, checks if hash tag is present
                this.conn =  this.router.events
                .filter(event => event instanceof NavigationEnd)//NavigationEnd is 3rd/last event fired
                .subscribe((p) => {
                    let page = p['url'];

                    let homepages = page.search(/#contact|#services|#social/);
                    // console.log(homepages)
                     if(homepages != -1 || page == "/"){
                        this.homePageActive = true;
                       this.navBgActiveState = 'inActive'
                        this.switchNav('inActive', 'active')
                        console.log('this.navBgActiveState=inActive')
                      }else if(homepages == -1 || page != "/"){
                        this.homePageActive = false;
                        this.switchNav('active', 'inActive')
                        this.navBgActiveState = 'active';
                        console.log('this.navBgActiveState=active')

                    }
                });
            }


ngAfterViewInit(){
      //Easing for page scroller


  this.divPosService.heightsObjs.subscribe(divObjs=>{
          //get the position of divs
     if (divObjs.length == 4){
         this.services = divObjs[1].height-this.padding;
        }
      })
  //console.log(document)
this.renderer.listen('window', 'scroll', (evt) => {
//Set vars to trigger animations depending on the position of window and div
    if(window.scrollY >= this.services - this.padding && this.homePageActive){
      if(this.navBgActiveState != 'active'){
        this.navBgActiveState = 'active';
        console.log('active')
    }

    }else if(window.scrollY <= this.services - this.padding && this.homePageActive){
      if(this.navBgActiveState != 'inActive'){
      this.navBgActiveState = 'inActive'
      console.log('inActive')
    }
    }
  });

  this.renderer.listen('window', 'load', (evt) => {
    let winWidth = evt.currentTarget.innerWidth;
      console.log(evt.currentTarget.innerWidth);
      if(winWidth <= 1000){
        this.dataTarget = '.navbar-collapse';
        this.dataToggle = 'collapse';
      }else{
        this.dataTarget = 'none';
        this.dataToggle = 'none';
      }
  })


}

  public switchNav(servicesNav, defaultNav){
    //This sets states (changes the nav text) between the services nav and home page nav
      // this.navBgActiveState = 'active';
      if(servicesNav=='active'){
        setTimeout(() => {
           this.servicesNavState = servicesNav;
           //console.log(bgState, servicesNav, defaultNav)
        }, 700);
        this.defaultNavState = defaultNav;

    }else if(defaultNav=='active'){
        setTimeout(() => {
          this.defaultNavState = defaultNav;
          // console.log(bgState, servicesNav, defaultNav)
        }, 700);
          this.servicesNavState = servicesNav;

        }
        // console.log()
  }

}
