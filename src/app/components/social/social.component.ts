import { Component, OnInit, OnDestroy, Output, Renderer2, ViewChild, ElementRef, AfterViewInit } from '@angular/core';
import { HeightsService } from '../../shared.services/heights.service';
import {SocialService} from './social.service';
import * as linkify from 'linkifyjs';
import linkifyHtml from 'linkifyjs/html';

@Component({
  selector: 'app-social',
  templateUrl: './social.component.html',
  styleUrls: ['./social.component.css']
})
export class SocialComponent implements OnInit, OnDestroy, AfterViewInit{
  @ViewChild('social') socialDiv: ElementRef;
  private conn: any;
  private tweetsArray:Array<any> = [];

  constructor(private soService: SocialService, private renderer: Renderer2, private heightsService: HeightsService) { }

  ngAfterViewInit(){

  // console.log("social= "+this.socialDiv.nativeElement.offsetTop)
  this.heightsService.updateObj("social", this.socialDiv.nativeElement.offsetTop);

  }

  ngOnInit() {
    this.conn = this.soService.initTwitter()
    .subscribe(tweets=>{
      for (let i = 0; i < tweets.length; i++){
        tweets[i].text = linkifyHtml(tweets[i].text);
        this.tweetsArray.push(tweets[i]);
      }
    });

    this.renderer.listen('window', 'resize', (evt) => {
      this.heightsService.updateObj("social", this.socialDiv.nativeElement.offsetTop);
    })
  }

  ngOnDestroy(){
      this.conn.unsubscribe();
    }
}
