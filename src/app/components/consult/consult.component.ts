import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-consult',
  templateUrl: './consult.component.html',
  styleUrls: ['./consult.component.css']
})
export class ConsultComponent implements OnInit {


    constructor(private router: Router,
                private route: ActivatedRoute) {
      //this.sections = ["services", "contact", "social"];

    }

  ngOnInit() {

  }

}
