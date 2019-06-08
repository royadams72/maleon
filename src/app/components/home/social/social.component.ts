import { Component, OnInit, OnDestroy, Output, Renderer2, ViewChild, ElementRef, AfterViewInit } from '@angular/core';
import { DivPositionsService } from '../../../services/div-positions.service';
import { SocialService } from '../../../services/social.service';
import * as linkify from 'linkifyjs';
import * as linkifyHtml from 'linkifyjs/html';



@Component({
  selector: 'app-social',
  templateUrl: './social.component.html',
  styleUrls: ['./social.component.css']
})
export class SocialComponent implements OnInit, OnDestroy, AfterViewInit {
  @ViewChild('social') socialDiv: ElementRef;
  private conn: any;

  public tweetsArray: Array<any> = [];

  constructor(private soService: SocialService,
    private renderer: Renderer2,
    private divPosService: DivPositionsService) { }

  ngAfterViewInit() {
  }

  ngOnInit() {

    this.conn = this.soService.initTwitter()
      .subscribe(tweets => {
        for (let i = 0; i < tweets.length; i++) {
          let split, date, year
          if (tweets[i].text) {
            tweets[i].text = linkifyHtml(tweets[i].text)
            split = tweets[i].created_at.split(' ');
            date = split.splice(1, 2);
            year = split[split.length - 1];
            date.push(year);
            date = date.join(' ');
            tweets[i].created_at = date;
            // console.log(tweets[i].created_at)
            this.tweetsArray.push(tweets[i]);
          }
        }
      });

  }

  ngOnDestroy() {
    // this.conn.unsubscribe();
  }
}
