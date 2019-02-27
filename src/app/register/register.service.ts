import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from '../user';
import { Observable } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class RegisterService {
    private usersUrl = 'http://localhost:3000/users';

    constructor(private http: HttpClient) {}

    registerUser(user: User): Observable<User> {
      return this.http.post<User>(this.usersUrl, user);
    }
}
