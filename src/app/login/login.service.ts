import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from '../user';
import { Observable } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class LoginService {
    constructor(private http: HttpClient) {}

    loginUser(logginInUser: string): Observable<User[]> {
         return this.http.get<User[]>(`http://localhost:3000/users?username=${logginInUser}`);
    }
}
