import { TestBed } from '@angular/core/testing';

import { NewsArticleService } from './news-article.service';

describe('NewsArticleService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: NewsArticleService = TestBed.get(NewsArticleService);
    expect(service).toBeTruthy();
  });
});
