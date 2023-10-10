import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {

  registerForm: FormGroup;

  constructor(
    public fb: FormBuilder,
    public authService: AuthService,
    public router: Router
    ){
      this.registerForm = fb.group({
        username: [''],
        password: ['']
      });
  }

  Register(){
    this.authService.Register(this.registerForm.value).subscribe((res: any) => {
      alert("Usuário Criado");
      this.router.navigate(['']);
    });
  }

}
