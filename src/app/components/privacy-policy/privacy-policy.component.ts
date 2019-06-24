import { Component, OnInit, Inject, PLATFORM_ID } from '@angular/core';
import { Title, Meta } from '@angular/platform-browser';
import { ActivatedRoute } from '@angular/router';
import { DOCUMENT, isPlatformBrowser } from '@angular/common';
@Component({
  selector: 'app-privacy-policy',
  templateUrl: './privacy-policy.component.html',
  styleUrls: ['./privacy-policy.component.sass']
})
export class PrivacyPolicyComponent implements OnInit {

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
    });

  }
}
