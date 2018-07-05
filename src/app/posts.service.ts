import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

import { PostType } from './post';
import { POSTS } from './mock-post';

@Injectable({
  providedIn: 'root'
})
export class PostsService {

  constructor() { }

  getPosts(): Observable<PostType[]> {
    return of(POSTS);
  }

}
