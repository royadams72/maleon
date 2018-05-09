import { Component, OnInit, Renderer2 } from '@angular/core';
import { SocialComponent } from '../social/social.component';
import { ServicesComponent } from '../companyservices/services.component';
import { TopComponent } from '../top/top.component';
import { ContactComponent } from '../contact/contact.component';
import { WindowRef } from '../../services/windowRef';
//ContactComponent
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  public theWinHeight:number =  this.winRef.nativeWindow.innerHeight;

    constructor(private renderer: Renderer2,  private winRef: WindowRef) {}

    ngOnInit() {
      this.renderer.listen('window', 'resize', (evt) => {
        //  console.log('Native window obj', this.winRef.nativeWindow.innerHeight);
       this.theWinHeight = this.winRef.nativeWindow.innerHeight;

      })
    }
}
