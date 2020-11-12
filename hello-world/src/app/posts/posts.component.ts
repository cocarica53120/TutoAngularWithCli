import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css'],
})
export class PostsComponent implements OnInit {
  posts: any;
  private url = 'https://jsonplaceholder.typicode.com/posts';

  constructor(private http: HttpClient) { }

  ngOnInit() {
    this.http.get(this.url).subscribe(
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

    this.http.post(this.url, JSON.stringify(post)).subscribe(next => {
      post['userId'] = next['id'];
      this.posts.splice(0, 0, post);// Put at the head of list
    });
  }

  updatePost(post: any): void {
    // this.http.put(this.url, JSON.stringify(post))
    this.http.patch(this.url + '/' + post.id, JSON.stringify({isRead: true}))
    .subscribe(next => {
      console.log('update result', next);
    });
  }

  deletePost(post: any): void {
    this.http.delete(this.url + '/' + post.id)
    .subscribe(next => {
      console.log('delete result', next);
      const index = this.posts.indexOf(post);
      this.posts.splice(index, 1);
    });
  }


}
