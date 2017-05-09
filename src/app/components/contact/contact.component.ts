import { Component, OnInit, OnChanges, Renderer2, ViewChild, ElementRef, AfterViewInit, } from '@angular/core';
import { HeightsService } from '../../shared.services/heights.service';
import { Section } from '../../models/section.model'
import {PageScrollService} from 'ng2-page-scroll';
import { DOCUMENT } from '@angular/platform-browser';
@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit, AfterViewInit {

  @ViewChild('contactD') contactDiv: ElementRef;

  constructor(private renderer: Renderer2, private heightsService: HeightsService) {
  }

  ngAfterViewInit(){

  //console.log("Contact= "+this.contactDiv.nativeElement.offsetTop)

  this.heightsService.updateObj("contact", this.contactDiv.nativeElement.offsetTop);

  }

  ngOnInit() {
    this.renderer.listen('window', 'resize', (evt) => {
    this.heightsService.updateObj("contact", this.contactDiv.nativeElement.offsetTop);
   })

  }

}
