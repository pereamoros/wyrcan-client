import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signup-form',
  templateUrl: './signup-form.component.html',
  styleUrls: ['./signup-form.component.css']
})
export class SignupFormComponent implements OnInit {

  error= null;
  feedbackEnabled = false;
  processing = false;
  username: String;
  password: String;

  constructor(
    private authService: AuthService,
    private router: Router) { }

  ngOnInit() {
  }

  submitForm(form) {
    this.error = '';
    this.feedbackEnabled = true;
    if (form.valid) {
      this.processing = true;
      this.authService.signup({
          username: this.username,
          password: this.password })
        .then((result) => {
          this.router.navigate(['/profile']);
        })
        .catch((err) => {
          this.error = err.error.error;
          this.processing = false;
          this.feedbackEnabled = false;
        });
    }
  }

}
