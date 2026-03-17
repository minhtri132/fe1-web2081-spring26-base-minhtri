import { Component } from '@angular/core';
import { RouterOutlet,RouterLink } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet,RouterLink],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
  title = 'my-app';
  fullName = 'Angular';
  fullName2 = 'Angular Framework';
  age = 7;

//method: function
  sayHello(){
  console.log('Hello,');
  alert('Hello,' + this.fullName);
}
}

