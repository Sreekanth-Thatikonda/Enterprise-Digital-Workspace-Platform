import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router, RouterModule } from '@angular/router';
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
import { PasswordModule } from 'primeng/password';
import { RippleModule } from 'primeng/ripple';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { AuthService } from '../auth/auth.service';

@Component({
    selector: 'app-signup',
    standalone: true,
    imports: [ButtonModule, InputTextModule, PasswordModule, FormsModule, RouterModule, RippleModule, CommonModule, HttpClientModule],
    templateUrl: './signup.component.html',
    providers: [AuthService]
})
export class SignupComponent {
    username: string = '';
    email: string = '';
    password: string = '';
    confirmPassword: string = '';
    loading: boolean = false;
    error: string = '';
    success: string = '';

    constructor(private authService: AuthService, private router: Router) {}

    onSignup() {
        this.error = '';
        this.success = '';

        if (!this.username || !this.email || !this.password || !this.confirmPassword) {
            this.error = 'All fields are required';
            return;
        }

        if (this.password !== this.confirmPassword) {
            this.error = 'Passwords do not match';
            return;
        }

        this.loading = true;
        const user = {
            username: this.username,
            email: this.email,
            password: this.password
        };

        this.authService.signup(user).subscribe({
            next: (response) => {
                this.loading = false;
                this.success = 'Sign up successful! Redirecting to login...';
                setTimeout(() => {
                    this.router.navigate(['/login']);
                }, 2000);
            },
            error: (err) => {
                this.loading = false;
                this.error = err.error?.message || 'An error occurred during sign up';
            }
        });
    }
}
