import {
    Injectable
} from '@angular/core';
import {
    environment
} from '../environments/environment';
import {
    Http,
    Response
} from '@angular/http';
import {
    Post
} from './posts';
import {
    Observable
} from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';

//const API_URL = environment.apiUrl;

const baseUrl = 'https://jsonplaceholder.typicode.com';

@Injectable()
export class ApiService {

    constructor(
        private http: Http
    ) {}

    public getAllPost(): Observable < Post[] > {
        return this.http
            .get(baseUrl + '/posts')
            .map(response => {
                const posts = response.json();
                return posts.map((post) => new Post(post));
            })
            //.catch(this.handleError);
    }

}