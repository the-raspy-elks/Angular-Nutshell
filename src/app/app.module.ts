import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { NewsArticlesComponent } from './news-articles/news-articles.component';
import { HttpClientModule } from '@angular/common/http';
import { ArticleFormComponent } from './news-articles/article-form/article-form.component';

@NgModule({
  declarations: [
    AppComponent,
    NewsArticlesComponent,
    ArticleFormComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
