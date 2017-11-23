import { Injectable } from '@angular/core';
import { Post } from './posts';
import { ApiService } from './api.service';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class PostDataService {

  constructor(
    private api: ApiService
  ) {
  }


  getAllPost(): Observable<Post[]> {
    return this.api.getAllPost();
  }


}
