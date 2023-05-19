import { Component } from '@angular/core';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'ER_code';
  toastRef: any;

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
    let currentForm = {
      firstname: erCodeForm.firstname,
      bloodType: erCodeForm.bloodType,
      age: erCodeForm.age,
      sickness: erCodeForm.sickness,
      medicine: erCodeForm.medicine,
      pills: true
    }

    let formToString: string = JSON.stringify(currentForm);
    console.log(formToString);

    this.myAngularQrcode = formToString;
    this.showFormSuccess();
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

  /*  downloadERcode() {
     const canvas: any = document.getElementById("ERcode");
 
     const pngUrl = canvas[0].toDataURL("image/png");
     let downloadLink = document.createElement("a");
     downloadLink.href = pngUrl;
     downloadLink.download = 'ERcode';
     document.body.appendChild(downloadLink);
     downloadLink.click();
     document.body.removeChild(downloadLink);
   }
  */

}
