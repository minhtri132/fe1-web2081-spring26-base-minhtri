import { Routes } from '@angular/router';
import { Home } from './home/home';
import { About } from './about/about';
import { Contact } from './pages/contact/contact';
import { Products } from './products/products';
import { Stories } from './pages/stories/stories';
import { StoryAdd } from './story-add/story-add';
import { RegisterComponent } from './register/register';
import { ProductAdd } from './product-add/product-add';

export const routes: Routes = [
  { path: '', component: Home },
  { path: 'about', component: About },
  { path: 'contact', component: Contact },
  { path: 'stories', component: Stories },
  { path: 'products', component: Products },
  { path: 'story-add', component: StoryAdd },
  { path: 'register', component: RegisterComponent },
  { path: 'product-add', component: ProductAdd }
];