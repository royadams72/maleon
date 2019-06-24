import { Component, OnInit, Input, OnChanges, ViewChild, ElementRef, Renderer2, AfterViewInit } from '@angular/core';
import { DivPositionsService } from '../../../services/div-positions.service';

@Component({
  selector: 'app-top',
  templateUrl: './top.component.html',
  styleUrls: ['./top.component.css']
})
export class TopComponent implements OnInit, AfterViewInit, OnChanges {
  @Input() winH: number; // This is binding to a property
  @Input() winW: number;
  // That is set in HTML, receiving a varialbe coming from app.component
  @ViewChild('top') topDiv: ElementRef;

  public winHeight: number;

  constructor(private renderer: Renderer2, private divPosService: DivPositionsService) {}

  ngOnChanges() {
    // When the window is resized the input variable is updated
    // So the height of this div can also be...
    // if (this.winW >= 780) {
    //   this.winHeight = this.winH;
    // }

  }
  ngAfterViewInit() {
    // call service function after html has loaded, so correct dimensions of div can be accessed//
    // To relate div heights to application for nav
    // this.winHeight = this.winH;
  }
  ngOnInit() {

  }

}
