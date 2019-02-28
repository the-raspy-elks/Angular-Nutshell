import { Component, OnInit, Output } from '@angular/core';

import { NewsArticle } from '../news-article';
import { NewsArticleService } from '../news-article.service';
import { EventEmitter } from '@angular/core';
import { NgForm } from '@angular/forms';
import { getLocaleDateTimeFormat } from '@angular/common';

@Component({
    selector: 'app-article-form',
    templateUrl: './article-form.component.html',
    styleUrls: ['./article-form.component.css']
})
export class ArticleFormComponent implements OnInit {
    article = new NewsArticle();

    @Output() refresh = new EventEmitter();
    constructor(private articleService: NewsArticleService) {}

    ngOnInit() {}

    onSubmit(form: NgForm) {
        this.article.date = Date.now();
        this.articleService
            .postArticle(this.article)
            .subscribe(r => this.refresh.emit());
    }
}
