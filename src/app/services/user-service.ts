import { Injectable } from '@angular/core';
import { email } from '@angular/forms/signals';

@Injectable({
  providedIn: 'root',
})
export class UserService {

  userList(){
    return [
      {name:"anil",age:14,id:1,email:"anil@example.com"},
      {name:"sunil",age:24,id:2,email:"sunil@example.com"},
      {name:"monil",age:34,id:3,email:"monil@example.com"},
    ]
  }
  
}
