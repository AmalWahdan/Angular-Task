import { UserService } from './../../services/user.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
  users: any;
  constructor(private userServices: UserService) {
    
  }
  ngOnInit(): void {
    this.userServices.getAllUsers().subscribe((response) => {
      this.users = response;
    });
  }

  deleteUserHandler(userId: number)
  {
    this.userServices.deletUser(userId).subscribe((response) => {
      this.users = this.users.filter((user: any) => {
        return user.id != userId;
     })
   }) 
  }
}
