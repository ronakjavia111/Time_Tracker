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
  constructor(private auth: AuthService, private router: Router) {}

  passwordMatchValidator: ValidatorFn = (formGroup: any): ValidationErrors | null => {
    const password = formGroup.get('password')?.value;
    const confirmPassword = formGroup.get('confirmPassword')?.value;

    return password === confirmPassword ? null : { passwordMismatch: true };
  };

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
    const payload = {
      email: email,
      password: password,
    };

    this.auth.register(payload).subscribe({
      next: (res) => {
        this.router.navigate(['/login']);
      },
      error: (err) => {
        alert(err.error.message);
      },
    });
  }

  hidePassword = true;
  hideConfirmPassword = true;

  passwordForm = new FormGroup({
    password: new FormControl('', [Validators.required, Validators.minLength(5)]),
  });

  confirmPasswordForm = new FormGroup({
    confirmPassword: new FormControl('', [Validators.required, Validators.minLength(5)]),
  });

  togglePassword(): void {
    this.hidePassword = !this.hidePassword;
  }

  toggleConfirmPassword(): void {
    this.hideConfirmPassword = !this.hideConfirmPassword;
  }
}
