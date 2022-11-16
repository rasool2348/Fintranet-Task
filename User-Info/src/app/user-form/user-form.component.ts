import { ViewEncapsulation } from '@angular/core';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Validators } from '@angular/forms';
import { FormControl, ValidationErrors } from '@angular/forms';
import { UserService } from 'src/services/user-service';
import { Subscription } from 'rxjs';


@Component({
  selector: 'app-user-form',
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.css'],
  encapsulation:ViewEncapsulation.None
})
export class UserFormComponent implements OnInit,OnDestroy {

  constructor(private fb:FormBuilder,public userService:UserService) { }
  
  userForm = this.fb.group({
    amount : [0,[Validators.required]],
    date: [new Date(),[Validators.required,DateValidator.LessThanToday]],
    status: ['',Validators.required],
    fund: ['',[Validators.required, Validators.pattern('^[a-zA-Z \-\']+')]] 
  })

  statuses = [
    {name:'Open to work',code:'Open to work'},
    {name:'Working',code:'Working'},
    {name:'Retired',code:'Retired'},
    {name:'Open to hire',code:'Open to hire'},
  ]

  subscription:Subscription;
  
  ngOnInit(): void {
    this.subscription = this.userService.selectUser.subscribe(
      user => {
        this.userForm.patchValue(
          {
            amount:user.amount,
            date:user.date,
            status:user.status,
            fund:user.fund
          }
        )
      }
    )
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

  



}


export class DateValidator {

   static LessThanToday(control: FormControl): ValidationErrors | null {
        let today : Date = new Date();
        let fiveDaysInMilliSeconds = 5 * 24 * 60 * 60 * 1000;

       if (new Date(control.value).getTime() < today.getTime() || new Date(control.value).getTime() > today.getTime()+ fiveDaysInMilliSeconds)
           return { "wrongDay": true };

       return null;
   }
}
