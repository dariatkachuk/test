import { Component, OnInit, Output, Input } from '@angular/core';
import { PostType } from '../post';
import { PostsService } from '../posts.service';
import { CampaignDetailComponent } from '../campaign-detail/campaign-detail.component';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {
 @Output() posts: PostType[];

  constructor(private postsService: PostsService) { }

  ngOnInit() {
    this.getPosts();
  }

  toReject(post: PostType): void {
    post.state = 'Rejected';
  }

  toApprove(post: PostType): void {
    post.state = 'Approved';
  }

  getPosts(): void {
    this.postsService.getPosts()
        .subscribe(posts => this.posts = posts);
  }

}
