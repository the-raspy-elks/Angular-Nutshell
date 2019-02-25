import { Component, OnInit } from '@angular/core';

import { NewsArticle } from './news-article';

@Component({
  selector: 'app-news-articles',
  templateUrl: './news-articles.component.html',
  styleUrls: ['./news-articles.component.css']
})
export class NewsArticlesComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  articles: NewsArticle[];

  showArticleForm() {
    if (!this.addArticleButtonClicked) {
      this.addArticleButtonClicked = true;
    } else if (this.addArticleButtonClicked) {
      this.addArticleButtonClicked = false;
    }


  }

  addArticleButtonClicked: Boolean = false;

}
