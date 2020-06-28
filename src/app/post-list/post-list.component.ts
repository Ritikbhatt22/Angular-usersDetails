import { Component, OnInit } from '@angular/core';
import {freeApiService} from '../services/freeapi.services';

import {Posts} from '../classes/posts'
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';



@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.css']
})
export class PostListComponent implements OnInit {

 
constructor(private freeApiService:freeApiService,
            private route:ActivatedRoute){

}

posts:Posts[];
sub:Subscription;
  ngOnInit(): void{
    this.sub=this.route.paramMap.subscribe(params=>{

      let id=params.get('id');
      this.freeApiService.getCommentByParameter(id)
      .subscribe
      (
        data=>{
    this.posts=data;
        }
      );
    })

  }
}


