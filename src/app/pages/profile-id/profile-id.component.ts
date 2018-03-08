import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-profile-id',
  templateUrl: './profile-id.component.html',
  styleUrls: ['./profile-id.component.css']
})
export class ProfileIdComponent implements OnInit {
  userId: any;
  user: any;
  userRole: any;
  userProfile: any;
  constructor(private authService: AuthService,
    private route: ActivatedRoute) { }

  ngOnInit() {
    this.user = this.authService.getUser();
    this.userRole = this.authService.getUser();
    this.route.params
    .subscribe((params) => {
      this.userId = String(params['id'])
    })
    this.authService.getUserId(this.userId)
    .then((user) => {
      this.userProfile = user;
    })
  }

}
