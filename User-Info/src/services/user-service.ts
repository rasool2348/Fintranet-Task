import {Injectable} from '@angular/core'
import { User } from 'src/models/user';
import { Subject } from 'rxjs';

@Injectable()
export class UserService{

    constructor(){}

    //list of users
    users:User[] = [];

    selectedUser:User;
    selectUser = new Subject<User>();

    counter:number = 0

    createNewUser(){
        this.selectedUser = new User();
        this.selectedUser.id = this.counter;
        this.counter++;
    }

}