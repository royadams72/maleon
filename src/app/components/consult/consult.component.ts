import { Component, Inject, OnInit } from '@angular/core';
import { DOCUMENT , isPlatformBrowser, isPlatformServer} from '@angular/common';
import { PLATFORM_ID } from '@angular/core';
import { Title, Meta } from '@angular/platform-browser';
import { Router, ActivatedRoute } from '@angular/router';
import { PageScrollConfig, PageScrollService, PageScrollInstance } from 'ngx-page-scroll';
@Component({
  selector: 'app-consult',
  templateUrl: './consult.component.html',
  styleUrls: ['./consult.component.css']
})
export class ConsultComponent implements OnInit{
  pageTitle: string;
  pageDescription: string;
  constructor(@Inject(DOCUMENT) private document: any,
              private pageScrollService: PageScrollService,
              @Inject(PLATFORM_ID) private platformId: Object,
              private activatedRoute: ActivatedRoute,
              private title: Title,
              private meta: Meta) { }
  ngOnInit() {
    this.pageTitle = this.activatedRoute.snapshot.data.title;
    this.pageDescription = this.activatedRoute.snapshot.data.description;
    this.title.setTitle(this.pageTitle);
    this.meta.updateTag({
      name: 'description', content: this.pageDescription
  })


}

}
