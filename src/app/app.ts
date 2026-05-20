import { Component, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterOutlet } from '@angular/router';
import { single } from 'rxjs';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, FormsModule],
  templateUrl: './app.html',
  styleUrl: './app.css'
})

export class App {
  islogin = signal(false);
  show = signal(true);
  status = signal('failure')

  handlelogin(status: boolean) {
    this.islogin.set(status);
  }

  handllestatus(event: Event) {
    let target = event.target as HTMLInputElement;
    this.status.set(target.value);
  }


  users = signal(["John", "Jane", "Doe"]);

  userdetails = signal([{ id: 1, name: "John", age: 30, email: "a@gmail.com" },
  { id: 2, name: "Jane", age: 25, email: "b@gmail.com" },
  { id: 3, name: "Doe", age: 35, email: "c@gmail.com" }

  ]);


  statusnew = signal('notstarted');
  handleswitch(event: Event) {
    const target = event.target as HTMLInputElement;
    this.statusnew.set(target.value);

  }

  name = signal('Angular');
  age = 20;


  userdata = signal({ name: 'John', age: 30, email: 'john@gmail.com' });

  updateuserdata(key: string, val: string) {

    this.userdata.update((item) => ({
      ...item, [key]: val
    }))

  }

  username = signal('gaurav kumar')
  userdata2 = signal({ college: 'aps school', email: 'college' });

  get uname() {
    return this.username().toUpperCase();
  }



  set uname(val: string) {
    this.username.set(val);
  }

  get usercollege() {
    return this.userdata2().college.toUpperCase();
  }
  set usercollege(val: string) {
    this.userdata2.update((item) => ({
      ...item, college: val
    }))
  }


  tasks = signal([
    { id: 0, title: "Team lunch", completed: false }
  ]);
  title = signal('');

  addtask() {
    if (this.title()) {

      this.tasks.update((item) => ([...item, { id: this.tasks().length, title: this.title(), completed: false }]));
      this.title.set('');

    }

  }

  deletetask(id: number) {
    this.tasks.update((tasks) => tasks.filter(task => task.id != id));
  }


}
