import { Component, OnInit } from '@angular/core';
import { Item } from 'src/models/item';
import { UserService } from 'src/services/user-service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'User-Info';

  items:Item[] = [
    new Item('Upload Image','upload'),
    new Item('User Info','user'),
    new Item('People','people'),
    new Item('Confirmation','confirmation'),
  ]

  constructor(private userService:UserService){

  }
  ngOnInit(){
    this.userService.createNewUser();
  }

}
