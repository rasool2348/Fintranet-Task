import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/services/user-service';

@Component({
  selector: 'app-user-summary',
  templateUrl: './user-summary.component.html',
  styleUrls: ['./user-summary.component.css']
})
export class UserSummaryComponent implements OnInit {

  constructor(public userService:UserService) { }

  ngOnInit(): void {
  }

}
