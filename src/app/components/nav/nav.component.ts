import { Component, Renderer2, Input, OnChanges, ViewChild, ElementRef, AfterViewInit, Inject, PLATFORM_ID } from '@angular/core';
import { DivPositionsService } from '../../services/div-positions.service';
import { NavBg, NavUl } from './nav.animations';
import { DOCUMENT } from '@angular/platform-browser';
import { Router, NavigationEnd } from '@angular/router';
import 'rxjs/add/operator/filter';
import { LocationStrategy, isPlatformBrowser } from '@angular/common';
import { Subscription } from 'rxjs/Subscription';
import { WindowRef } from 'app/services/windowRef';
import { ScrollService } from 'app/services/scroll.service';

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
  public showMobileNav: string;
  public navBgActiveState = 'inActive';
  public servicesNavState = 'inActive';
  public defaultNavState = 'active';
  private homePageActive = false;
  private padding = 60;
  private isMobileView: boolean;
  private toggledFromButtonClick = false;
  theWinHeight: number;
  scrollY: number;
  @ViewChild('nav') nav: ElementRef;

  constructor(
    public renderer: Renderer2,
    private divPosService: DivPositionsService,
    private router: Router,
    private locationStrategy: LocationStrategy,
    private windowRef: WindowRef,
    @Inject(PLATFORM_ID) private platformId: Object,
    @Inject(DOCUMENT) private document: any,
    private el: ElementRef,
    private scrollService: ScrollService) {

    // Listens for router events, checks if hash tag is present
    this.conn = this.router.events
      .filter(event => event instanceof NavigationEnd)// NavigationEnd is 3rd/last event fired
      .subscribe((p) => {
        const page = p['url'];
        const homepages = page.search(/contact|services|social/);
        if (homepages !== -1 || page === '/') {
          this.homePageActive = true;
          this.navBgActiveState = 'active';
          // this.switchNav('inActive', 'active');
          this.scrollTo(page);
        } else if (homepages === -1 || page !== '/') {
          this.homePageActive = false;
          this.switchNav('active', 'inActive');
          this.navBgActiveState = 'active';
          setTimeout(() => {
            window.scroll(0, 0);
          });
        }
      });


  }


  ngAfterViewInit() {
    // this.getScrollYAndSetNavBg();
    this.getWindowHeight();
    this.setNavOnResize();
    this.setNavOnLoad();
  }

  private getScrollYAndSetNavBg(): void {
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

  setNavOnResize() {
    this.renderer.listen('window', 'resize', (evt) => {
      const winWidth = evt.currentTarget.innerWidth;
      if (winWidth > 780) {
        this.showMobileNav = 'block';
        this.toggledFromButtonClick = false;
        this.isMobileView = false;
      } else if (winWidth < 780 && !this.toggledFromButtonClick) {
        this.showMobileNav = 'none';
        this.isMobileView = true;
      }
    });
  }

  private setNavOnLoad(): void {
    if (isPlatformBrowser(this.platformId)) {
      const winWidth = this.windowRef.nativeWindow.innerWidth;
      if (winWidth <= 780) {
        this.isMobileView = true;
        this.showMobileNav = 'none';
      }
    }
  }

  switchNav(servicesNav: string, defaultNav: string) {
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
    if (this.isMobileView) {
      this.toggledFromButtonClick = !this.toggledFromButtonClick;
      this.showMobileNav === 'none' ? this.showMobileNav = 'block' : this.showMobileNav = 'none';
    }
  }
  private setOffsetForScrollTargets(target: string): number {
    const targetOffsets = {contact: 30, services: 45, social: 20};
    target = `${target.replace('/', '')}`;
    return !targetOffsets[target] ? 0 : targetOffsets[target];
  }

  scrollTo(target: string, offset = this.setOffsetForScrollTargets(target)): void {
      if (isPlatformBrowser(this.platformId)) {
        target = `${target.replace('/', '')}`;
        if (target !== '' ) {
          const t = setTimeout(() => {
            this.scrollService.scrollToEl(target, offset);
            clearTimeout(t);
          }, 100)
        }
        if (this.isMobileView) {
          this.showMobileNav = 'none';
        }

      }
  }
}
