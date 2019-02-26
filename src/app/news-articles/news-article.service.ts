import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { NewsArticle } from './news-article';
import { Observable, of } from 'rxjs';




@Injectable({
  providedIn: 'root'
})
export class NewsArticleService {

  private _articlesUrl : string = 'http://localhost:3000/articles';

  constructor(private http: HttpClient) { }

  getArticles() : Observable<NewsArticle[]>{
    return this.http.get<NewsArticle[]>(this._articlesUrl);
  };

  postArticle(article: NewsArticle) : Observable<NewsArticle> {
    return this.http.post<NewsArticle>(this._articlesUrl, article);
  };

  deleteArticle(id: number) : Observable<NewsArticle> {
    let specificUrl: string = `${this._articlesUrl}/${id}`;
    return this.http.delete<NewsArticle>(specificUrl);
  }



}
