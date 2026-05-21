import { Component, signal } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-profile',
  imports: [],
  templateUrl: './profile.html',
  styleUrl: './profile.css',
})
export class Profile {
  constructor(public route: ActivatedRoute) { }

  name=signal("");
  age=signal(0);
  id=signal(0); 

  ngOnInit() {
    this.route.queryParams.subscribe((params) => {
      console.log(params); // { id: 1, name: 'anil', age: 14 }
      this.name.set(params['name']);
      this.age.set(params['age']);
      this.id.set(params['id']);
    })

  }
}
