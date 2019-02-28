import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { User } from '../user';
import { RegisterService } from './register.service';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

    user = new User();
    usersInData: User[];

  constructor(private registerService: RegisterService) { }

  ngOnInit() {
  }

  registerUser(form: NgForm) {
      this.registerService.searchUsers().toPromise().then(userArray => {
        this.usersInData = userArray;
        const userExists = this.usersInData.find(singleUser => singleUser.username === this.user.username);
        if (!userExists) {
            this.registerService.registerUser(this.user).subscribe(u => {
                sessionStorage.setItem('currentUser', JSON.stringify(u));
                form.resetForm();
            }
                 );
          } else {
             alert('This user already exists!');
             form.resetForm();
          }

      });

    }
}
