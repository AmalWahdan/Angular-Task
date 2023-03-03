import { UserService } from './../../services/user.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.css']
})
export class UserDetailsComponent implements OnInit {
  userId: number;
  user: any;

  constructor(public activatedRoute:ActivatedRoute,private userServices:UserService) {
    this.userId=activatedRoute.snapshot.params['id'];
  }
  ngOnInit(): void {
    this.userServices.getUserById(this.userId).subscribe((response) => {
      this.user = response;
    })
  }

}
