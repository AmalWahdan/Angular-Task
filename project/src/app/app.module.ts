import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { SliderComponent } from './components/slider/slider.component';
import { FooterComponent } from './components/footer/footer.component';
import { GalleryComponent } from './components/gallery/gallery.component';
import { ShowListComponent } from './components/show-list/show-list.component';
import { TodoListComponent } from './components/todo-list/todo-list.component';
import { StudentComponent } from './components/student/student.component';
import { ProductsComponent } from './components/products/products.component';
import { ProductItemComponent } from './components/product-item/product-item.component';
import { Routes,RouterModule } from '@angular/router';
import { UsersComponent } from './components/users/users.component';
import { UserDetailsComponent } from './components/user-details/user-details.component';
import { UserFormComponent } from './components/user-form/user-form.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { UserService } from './services/user.service';
import {HttpClientModule} from '@angular/common/http';
import { NavComponent } from './components/nav/nav.component';
import { ProductComponent } from './components/product/product.component';
import { ProductinfoComponent } from './components/productinfo/productinfo.component'


const routes: Routes = [
  { path: 'users', component: UsersComponent },
  { path: 'userDetails/:id', component: UserDetailsComponent },
  { path: 'addUser/new', component: UserFormComponent },
  { path: 'addUser/:id', component: UserFormComponent },
  { path: '**', component: NotFoundComponent },
];

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    SliderComponent,
    FooterComponent,
    GalleryComponent,
    ShowListComponent,
    TodoListComponent,
    StudentComponent,
    ProductsComponent,
    ProductItemComponent,
    UsersComponent,
    UserDetailsComponent,
    UserFormComponent,
    NotFoundComponent,
    NavComponent,
    ProductComponent,
    ProductinfoComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule
    , ReactiveFormsModule
    , FormsModule,
    RouterModule.forRoot(routes)
  ],
  providers: [UserService],
  bootstrap: [AppComponent]
})
export class AppModule { }
