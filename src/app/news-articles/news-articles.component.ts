import { Component, OnInit } from '@angular/core';

import { NewsArticle } from './news-article';
import { NewsArticleService } from './news-article.service';

@Component({
  selector: 'app-news-articles',
  templateUrl: './news-articles.component.html',
  styleUrls: ['./news-articles.component.css']
})
export class NewsArticlesComponent implements OnInit {

  constructor(private articleService: NewsArticleService) { }

  ngOnInit() {
    this.getArticles();
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

  getArticles(): void {
    this.articleService.getArticles().subscribe(a => this.articles = a);
  };



}
