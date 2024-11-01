import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ParentUser } from './parent-user';
import { UserComponent } from "./user/user.component";
import { ChildUser } from './child-user';
import { User } from './user';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';



@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CommonModule, UserComponent,ReactiveFormsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Midterm_Nikoloz_Tchovelidze';
  //Task 2 DONE

  users: any[] = [
    { firstName: 'Alice', lastName: 'Smith', age: 23 },
    { firstName: 'Bob', lastName: 'Johnson', age: 19 },
    { firstName: 'Charlie', lastName: 'Brown', age: 25 },
    { firstName: 'David', lastName: 'Wilson', age: 18 },
    { firstName: 'Eve', lastName: 'Davis', age: 30 },
  ];

  //Task 3 DONE

  users_3: ParentUser[] = [
    { id: 1, firstName: 'Nick', lastName: 'Tchovelidze', dateOfBirth: new Date('2005-06-17'), phoneNumber: '123-456-7890', email: 'nikolozTchovelidze@example.com' },
    { id: 2, firstName: 'george', lastName: 'Johnson', dateOfBirth: new Date('2002-02-02'), phoneNumber: '234-567-8901', email: 'bob@example.com' },
    { id: 3, firstName: 'Charlie', lastName: 'Brown', dateOfBirth: new Date('1995-03-03'), phoneNumber: '345-678-9012', email: 'charlie@example.com' },
  ];

  //Task 4 DONE

  ChildUser: ChildUser[] = [];

  childUsersEmitter(data:any)
  {
    this.ChildUser = data;
  }

  //Task 5 DONE

  users_5: User[] = [];
  userForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.userForm = this.fb.group({
      id: [null],
      firstName: ['', [Validators.required, Validators.minLength(3)]],
      lastName: ['', [Validators.required, Validators.minLength(3)]],
      dateOfBirth: ['', Validators.required],
      phoneNumber: ['', [Validators.required, Validators.minLength(9)]],
      email: ['', [Validators.required, Validators.email, Validators.minLength(8)]],
    });
  }

  addUser() {
    if (this.userForm.valid) {
      const newUser: User = { ...this.userForm.value };
      this.users_5.push(newUser);
      this.userForm.reset();
    }
  }

  
}
