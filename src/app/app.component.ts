import { Component } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { empty } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'ER_code';
  toastRef: any;
  isClicked: number = 0;

  erCodeForm: any = {
    firstname: '',
    bloodType: '',
    age: '',
    sickness: '',
    medicine: '',
    pills: true
  }

  myAngularQrcode: any;
  ERcodeValue: string = '';


  constructor(private toastr: ToastrService) {
    this.myAngularQrcode = 'your qr code data string';
  }

  ngOnInit(): void { }


  generateERcode(erCodeForm: any) {
    if (
      (this.erCodeForm.firstname = 'Your name') &&
      (this.erCodeForm.bloodType = "Your blood type eg. '0 negative'")) {
      this.emptyFormError()
    }
    else {
      this.isClicked = 1;
      let currentForm = {
        firstname: erCodeForm.firstname,
        bloodType: erCodeForm.bloodType,
        age: erCodeForm.age,
        sickness: erCodeForm.sickness,
        medicine: erCodeForm.medicine,
        pills: true
      }

      let formToString: string = JSON.stringify(currentForm);
      this.myAngularQrcode = formToString;
      this.changeCodeBoxBgColor();
      this.showFormSuccess();
    }
  }

  refreshForm(): void {
    this.erCodeForm = {
      firstname: '',
      bloodType: '',
      age: '',
      sickness: '',
      medicine: ''
    }
  }

  showFormSuccess() {
    this.toastr.success('Congratulations! Your [ER]code is generated successfully!');
  }

  changeCodeBoxBgColor() {
    let ERcodeBox: HTMLDivElement | any = document.getElementById("#ERcodeBox");
    ERcodeBox.classList.add("newBg");
  }

  emptyFormError() {
    this.toastr.error('The form is empty, or has unfilled parts. Please fill the required fields.');
  }
}
