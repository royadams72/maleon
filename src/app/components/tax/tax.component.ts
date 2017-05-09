import { Component, OnInit } from '@angular/core';
import { ScrollService } from '../../shared.services/scroll.service';
@Component({
  selector: 'app-tax',
  templateUrl: './tax.component.html',
  styleUrls: ['./tax.component.css']
})
export class TaxComponent implements OnInit {

  constructor(private scrollService: ScrollService) { }

  ngOnInit() {


  }
  public scrollTo(target, duration){
    this.scrollService.scrollTo(target, duration);
  }
}
