import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

 loginForm: FormGroup;

  constructor(
    public fb: FormBuilder,
    public authService: AuthService,
    public router: Router
    ){
      this.loginForm = fb.group({
        username: [''],
        password: ['']
      });
  }

  Login(){
    this.authService.Login(this.loginForm.value).subscribe((res: any) => {
      localStorage.setItem('token', String(res));
      this.router.navigate(['dashboard']);
    });
  }

}
