import { Injectable, Inject, PLATFORM_ID } from '@angular/core';
import { DOCUMENT } from '@angular/platform-browser';
import { isPlatformBrowser } from '@angular/common';
@Injectable()
export class ScrollService {
  isBrowser: boolean;
  constructor( @Inject(DOCUMENT) private document: any,
  @Inject(PLATFORM_ID) private platformId: Object) {
    this.isBrowser = isPlatformBrowser(platformId);
   }

  public scrollToEl(el: string, offset: number = 0): void {
    if (this.isBrowser) {
      const container = this.document.getElementById(`${el}`);
      const pos = container.getBoundingClientRect().top + window.scrollY - offset;
        window.scrollTo({
          top: pos,
          behavior: 'smooth'
        });
    }
  }
}
