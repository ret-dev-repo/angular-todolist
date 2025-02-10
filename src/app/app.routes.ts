import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { TodoComponent } from './todo/todo.component';
import { TodoItemComponent } from './todo-item/todo-item.component';
import { LoginComponent } from './login/login.component';
import { CoursesComponent } from './courses/courses.component';
import { CourseCardComponent } from './course-card/course-card.component';
import { PostComponent } from './post/post.component';
import { PostsComponent } from './posts/posts.component';
import { PostNavigationComponent } from './post-navigation/post-navigation.component';
import { PostProfileComponent } from './post-profile/post-profile.component';

export const routes: Routes = [
    {path: '', redirectTo: 'home', pathMatch: 'full'},
    {path:'home',component:HomeComponent},
    {path:'todos',component:TodoComponent},
    {path:'todo',component:TodoItemComponent},
    {path:'todo/:id',component:TodoItemComponent},
    {path: 'login', component: LoginComponent},
    {path:'courses',component:CoursesComponent},
    {path:'course',component:CourseCardComponent},
    {path:'post',component:PostComponent},
    {path:'posts',component:PostsComponent},
    {path:'postnav',component:PostNavigationComponent},
    {path:'postprofile',component:PostProfileComponent}   
];
