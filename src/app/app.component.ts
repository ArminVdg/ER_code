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
  isSubmitted: boolean = false;

  erCodeForm: any = {
    name: '',
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

  ngOnInit(): void {
    this.erCodeForm = {
      name: '',
      bloodType: '',
      age: '',
      sickness: '',
      medicine: '',
      pills: true
    }
  }


  generateERcode(erCodeForm: any) {
    if (this.erCodeForm.name.trim() === "") {
      this.emptyFormError();
    }
    else {
      this.isSubmitted = true;
      let currentForm = {
        name: erCodeForm.name,
        bloodType: erCodeForm.bloodType,
        age: erCodeForm.age,
        sickness: erCodeForm.sickness,
        medicine: erCodeForm.medicine,
        pills: true
      }

      let formToString: string = JSON.stringify(currentForm);
      this.myAngularQrcode = formToString;
      this.addSuccessClass();
      this.showFormSuccess();
      this.refreshForm();
    }
  }

  refreshForm(): void {
    this.erCodeForm = {
      name: '',
      bloodType: '',
      age: '',
      sickness: '',
      medicine: '',
      pills: true
    }
    setTimeout(this.removeSuccessClass, 5000)
  }

  showFormSuccess() {
    this.toastr.success('Congratulations! Your [ER]code is generated successfully!');
  }

  addSuccessClass() {
    let ERcodeBox: any = document.getElementById("displayER");
    ERcodeBox.classList.add("newBg");
  }

  removeSuccessClass() {
    let ERcodeBox: any = document.getElementById("displayER");
    ERcodeBox.classList.remove("newBg");
  }

  emptyFormError() {
    this.toastr.error('The form is empty, or reuqired fields need to be filled.');
  }
}
