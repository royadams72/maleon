import { Component, OnInit, ViewChild, ElementRef, Renderer2, AfterViewInit } from '@angular/core';
import { DivPositionsService } from '../../../services/div-positions.service';
@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.css']
})
export class ServicesComponent implements OnInit, AfterViewInit {
  @ViewChild('services') servicesDiv: ElementRef;

  constructor(private renderer: Renderer2, private divPosService: DivPositionsService) { }

  ngAfterViewInit() {
  }

  ngOnInit() {

  }


}
