import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  email: string = ''; // Ajoutez la propriété email si ce n'est pas déjà fait
password: string = ''; 

constructor( private router: Router) { }
redirectv(){
  this.router.navigate(['/pages/choice'])
}

}
