import { Injectable, Inject } from '@angular/core';
import { DOCUMENT } from '@angular/platform-browser';
@Injectable()
export class ScrollService {

  constructor( @Inject(DOCUMENT) private document: any) { }

  public scrollToEl(el: string, offset: number = 0): void {
    const container = this.document.getElementById(`${el}`);
    const pos = container.getBoundingClientRect().top + window.scrollY - offset;
    window.scrollTo({
      top: pos,
      behavior: 'smooth'
    });

  }
}
