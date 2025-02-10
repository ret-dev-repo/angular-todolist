import { Component } from '@angular/core';
import { PostComponent } from '../post/post.component';
import { RouterLink,RouterLinkActive} from '@angular/router'

@Component({
  selector: 'app-posts',
  imports: [PostComponent,RouterLink],
  templateUrl: './posts.component.html',
  styleUrl: './posts.component.scss'
})
export class PostsComponent {

  posts = [
    {
      id: 1,
      user: 'John Doe',
      content: 'Just had an amazing day at the park!',
      comments: ['Sounds fun!', 'Glad to hear that!']
    },
    {
      id: 2,
      user: 'Jane Smith',
      content: 'Excited about the new project launch tomorrow.',
      comments: ['Good luck!', 'You will do great!']
    }
  ];


  constructor() { }

  onNgInit() {
    console.log('Posts Component Initialized');
  }

}
