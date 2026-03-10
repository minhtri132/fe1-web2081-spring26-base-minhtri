import { Component } from '@angular/core';

@Component({
  selector: 'app-about',
  imports: [],
  templateUrl: './about.html',
  styleUrl: './about.css',
  
})
export class About {
  title = 'Day la trang About';
  name = 'Nguyen Van A';
  age = 25;
  sayHello(){
  console.log('Hello,');
  alert('Hello,' + this.name);
  }
}
