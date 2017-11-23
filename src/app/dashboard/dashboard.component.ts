import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Post } from '../posts';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: [ './dashboard.component.css' ]
})
export class DashboardComponent {

  @Input()
  posts: Post[] = [];

  constructor(private postService: ApiService) { }

  ngOnInit() {
    this.getAllPost();
  }

  getAllPost(): void {
    this.postService.getAllPost()
      .subscribe(posts => this.posts = posts);
  }
}