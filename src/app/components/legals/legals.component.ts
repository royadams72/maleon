import { Component, Inject, OnInit } from '@angular/core';
import { DOCUMENT , isPlatformBrowser, isPlatformServer} from '@angular/common';
import { PLATFORM_ID } from '@angular/core';
import { PageScrollConfig, PageScrollService, PageScrollInstance } from 'ngx-page-scroll';
@Component({
  selector: 'app-legals',
  templateUrl: './legals.component.html',
  styleUrls: ['./legals.component.css']
})
export class LegalsComponent implements OnInit {
public date = new Date();
  constructor(@Inject(DOCUMENT) private document: any,
              private pageScrollService: PageScrollService,
              @Inject(PLATFORM_ID) private platformId: Object) { }

  ngOnInit(){
    if (isPlatformBrowser(this.platformId)) {
    // Client only code.
    let pageScrollInstance: PageScrollInstance = PageScrollInstance.newInstance({document: this.document, scrollTarget: '.container',pageScrollOffset:100, pageScrollDuration:0});
        this.pageScrollService.start(pageScrollInstance);
        console.log(isPlatformBrowser(this.platformId), this.platformId)

 }
   if (isPlatformServer(this.platformId)) {
     console.log(isPlatformBrowser(this.platformId), this.platformId)
     // Server only code.

   }

}

}
