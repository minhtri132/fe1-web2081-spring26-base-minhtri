import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import axios from 'axios';

@Component({
  selector: 'app-product-add',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './product-add.html',
})
export class ProductAdd {
  addForm: FormGroup;

  // 👇 thêm 2 biến
  loading = false;
  error = '';

  categories = [
    { id: 1, name: 'Hành động' },
    { id: 2, name: 'Tình cảm' },
    { id: 3, name: 'Hài hước' },
  ];

  constructor(private fb: FormBuilder) {
    this.addForm = this.fb.group({
      title: ['', Validators.required],
      author: ['', Validators.required],
      views: [0, [Validators.required, Validators.min(0)]],
      price: [0, [Validators.required, Validators.min(1)]],
      category: ['', Validators.required],
    });
  }

  async onSubmit() {
    if (this.addForm.invalid) {
      this.error = 'Form không hợp lệ';
      return;
    }

    this.loading = true;
    this.error = '';

    try {
      await axios.post('http://localhost:3000/products', this.addForm.value);

      alert('Thêm thành công');

      this.addForm.reset({
        title: '',
        author: '',
        views: 0,
        price: 0,
        category: ''
      });

    } catch (err) {
      console.error(err);
      this.error = 'Lỗi khi gọi API';
    } finally {
      this.loading = false;
    }
  }
}