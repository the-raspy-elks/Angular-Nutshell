import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { NewsArticle } from './news-article';
import { Observable, of } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class NewsArticleService {
    private articlesUrl = 'http://localhost:3000/articles';

    constructor(private http: HttpClient) {}

    getArticles(): Observable<NewsArticle[]> {
        const descArticleOrderUrl = `${
            this.articlesUrl
        }/?_sort=date&_order=desc`;
        return this.http.get<NewsArticle[]>(descArticleOrderUrl);
    }

    postArticle(article: NewsArticle): Observable<NewsArticle> {
        return this.http.post<NewsArticle>(this.articlesUrl, article);
    }

    deleteArticle(id: number): Observable<NewsArticle> {
        const specificUrl = `${this.articlesUrl}/${id}`;
        return this.http.delete<NewsArticle>(specificUrl);
    }
}
