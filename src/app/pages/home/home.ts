import { Component, signal } from '@angular/core';
import { Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-home',
  imports: [RouterLink],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home {
  constructor(public router: Router) { }// here we are injecting the router service to navigate to other page on button click

  userdata=signal({name:"anil",age:14,id:1});

  goToProfile() {
    this.router.navigate(['profile'],{
      queryParams:{id:1,name:'peter',age:14}
    }); 
  }

}
