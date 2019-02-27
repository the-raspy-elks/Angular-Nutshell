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

  constructor(private registerService: RegisterService) { }

  ngOnInit() {
  }

  registerUser(form: NgForm) {
      this.registerService.registerUser(this.user).subscribe(r => form.resetForm);
  }
}
