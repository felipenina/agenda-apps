import { Component, inject } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AuthService } from '../../services/auth-service';


@Component({
  selector: 'app-login-page',
  imports: [RouterModule],
  templateUrl: './login-page.html',
  styleUrl: './login-page.scss'
})

export class LoginPage {

  errorLogin = false;
  authService = inject(AuthService);

  login(form:any){
    console.log(form)
    this.errorLogin = false;
    if(!form.value.email || !form.value.password){
      this.errorLogin = true;
      return
    }
    this.authService.login(form.value)
  }
}