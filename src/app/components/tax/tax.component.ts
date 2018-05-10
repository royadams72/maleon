import { Component, Inject, OnInit } from '@angular/core';
import { DOCUMENT } from '@angular/common';
import { PageScrollConfig, PageScrollService, PageScrollInstance } from 'ngx-page-scroll';
@Component({
  selector: 'app-tax',
  templateUrl: './tax.component.html',
  styleUrls: ['./tax.component.css']
})
export class TaxComponent implements OnInit{

  constructor(@Inject(DOCUMENT) private document: any, private pageScrollService: PageScrollService) { }

  ngOnInit(){
    let pageScrollInstance: PageScrollInstance = PageScrollInstance.newInstance({document: this.document, scrollTarget: '.container',pageScrollOffset:100, pageScrollDuration:0});
        this.pageScrollService.start(pageScrollInstance);
  }
}
