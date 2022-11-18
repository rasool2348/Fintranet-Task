import { Component, OnInit } from '@angular/core';
import { TableColumn } from 'src/models/table-column';
import { User } from 'src/models/user';
import { UserService } from 'src/services/user-service';
import { ViewEncapsulation } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user-table',
  templateUrl: './user-table.component.html',
  styleUrls: ['./user-table.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class UserTableComponent implements OnInit {

  constructor(
    public userService: UserService,
    private router:Router) { }

  ngOnInit(): void {
    
  }

  cols = [
    new TableColumn('amount', 'Amount'),
    new TableColumn('date', 'Date'),
    new TableColumn('status', 'Status'),
    new TableColumn('fund', 'Fund'),
  ];

  selectUser(user: User) {
    this.userService.selectedUser = user;
    this.goToLastPage();
  }

  goToNextPage(){
    this.router.navigate(['/confirmation']);
  }
  goToLastPage(){
    this.router.navigate(['/user']);
  }

}
