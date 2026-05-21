import { Component, EventEmitter, Input, Output, output } from '@angular/core';

@Component({
  selector: 'app-child',
  imports: [],
  templateUrl: './child.html',
  styleUrl: './child.css',
})
export class Child {
  @Input() username: string |undefined;
  @Output() selecteduser = new EventEmitter<string>();
  @Output() deleteuser = new EventEmitter<string>();

  whichuser(name: string|undefined) {
    this.selecteduser.emit(name);

    

  }
    
  delete(name: string|undefined) {
      this.deleteuser.emit(name);
    }


  

}
