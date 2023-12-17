import { Component } from '@angular/core';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  phone: string = ''; 
  checkPassword: string = '';
  password: string = ''; 
  onSubmit(formData: any) {
    console.log(formData); // This will log the form data to the console
  }
  validatePhone(event: Event) {
    const input = event.target as HTMLInputElement;
    input.value = input.value.replace(/[^0-9]/g, ''); 
  }

}
