import { Injectable, Inject } from '@angular/core';
import { LocationStrategy, DOCUMENT } from '@angular/common';
import { PageScrollInstance } from 'ngx-page-scroll/src/ngx-page-scroll-instance';
import { PageScrollService } from 'ngx-page-scroll';
import { WindowRef } from './windowRef';

@Injectable()
export class CustomUtilsService {

  constructor(@Inject(DOCUMENT) private document: any, private pageScrollService: PageScrollService, private windowRef: WindowRef) { }
  preventBrowserBackButton(locationStrategy: LocationStrategy, scrollY): void {
    if (location.href.indexOf('#') !== -1){
      console.log(location.href.split('#'))
      const container = `#${location.href.split('#')[1]}`;
      const pageScrollInstance: PageScrollInstance = PageScrollInstance.newInstance({
              document: this.document, scrollTarget: container, pageScrollOffset: 10, pageScrollDuration: 0
    });
    this.pageScrollService.start(pageScrollInstance);
    }

    history.pushState(null, null, location.href);
    locationStrategy.onPopState(() => {
       this.windowRef.nativeWindow.offsetY = scrollY
      //  console.log(location.href, this.windowRef.nativeWindow.offsetY, scrollY)
      history.pushState(null, null, location.href);
    })
  }
}
