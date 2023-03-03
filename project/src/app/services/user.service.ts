import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  baseURL:string="http://localhost:3005/users"
  constructor(private myClient: HttpClient) { }
  getAllUsers() {
    return this.myClient.get(this.baseURL); 
  }
   getUserById(userId:number) {
    return this.myClient.get(`${this.baseURL}/${userId}`); 
   }
  addNewUser(user:any) {
    return this.myClient.post(this.baseURL,user); 
   }
  
  updateUser(userId: number, user: any)
  {
     return this.myClient.put(`${this.baseURL}/${userId}`,user); 
  }
  
  deletUser(userId:number) {
    return this.myClient.delete(`${this.baseURL}/${userId}`); 
  }

}
