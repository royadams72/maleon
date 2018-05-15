import { Component, OnInit, Renderer2, Inject, PLATFORM_ID } from '@angular/core';
import { SocialComponent } from '../social/social.component';
import { ServicesComponent } from '../companyservices/services.component';
import { TopComponent } from '../top/top.component';
import { ContactComponent } from '../contact/contact.component';
import { WindowRef } from '../../services/windowRef';
import { DOCUMENT , isPlatformBrowser, isPlatformServer} from '@angular/common';

//ContactComponent
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  public theWinHeight:number;

    constructor(private renderer: Renderer2,
                private winRef: WindowRef,
                @Inject(PLATFORM_ID) private platformId: Object) {
                    if (isPlatformBrowser(this.platformId)) {
                        this.theWinHeight = this.winRef.nativeWindow.innerHeight
                        console.log(this.theWinHeight)
                    }

                }

    ngOnInit() {

      this.renderer.listen('window', 'resize', (evt) => {
        //  console.log('Native window obj', this.winRef.nativeWindow.innerHeight);
       this.theWinHeight = this.winRef.nativeWindow.innerHeight;


      })

    }
}
