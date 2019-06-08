import { Component, Inject, OnInit } from '@angular/core';
import { DOCUMENT , isPlatformBrowser, isPlatformServer} from '@angular/common';
import { PLATFORM_ID } from '@angular/core';
import { Title, Meta } from '@angular/platform-browser';
import { Router, ActivatedRoute } from '@angular/router';
import { PageScrollConfig, PageScrollService, PageScrollInstance } from 'ngx-page-scroll';
@Component({
  selector: 'app-accounts',
  templateUrl: './accounts.component.html',
  styleUrls: ['./accounts.component.css']
})
export class AccountsComponent implements OnInit {
  pageTitle:string;
  pageDescription:string;
    constructor(@Inject(DOCUMENT) private document: any,
                private pageScrollService: PageScrollService,
                @Inject(PLATFORM_ID) private platformId: Object,
                private activatedRoute: ActivatedRoute,
                private title: Title,
                private meta: Meta,
                private router: Router) { }
ngOnInit(){
  this.pageTitle = this.activatedRoute.snapshot.data.title;
  this.pageDescription = this.activatedRoute.snapshot.data.description;
  this.title.setTitle(this.pageTitle);
  this.meta.updateTag({
    name: 'description', content: this.pageDescription
  })
    if (isPlatformBrowser(this.platformId)) {
    // Client only code.
    const pageScrollInstance: PageScrollInstance = PageScrollInstance.newInstance({
      document: this.document, scrollTarget: '.container', pageScrollOffset: 100, pageScrollDuration: 150});
        this.pageScrollService.start(pageScrollInstance);
        console.log('jumping')
      }

}
jumpToContact(): void {
  this.router.navigateByUrl('/#contact');
}
}
