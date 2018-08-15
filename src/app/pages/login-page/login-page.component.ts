import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';


@Component({
  selector: 'app-login',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css']
})
export class LoginPageComponent implements OnInit {
  username: string;
  password: string;
  feedbackEnabled = false;
  error = null;
  processing = false;
  userNotFound = false;

  constructor(
    private authService: AuthService,
    private router: Router
    ) { }

  ngOnInit() {
  }

  submitForm(form) {
    this.error = '';
    this.feedbackEnabled = true;
    if (form.valid) {
      this.processing = true;
      this.authService.login({
        username: this.username,
        password: this.password
      })
      .then(() => {
          this.router.navigate(['/films']);
      })
      .catch(error => {
        if (error.error.code === 'not-found') {
          this.userNotFound = true;
        }
        this.processing = false;
        console.log(error);
      });
    } 
  }
  
  resetError() {
    this.userNotFound = false;
  }
}

