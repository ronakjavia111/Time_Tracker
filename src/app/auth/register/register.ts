import { Component } from '@angular/core';
import {
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  ValidationErrors,
  ValidatorFn,
  Validators,
} from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { AuthService } from '../../services/auth-service';

@Component({
  selector: 'app-register',
  imports: [ReactiveFormsModule, RouterLink],
  templateUrl: './register.html',
  styleUrl: './register.css',
})
export class Register {
  passwordMatchValidator: ValidatorFn = (formGroup: any): ValidationErrors | null => {
    const password = formGroup.get('password')?.value;
    const confirmPassword = formGroup.get('confirmPassword')?.value;

    return password === confirmPassword ? null : { passwordMismatch: true };
  };

  constructor(private auth: AuthService, private router: Router) {}

  form = new FormGroup(
    {
      email: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', [Validators.required, Validators.minLength(5)]),
      confirmPassword: new FormControl('', [Validators.required, Validators.minLength(5)]),
    },
    {
      validators: this.passwordMatchValidator,
    }
  );

  register() {
    if (this.form.invalid) return;
    const { email, password } = this.form.value;

    this.auth.register(email!, password!).subscribe({
      next: (res) => {
        this.router.navigate(['/login']);
      },
      error: (err) => {
        alert(err.error.message);
      },
    });
  }
}
