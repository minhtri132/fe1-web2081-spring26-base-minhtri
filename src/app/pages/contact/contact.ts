import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
@Component({
  selector: 'app-contact',
  imports: [RouterOutlet],
  templateUrl: './contact.html',
  styleUrl: './contact.css',
})
export class Contact {
  title = 'Day la trang lien he';
  email = 'example@gmail.com';
}
