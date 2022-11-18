import { ViewEncapsulation } from '@angular/core';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Validators } from '@angular/forms';
import { FormControl, ValidationErrors } from '@angular/forms';
import { UserService } from 'src/services/user-service';
import { Subscription } from 'rxjs';
import { Router } from '@angular/router';


@Component({
  selector: 'app-user-form',
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class UserFormComponent implements OnInit, OnDestroy {

  constructor(
    private fb: FormBuilder, 
    public userService: UserService,
    private router:Router) { }

  userForm = this.fb.group({
    amount: [0, [Validators.required]],
    date: [new Date(), [Validators.required, DateValidator.LessThanToday]],
    status: ['Open to work', Validators.required],
    fund: ['A', [Validators.required, Validators.pattern('^[a-zA-Z \-\']+')]]
  })

  statuses = [
    { name: 'Open to work', code: 'Open to work' },
    { name: 'Working', code: 'Working' },
    { name: 'Retired', code: 'Retired' },
    { name: 'Open to hire', code: 'Open to hire' },
  ]


  ngOnInit(): void {
        this.userForm.patchValue(
          {
            amount: this.userService.selectedUser.amount,
            date: this.userService.selectedUser.date,
            status: this.userService.selectedUser.status,
            fund: this.userService.selectedUser.fund
          }
        )
  }

  goToNextPage(){
    this.userService.selectedUser.amount = this.userForm.controls.amount.value;
    this.userService.selectedUser.status = this.userForm.controls.status.value;
    this.userService.selectedUser.fund = this.userForm.controls.fund.value;
    this.userService.selectedUser.date = this.userForm.controls.date.value;

    let userIndex = this.userService.users.findIndex(user => user.id == this.userService.selectedUser.id);
    if(userIndex < 0){
      this.userService.users.push(this.userService.selectedUser);
    }else{
      this.userService.users[userIndex] = this.userService.selectedUser;
    }
    

    this.router.navigate(['/people']);
  }
  goToLastPage(){
    this.router.navigate(['/upload']);
  }

  ngOnDestroy(): void {
  }





}


export class DateValidator {

  static LessThanToday(control: FormControl): ValidationErrors | null {
    let today: Date = new Date();
    let fiveDaysInMilliSeconds = 5 * 24 * 60 * 60 * 1000;

    if (new Date(control.value).getTime() < today.getTime() || new Date(control.value).getTime() > today.getTime() + fiveDaysInMilliSeconds)
      return { "wrongDay": true };

    return null;
  }
}
