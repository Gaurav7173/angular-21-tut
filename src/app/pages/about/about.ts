import { Component, signal } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-about',
  imports: [],
  templateUrl: './about.html',
  styleUrl: './about.css',
})
export class About {
  constructor(public route: ActivatedRoute) { }

  namerouteparam=signal("");
  agerouteparam=signal(0);


  ngOnInit() {
    this.route.params.subscribe((params) => {
      console.log(params); // { id: 1 }
      this.namerouteparam.set(params['name']);
      this.agerouteparam.set(params['age']);

    })
  }
}
