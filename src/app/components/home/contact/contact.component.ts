import { Component, OnInit, OnChanges, Renderer2, ViewChild, ElementRef, AfterViewInit, } from '@angular/core';
import { DivPositionsService } from '../../../services/div-positions.service';
import { Section } from '../../../models/section.model'
import { Email } from '../../../models/email.model'
import { DOCUMENT } from '@angular/platform-browser';
import { FormGroup, FormControl, Validators, FormArray } from '@angular/forms';
import { Response } from '@angular/http';
import { ContactService } from '../../../services/contact.service';
//
@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit, AfterViewInit {
  @ViewChild('contactD') contactDiv: ElementRef;
  public contactForm: FormGroup;
  private formValid: boolean;
  public sucess: boolean;

  constructor(
    private renderer: Renderer2,
    private divPosService: DivPositionsService,
    private contactService: ContactService
  ) {
  }

  ngAfterViewInit() {
    this.divPosService.updateObj('contact', this.contactDiv.nativeElement.offsetTop);
  }

  ngOnInit() {
    this.renderer.listen('window', 'resize', (evt) => {
    this.divPosService.updateObj('contact', this.contactDiv.nativeElement.offsetTop);
    })
    this.initForm();
  }

  private initForm() {
    this.contactForm = new FormGroup({
      'name': new FormControl(null, [Validators.required, Validators.minLength(1)]),
      'email': new FormControl(null, Validators.compose([Validators.required, Validators.email, Validators.minLength(1)])),
      'phone': new FormControl(null),
      'message': new FormControl(null, [Validators.required, Validators.minLength(1)])
    });

  }
  public submitForm() {
    const name = this.contactForm.get('name');
    const email = this.contactForm.get('email');
    const message = this.contactForm.get('message');
    const phone = this.contactForm.get('phone');
    let phoneStr = ''
    if (!name.valid || !email.valid || !message.valid) {
      this.formValid = false;
      return;
    } else {
      this.formValid = true;
      if (phone.value === null) {
        phoneStr = 'No phone number provided'
      } else {
        phoneStr = phone.value
      }
      const contact: Email = {
        name: name.value,
        email: email.value,
        message: message.value,
        phone: phoneStr
      }
      this.contactService.sendMail(contact)
        .subscribe((response) => {
          if (response.msg === 'sent') {
            this.sucess = response.sucess;
            this.contactForm.reset();
          }
        })
    }
  }

}
