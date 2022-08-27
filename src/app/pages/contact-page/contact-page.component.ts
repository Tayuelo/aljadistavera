import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MailService } from 'src/app/services/email.service';

@Component({
  selector: 'app-contact-page',
  templateUrl: './contact-page.component.html',
  styleUrls: ['./contact-page.component.scss'],
  providers: [MailService]
})
export class ContactPageComponent implements OnInit {

  public contactForm: FormGroup;
  public loading = false;

  constructor(private mailService: MailService) {
    this.contactForm = new FormGroup({
      email: new FormControl('', [Validators.required, Validators.email]),
      subject: new FormControl('', Validators.required),
      message: new FormControl('', Validators.required)
    });
  }

  ngOnInit(): void { }

  sayHello() {
    this.loading = true;
    this.mailService.send(this.contactForm.value).then(() => {
      this.loading = false;
      this.contactForm.reset();
    });
  }
}
