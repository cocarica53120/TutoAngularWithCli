import { PostService } from './../services/post.service';
import { Component, OnInit } from '@angular/core';

// With Http operations exported in PostService, Separation of Concerns is respected.
// This component has only one responsability view and control

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css'],
})
export class PostsComponent implements OnInit {
  posts: any;

  constructor(private service: PostService) {}

  ngOnInit() {
    this.service.getPosts().subscribe(
      (next) => {
        console.log('next', next);
        this.posts = next;
      },
      (error) => console.log('error', error),
      () => console.log('complete')
  );
}

  createPost(input: HTMLInputElement): void {
    let post = { title: input.value };
    this.service.createPost(post).subscribe(response => {
      post['userId'] = response['id'];
      this.posts.splice(0, 0, post); // Put at the head of list
    });
  }

  updatePost(post: any): void {
    this.service.updatePost(post).subscribe(response => {
      console.log('simulated update result', response);
    });
  }

  deletePost(post: any): void {
    this.service.deletePost(post.id).subscribe(response => {
      const index = this.posts.indexOf(post);
      this.posts.splice(index, 1);
    });
}}
