import { Injectable, Inject, PLATFORM_ID } from '@angular/core';
import { LocationStrategy, DOCUMENT, isPlatformBrowser } from '@angular/common';
import { PageScrollInstance } from 'ngx-page-scroll/src/ngx-page-scroll-instance';
import { PageScrollService } from 'ngx-page-scroll';
import { WindowRef } from './windowRef';

@Injectable()
export class CustomUtilsService {

  constructor(@Inject(DOCUMENT) private document: any, private pageScrollService: PageScrollService, private windowRef: WindowRef, 
  @Inject(PLATFORM_ID) private platformId: Object) { }

 

  preventBrowserBackButton(locationStrategy: LocationStrategy, scrollY: number): void {
    // console.log(location.href, scrollY)
    // if (isPlatformBrowser(this.platformId)) {
    if (location.href.indexOf('#') !== -1) {
      const container = `#${location.href.split('#')[1]}`;
      console.log(container)
      const pageScrollInstance: PageScrollInstance = PageScrollInstance.newInstance({
              document: this.document, scrollTarget: container, pageScrollOffset: 10, pageScrollDuration: 0
    });
    this.pageScrollService.start(pageScrollInstance);
    }

    history.pushState(null, null, location.href);
    locationStrategy.onPopState(() => {
      // const container =   document.getElementById(`${location.href.split('#')[1]}`);
      // container.scrollIntoView();
      //  console.log(`${location.href.split('#')[1]}`)
      history.pushState(null, null, location.href);
    })

}
}
