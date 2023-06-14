import { Component, OnInit } from '@angular/core';
import { PostService } from '../post.service';
 
@Component({
  selector: 'app-service-demo',
  templateUrl: './service-demo.component.html',
  styleUrls: ['./service-demo.component.scss'], 
})
export class ServiceDemoComponent implements OnInit  {

  posts: Array<any>;

  constructor(public postService: PostService) {
    //let postService = new PostService()
    this.posts = postService.postList;
  }
 
  addNewData() {
    let newPost = {
      id: "7",
      postTitle: "post 7"
    }
    this.postService.addpost(newPost)
  }
  ngOnInit(): void {

  }

}
