import { Component, Inject, OnInit } from '@angular/core';
import { DOCUMENT } from '@angular/platform-browser';
@Component({
  selector: 'app-tax',
  templateUrl: './tax.component.html',
  styleUrls: ['./tax.component.css']
})
export class TaxComponent implements OnInit{

  constructor(@Inject(DOCUMENT) private document: any) { }
  ngOnInit(){
    //console.log("fired")
    this.document.body.scrollTop = 0;
  }
}
