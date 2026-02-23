import { Component } from '@angular/core';
import { PostService } from '../post.service';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-post',
  standalone: true,
  imports: [FormsModule, HttpClientModule, CommonModule],
  templateUrl: './post.component.html',
  styleUrl: './post.component.css',
})
export class PostComponent {
  constructor(private postService: PostService) {}

  posts: any[] = [];
  input: string = '';

  fetchPostsByID() {
    const postId = parseInt(this.input);

    this.postService.getpostById(postId).subscribe({
      next: (response: any) => {
        this.posts = [response];
      },
      error(error: any) {
        console.log('Error fetching posts : ' + error);
      },
    });
  }

  fetchALLPosts() {
    this.postService.getAllPosts().subscribe((data) => {
      this.posts = data;
    });
  }
}
