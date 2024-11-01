import { Component, EventEmitter, Input, input, Output, output } from '@angular/core';
import { ParentUser } from '../parent-user';
import { CommonModule } from '@angular/common';
import { ChildUser } from '../child-user';
import { DisplayService } from '../display.service';

@Component({
  selector: 'app-user',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './user.component.html',
  styleUrl: './user.component.css'
})
export class UserComponent {
  //Task 3 DONE
  @Input() users_3: ParentUser[] = [];

  //Task 4 DONE
  @Output() childUsersEmitter = new EventEmitter<ChildUser[]>();

  childUsers: ChildUser[] = [
    { id: 1, firstName: 'Sam', lastName: 'Green', dateOfBirth: new Date('2000-04-04'), phoneNumber: '456-789-0123', email: 'sam@example.com' },
    { id: 2, firstName: 'Lisa', lastName: 'White', dateOfBirth: new Date('1998-05-05'), phoneNumber: '567-890-1234', email: 'lisa@example.com' },
    { id: 3, firstName: 'Nick', lastName: 'Tchovelidze', dateOfBirth: new Date('2005-06-17'), phoneNumber: '567-890-1234', email: 'nikolozTchovelidze@example.com' },
  ];

  emitChildUsers() {
    this.childUsersEmitter.emit(this.childUsers);
  }

  //Task 6 DONE

  constructor(private displayService: DisplayService) {}

  displayUsers() {
    this.displayService.displayArray(this.users_3);
  }
}
