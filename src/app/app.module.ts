import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { MessagesComponent } from './messages/messages.component';
import { MessageService } from './messages/message.service';
import { FormsModule } from '@angular/forms';
import { NewsArticlesComponent } from './news-articles/news-articles.component';
import { ArticleFormComponent } from './news-articles/article-form/article-form.component';
import { NewsArticleService } from './news-articles/news-article.service';

@NgModule({
    declarations: [
        AppComponent,
        MessagesComponent,
        NewsArticlesComponent,
        ArticleFormComponent
    ],
    imports: [BrowserModule, HttpClientModule, FormsModule],
    providers: [MessageService, NewsArticleService],
    bootstrap: [AppComponent]
})
export class AppModule {}
