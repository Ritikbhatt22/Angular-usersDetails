import { Component, OnInit } from '@angular/core';



import {freeApiService} from '../services/freeapi.services';
import { Comment } from '../classes/comments';
import {Posts} from '../classes/posts';


@Component({
  selector: 'app-post-create',
  templateUrl: './post-create.component.html',
  styleUrls: ['./post-create.component.css']
})
export class PostCreateComponent implements OnInit {
  constructor(private freeApiService:freeApiService){
  }

name:string;

lstcomments:Comment[];

Search(){
  if(this.name!=""){
    this.lstcomments = this.lstcomments.filter(res=>{
      return res.name.toLocaleLowerCase().match(this.name.toLocaleLowerCase())
    })
  } else if(this.name==""){

 return this.ngOnInit();
  }
}
  ngOnInit(): void{

    this.freeApiService.getComments()
    .subscribe
    (
      data=>{
  this.lstcomments=data;
      }
    );

  }
}
