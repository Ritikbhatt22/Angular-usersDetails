import { Component } from '@angular/core';

import{PostListComponent} from '../app/post-list/post-list.component'
import{PostCreateComponent} from '../app/post-create/post-create.component'
import {freeApiService} from './services/freeapi.services';
import { Comment } from './classes/comments';
import {Posts} from './classes/posts'
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

constructor( ){

}
ngOnInit(){

}

}
