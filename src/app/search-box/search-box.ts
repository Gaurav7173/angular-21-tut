import { Component, signal } from '@angular/core';

@Component({
  selector: 'app-search-box',
  imports: [],
  template: `
    <p>
      search-box works Inline component!
      <input class="search-box" type="text" placeholder="start typing">
    </p>
  `,
  styles: `.search-box{width: 300px;}`,
})
export class SearchBox {

  

}
