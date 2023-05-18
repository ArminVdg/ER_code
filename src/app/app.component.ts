import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'ER_code';

  erCodeForm: any = {
    firstname: '',
    bloodType: '',
    age: '',
    sickness: '',
    medicine: ''
  }

  myAngularQrcode: any;

  constructor() {
    this.myAngularQrcode = 'your qr code data string';
  }

  ngOnInit(): void { }


  generateERcode(erCodeForm: any) {
    let currentForm = {
      firstname: erCodeForm.firstname,
      bloodType: erCodeForm.bloodType,
      age: erCodeForm.age,
      sickness: erCodeForm.sickness,
      medicine: erCodeForm.medicine
    }

    let stringForm: string = JSON.stringify(currentForm);
    console.log(stringForm);

    this.myAngularQrcode = stringForm;

    this.refreshForm();
  }

  refreshForm(): void {
    this.erCodeForm = {
      firstname: '',
      bloodType: '',
      age: '',
      sickness: '',
      medicine: '',
    }
  }
}
