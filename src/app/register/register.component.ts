import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { User } from '../user';
import { RegisterService } from './register.service';
import { Router } from '@angular/router';
import { routerNgProbeToken } from '@angular/router/src/router_module';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

    user = new User();
    usersInData: User[];
    storedUser: User;

  constructor(private registerService: RegisterService,
              private router: Router) { }

  ngOnInit() {
    this.storedUser = JSON.parse(this.registerService.getCurrentUser());
    if (this.storedUser !== null) {
        this.router.navigate(['/messages']);
    }
  }

  registerUser(form: NgForm) {
      this.registerService.searchUsers().toPromise().then(userArray => {
        this.usersInData = userArray;
        const userExists = this.usersInData.find(singleUser => singleUser.username === this.user.username);
        if (!userExists) {
            this.registerService.registerUser(this.user).subscribe(u => {
                sessionStorage.setItem('currentUser', JSON.stringify(u));
                form.resetForm();
                this.router.navigate(['/login']);
            }
                 );
          } else {
             alert('This user already exists!');
             form.resetForm();
          }

      });

    }
}
