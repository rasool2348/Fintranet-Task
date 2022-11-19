import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from 'src/services/user-service';

@Component({
  selector: 'app-user-summary',
  templateUrl: './user-summary.component.html',
  styleUrls: ['./user-summary.component.css']
})
export class UserSummaryComponent implements OnInit {

  constructor(
    public userService:UserService,
    private router:Router) { }

  ngOnInit(): void {
  }

  goToNextPage(){
    this.userService.createNewUser();
    this.router.navigate(['/upload']);
  }
  goToLastPage(){
    this.router.navigate(['/people']);
  }

}
