import { Component, Inject, OnInit } from '@angular/core';
import { DOCUMENT , isPlatformBrowser, isPlatformServer} from '@angular/common';
import { PLATFORM_ID } from '@angular/core';
import { Title, Meta } from '@angular/platform-browser';
import { Router, ActivatedRoute } from '@angular/router';
import { ScrollService } from 'app/services/scroll.service';
@Component({
  selector: 'app-accounts',
  templateUrl: './accounts.component.html',
  styleUrls: ['./accounts.component.css']
})
export class AccountsComponent implements OnInit {
  pageTitle: string;
  pageDescription: string;
    constructor(@Inject(DOCUMENT) private document: any,
                @Inject(PLATFORM_ID) private platformId: Object,
                private activatedRoute: ActivatedRoute,
                private title: Title,
                private meta: Meta,
                private scrollService: ScrollService) { }
ngOnInit() {
  this.pageTitle = this.activatedRoute.snapshot.data.title;
  this.pageDescription = this.activatedRoute.snapshot.data.description;
  this.title.setTitle(this.pageTitle);
  this.meta.updateTag({
    name: 'description', content: this.pageDescription
  })
}
public scrollTo(target: string, offset: number = 0): void {
  const t = setTimeout(() => {
    this.scrollService.scrollToEl(target, offset);
    clearTimeout(t);
   }, 100)

  }
}
