import { Component, OnInit, Input } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-profile-info',
  templateUrl: './profile-info.component.html',
  styleUrls: ['./profile-info.component.css']
})
export class ProfileInfoComponent implements OnInit {
  @Input() userProfile:any
  @Input() userRole:any
  description: any;
  userId: any;
  editToken:Boolean

  constructor(private authService: AuthService, private router: Router) { }

  ngOnInit() { 
    this.userId = this.userProfile._id;
    this.editToken = false;
  }
  allowEdit(){
    if(this.editToken){
      this.editToken = false;
    }
    else if(!this.editToken){
      this.editToken = true;
    }
  }
  submitForm(form) {
    const data = {
      description: this.description
    }
    this.authService.updateProfileInfo(this.userId, data)
    .then((result) => {
      this.editToken = false;
      this.userProfile = this.authService.getUser();
    })
    
  }
}
