import { Component, Renderer2, Input, OnChanges, ViewChild, ElementRef, AfterViewInit, Inject, PLATFORM_ID } from '@angular/core';
import { DivPositionsService } from '../../services/div-positions.service';
import { NavBg, NavUl } from './nav.animations';
import { DOCUMENT } from '@angular/platform-browser';
import { Router, NavigationEnd } from '@angular/router';
import 'rxjs/add/operator/filter';
import { CustomUtilsService } from 'app/services/custom-utils.service';
import { LocationStrategy, isPlatformBrowser } from '@angular/common';
import { Subscription } from 'rxjs/Subscription';
import { WindowRef } from 'app/services/windowRef';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css'],
  animations: [NavBg, NavUl]
})
export class NavComponent implements AfterViewInit {
  public servicesActive = 'default';
  public contactActive = 'default';
  public socialActive = 'default';
  public aboutActive = 'default';
  private conn: Subscription;
  private services = 0;
  public showMobileNav: string;
  public navBgActiveState = 'inActive';
  public servicesNavState = 'inActive';
  public defaultNavState = 'active';
  private homePageActive = false;
  private padding = 30;
  public dataTarget = 'none';
  public dataToggle = 'none';
  theWinHeight: number;
  @ViewChild('nav') nav: ElementRef;
  scrollY: number;
  constructor(
    public renderer: Renderer2,
    private divPosService: DivPositionsService,
    private router: Router,
    private locationStrategy: LocationStrategy,
    private customUtilsService: CustomUtilsService,
    private windowRef: WindowRef,
    @Inject(PLATFORM_ID) private platformId: Object) {

    // Listens for router events, checks if hash tag is present
    this.conn = this.router.events
      .filter(event => event instanceof NavigationEnd)// NavigationEnd is 3rd/last event fired
      .subscribe((p) => {
        const page = p['url'];
        const homepages = page.search(/#contact|#services|#social/);
        if (homepages !== -1 || page === '/') {
          this.homePageActive = true;
          this.navBgActiveState = 'inActive';
          this.switchNav('inActive', 'active');
        } else if (homepages === -1 || page !== '/') {
          this.homePageActive = false;
          this.switchNav('active', 'inActive');
          this.navBgActiveState = 'active';
        }
        if (isPlatformBrowser(this.platformId)) {
        this.customUtilsService.preventBrowserBackButton(this.locationStrategy, this.scrollY)
        }
      });
  }


  ngAfterViewInit() {
    this.getScrollYAndSetNavBg();
    this.getWindowHeight();
    this.listenForResize();
  }

getScrollYAndSetNavBg(): void {
  this.renderer.listen('window', 'scroll', (evt) => {
    // Set vars to trigger animations depending on the position of window and div
    this.scrollY = window.scrollY;
      if (window.scrollY >= this.theWinHeight - this.padding && this.homePageActive) {
      if (this.navBgActiveState !== 'active') {
        this.navBgActiveState = 'active';
      }

    } else if (window.scrollY <= this.theWinHeight - this.padding && this.homePageActive) {
      if (this.navBgActiveState !== 'inActive') {
        this.navBgActiveState = 'inActive'
      }
    }
  });
}

  getWindowHeight(): void {
    if (isPlatformBrowser(this.platformId)) {
      this.theWinHeight = this.windowRef.nativeWindow.innerHeight;
    }
  }

  listenForResize() {
    this.renderer.listen('window', 'resize', (evt) => {
      const winWidth = evt.currentTarget.innerWidth;
      if (winWidth >= 780) {
        this.showMobileNav = 'block'
      }
    });
  }

  public switchNav(servicesNav: string, defaultNav: string) {
    // This sets states (changes the nav text) between the services nav and home page nav
    if (servicesNav === 'active') {
      setTimeout(() => {
        this.servicesNavState = servicesNav;
      }, 700);
      this.defaultNavState = defaultNav;

    } else if (defaultNav === 'active') {
      setTimeout(() => {
        this.defaultNavState = defaultNav;
      }, 700);
      this.servicesNavState = servicesNav;
    }
  }

  public toggleNav() {
    this.showMobileNav === 'none' ? this.showMobileNav = 'block' : this.showMobileNav = 'none';
  }

}
