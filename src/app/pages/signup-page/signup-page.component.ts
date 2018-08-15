import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';


@Component({
  selector: 'app-signup',
  templateUrl: './signup-page.component.html',
  styleUrls: ['./signup-page.component.css']
})
export class SignupPageComponent implements OnInit {
  username: string;
  password: string;
  feedbackEnabled = false;
  error = null;
  processing = false;
  usernameAlreadyExists = false;

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
      this.authService.signup({
        username: this.username,
        password: this.password
      })
      .then(() => {
        this.router.navigate(['/films']);
      })
      .catch(error => {
        if (error.error.code === 'username-not-unique') {
          this.usernameAlreadyExists = true;
        }
        this.processing = false;
        console.log(error);
      });
    }
  }
}

