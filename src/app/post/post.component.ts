import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { PostsService } from '../posts/posts.service';

@Component({
  selector: 'app-post',
  imports: [CommonModule,FormsModule],
  templateUrl: './post.component.html',
  styleUrl: './post.component.scss'
})
export class PostComponent {
  //@Input()
  userPosts: any[] = [];
  likedPosts: Set<number> = new Set<number>();
  newComment: string = '';

  constructor(private postsService:PostsService) { }

  ngOnInit() {
    console.log('Post Component Initialized');
    this.getUserPosts();
  }

  getUserPosts(){
    this.postsService.fetchPosts().subscribe(posts => {
      this.userPosts = posts;
    });
  }

  likePost(postId: number) {
    if (this.likedPosts.has(postId)) {
      this.likedPosts.delete(postId);
    } else {
      this.likedPosts.add(postId);
    }
  }

  addComment(postId: number):void {
    const post = this.userPosts.find(post => post.id === postId);
    post.comments.push(this.newComment);
    this.newComment = '';
  }


}
