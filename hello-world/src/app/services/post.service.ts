import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

// It is using a fake server. So creation, update and delete are not really effective...
// It is only done to check service
@Injectable({
  providedIn: 'root'
})
export class PostService {
  private url = 'https://jsonplaceholder.typicode.com/posts';

  constructor(private http: HttpClient) {

  }

  getPosts(): Observable<any> {
    return this.http.get(this.url);
  }

  createPost(post: any): Observable<any> {
    return this.http.post(this.url, JSON.stringify(post));
  }

  updatePost(post: any): Observable<any> {
    return this.http.patch(this.url + '/' + post.id, JSON.stringify({isRead: true}));
  }

  deletePost(id: string): Observable<any> {
    return this.http.delete(this.url + '/' + id);
  }
}
