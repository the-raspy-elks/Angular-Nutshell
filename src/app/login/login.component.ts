import { Component, OnInit } from '@angular/core';
import { User } from '../user';
import { LoginService } from './login.service';
import { Router } from '@angular/router';

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
    constructor(private loginService: LoginService, private router: Router) {}

    currentUser: User;

    ngOnInit() {}

    loginUser(logginInUser: string) {
        this.loginService.loginUser(logginInUser).subscribe(activeUser => {
            if (activeUser[0] !== undefined) {
                localStorage.setItem('user', JSON.stringify(activeUser[0]));
                this.currentUser = activeUser[0];
                this.router.navigate(['/messages']);
            } else {
                alert('ya done fuckd up');
            }
        });
    }
}
