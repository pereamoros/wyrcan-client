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

  constructor(private authService: AuthService,
    private route: ActivatedRoute) { }

  ngOnInit() {
    this.user = this.authService.getUser();
    
    // this.route.params
    // .subscribe((params) => {
    //   this.userId = String(params['id'])
    // })
    // this.authService.getUserId(this.userId)
    // .then((user) => {
    //   this.userProfile = user;
    })
  }

}
