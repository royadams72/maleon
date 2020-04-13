import { Component, Inject, OnInit } from '@angular/core';
import { DOCUMENT , isPlatformBrowser, isPlatformServer} from '@angular/common';
import { PLATFORM_ID } from '@angular/core';
import { Title, Meta } from '@angular/platform-browser';
import {ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {
pageTitle: string;
pageDescription: string;
  constructor(@Inject(DOCUMENT) private document: any,
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

      if (isPlatformBrowser(this.platformId)) {
      // Client only code.
        }

}

}
