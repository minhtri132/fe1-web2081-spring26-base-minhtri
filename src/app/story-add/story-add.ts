import { Component } from '@angular/core';
import { Form, FormBuilder, ReactiveFormsModule, FormGroup } from '@angular/forms';
@Component({
  selector: 'app-story-add',
  imports: [ReactiveFormsModule],
  templateUrl: './story-add.html',
  styleUrl: './story-add.css',
})
export class StoryAdd {
  addForm: FormGroup; // ten bien addForm

  constructor(private fb: FormBuilder){
    this.addForm = this.fb.group({
      title: '',
      author: '',
      views: 0,
    });

  }

  submitForm(){
    console.log(this.addForm.value);
  }

}
