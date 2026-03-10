import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
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

