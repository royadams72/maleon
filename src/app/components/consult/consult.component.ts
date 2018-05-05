import { Component, Inject, OnInit } from '@angular/core';
import { DOCUMENT } from '@angular/platform-browser';
@Component({
  selector: 'app-consult',
  templateUrl: './consult.component.html',
  styleUrls: ['./consult.component.css']
})
export class ConsultComponent{

    constructor(@Inject(DOCUMENT) private document: any) { }

    ngOnInit(){
      this.document.body.scrollTop = 0;
    }

}
