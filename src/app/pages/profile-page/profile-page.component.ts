import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-profile-page',
  templateUrl: './profile-page.component.html',
  styleUrls: ['./profile-page.component.css']
})
export class ProfilePageComponent implements OnInit {
  userId: any;
  user: any;
  userProfile: any;
  userRole: any;

  constructor(private authService: AuthService) { }

  ngOnInit() {
    this.user = this.authService.getUser();
    this.userProfile = this.authService.getUser();
    this.userRole = this.authService.getUser();
  }

}
