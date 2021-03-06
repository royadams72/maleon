import { Component, OnInit, Renderer2, Inject, PLATFORM_ID } from '@angular/core';
import { Title, Meta } from '@angular/platform-browser';
import { isPlatformBrowser } from '@angular/common';
import { ActivatedRoute } from '@angular/router';

import { WindowRef } from '../../services/windowRef';

// ContactComponent
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  pageTitle: string;
  pageDescription: string;
  public theWinHeight: number;
  public theWinWidth: number;
  isBrowser: boolean;

  constructor(private renderer: Renderer2,
    private winRef: WindowRef,
    @Inject(PLATFORM_ID) private platformId: Object,
    private activatedRoute: ActivatedRoute,
    private title: Title,
    private meta: Meta) {
      this.isBrowser = isPlatformBrowser(platformId);
    if (isPlatformBrowser(this.platformId)) {
       this.theWinHeight = this.winRef.nativeWindow.innerHeight;
    }
  }

  ngOnInit() {
    this.pageTitle = this.activatedRoute.snapshot.data.title;
    this.pageDescription = this.activatedRoute.snapshot.data.description;
    this.title.setTitle(this.pageTitle);
    this.meta.updateTag({
      name: 'description', content: this.pageDescription
    })

    this.meta.addTag({ name: 'twitter:card', content: 'summary' });
    this.meta.addTag({ name: 'twitter:site', content: '@MaLeonandco' });
    this.meta.addTag({ name: 'twitter:title', content: this.pageDescription });
    this.meta.addTag({ name: 'twitter:description', content: this.pageDescription });
    this.meta.addTag({ name: 'twitter:text:description', content: this.pageDescription });
    this.meta.addTag({ name: 'twitter:image', content: 'https://pbs.twimg.com/profile_images/596590359083384832/nsvzSPFT_normal.jpg' });

    if (this.isBrowser) {
        this.renderer.listen('window', 'resize', (evt) => {
          this.theWinHeight = this.winRef.nativeWindow.innerHeight;
          this.theWinWidth = this.winRef.nativeWindow.innerWidth;
        })
    }
  }
}
