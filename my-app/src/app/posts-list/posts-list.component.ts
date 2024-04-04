import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';
import { Post } from '../types/post';

@Component({
  selector: 'app-posts-list',
  templateUrl: './posts-list.component.html',
  styleUrls: ['./posts-list.component.css']
})
export class PostsListComponent implements OnInit{
  posts: Post[] = []
  isLoading: boolean = true

  constructor(private api: ApiService){}

  ngOnInit(): void {
    this.api.getPosts().subscribe(posts =>{
      console.log(posts);
      this.posts = posts

      this.isLoading = false
      
    })
  }

}

/*ngOnInit(): void {
    this.api.getThemes().subscribe(themes =>{
      console.log(themes);
      this.themes = themes
    })
  }*/
