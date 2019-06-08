import { Component, OnInit, Renderer2 } from '@angular/core';

@Component({
  selector: 'app-scrollto-top',
  templateUrl: './scrollto-top.component.html'
})
export class ScrolltoTopComponent implements OnInit {
  showBackToTop = false;

  constructor(private renderer: Renderer2) { }

  ngOnInit() {
    this.initShowBackToTop();
    this.watchWindowScroll();
  }

  watchWindowScroll () {
    this.renderer.listen('window', 'scroll', (evt) => {
      this.checkDistanceFromTop(window.scrollY);
    })
  }

  checkDistanceFromTop(scrollY: number) {
    return scrollY >  100 ? this.showBackToTop = true : this.showBackToTop = false;
  }

  initShowBackToTop() {
    this.renderer.listen('window', 'load', (evt) => {
      this.checkDistanceFromTop(evt.currentTarget.scrollY);
    });
  }

  scrollToTop() {
    window.scroll({top: 0, left: 0, behavior: 'smooth'});
  }
}
