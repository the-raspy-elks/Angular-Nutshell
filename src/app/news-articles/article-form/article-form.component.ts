import { Component, OnInit, Output } from '@angular/core';

import { NewsArticle } from '../news-article';
import { NewsArticleService } from '../news-article.service';
import { EventEmitter } from 'selenium-webdriver';

@Component({
  selector: 'app-article-form',
  templateUrl: './article-form.component.html',
  styleUrls: ['./article-form.component.css']
})
export class ArticleFormComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  article: NewsArticle;
  
  @Output() formSubmit: new EventEmitter();

  onSubmit() {
    
  };

}
