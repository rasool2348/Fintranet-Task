import { Component, OnInit } from '@angular/core';
import { TableColumn } from 'src/models/table-column';
import { User } from 'src/models/user';
import { UserService } from 'src/services/user-service';
import { ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-user-table',
  templateUrl: './user-table.component.html',
  styleUrls: ['./user-table.component.css'],
  encapsulation:ViewEncapsulation.None
})
export class UserTableComponent implements OnInit {

  constructor(public userService:UserService) { }

  ngOnInit(): void {
    this.selectUser(this.userService.selectedUser);
  }

  cols = [
    new TableColumn('amount','Amount'),
    new TableColumn('date','Date'),
    new TableColumn('status','Status'),
    new TableColumn('fund','Fund'),
  ];

  selectUser(user:User){
    this.userService.selectedUser = user;
    this.userService.selectUser.next(user);
  }

}
