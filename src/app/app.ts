import { Component, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterOutlet, ɵEmptyOutletComponent } from '@angular/router';
import { single } from 'rxjs';
import { CommonModule } from '@angular/common';
import { Footer } from './Footer/footer';
import { SearchBox } from './search-box/search-box';
import { Child } from './child/child';
import { DisplayCount } from './display-count/display-count';
import { ControlCount } from './control-count/control-count';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, FormsModule, CommonModule, ɵEmptyOutletComponent,Footer,SearchBox,Child,DisplayCount,ControlCount],
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

  islogin2=signal(true);

  students=["anil","sunil","monil"];

  studentdata=[{name:"anil",age:20,email:"a@gmail.com"},{name:"sunil",age:25,email:"b@gmail.com"},{name:"monil",age:30,email:"c@gmail.com"}];

    islogin3=true;
    color='';
    changecolor(color:string){
      this.color=color;

    }

    nums=signal([1,2,3,4,5]);

    usersnew=signal(['anil', 'sunil', 'saunil']);

    newuser=signal('');
    selectedusername=signal('');

    addnewuser(){
      this.usersnew.update((item)=>([...item,this.newuser()]));
      this.newuser.set('');
    }

    handleSelectedUser(name: string) {
 
  this.selectedusername.set(name);
}

deleteuser(name: string) {
 console.log(name);
  this.usersnew.update((data) => data.filter(item => item != name));
}

  

}
