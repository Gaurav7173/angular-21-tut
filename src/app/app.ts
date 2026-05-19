import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.html',
  styleUrl: './app.css'
})

export class App {
  islogin = signal(false);
  show = signal(true);
  status=signal('failure')

  handlelogin(status: boolean) {
    this.islogin.set(status);
  }

  handllestatus(event:Event){
    let target = event.target as HTMLInputElement;
    this.status.set(target.value);
  }


}
