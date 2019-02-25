import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-news-articles',
  templateUrl: './news-articles.component.html',
  styleUrls: ['./news-articles.component.css']
})
export class NewsArticlesComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  showArticleForm() {
    if (!this.addArticleButtonClicked) {
      this.addArticleButtonClicked = true;
    } else if (this.addArticleButtonClicked) {
      this.addArticleButtonClicked = false;
    }


  }

  addArticleButtonClicked: Boolean = false;

}
