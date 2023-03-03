import { UserService } from './../../services/user.service';
import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-user-form',
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.css']
})
export class UserFormComponent {
  userId: any;
  constructor(private router: Router, public userServices: UserService, public activatedRoute: ActivatedRoute)
  { this.userId = activatedRoute.snapshot.params['id']; }
  userForm = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email])
    ,password:new FormControl('',[Validators.required,Validators.minLength(8)]),
  })



  adduser() {
    
    if (this.userForm.status=="VALID") {
      if (!this.userId) {
      this.userServices.addNewUser(this.userForm.value).subscribe((response) => {
        this.router.navigate(['/users']);
      })
      }
      
    else {
      this.userServices.updateUser(this.userId, this.userForm.value).subscribe((response) => {
        this.router.navigate(['/users']);
      })
    }
    }
  }

  get getEmail() {
    return this.userForm.controls['email'];
  }
 get getPassword() {
  return this.userForm.controls['password'];
 
  }
  
  login(e:any)
  {
    e.preventDefault();
  }
}
