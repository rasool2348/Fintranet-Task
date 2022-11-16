import {Injectable} from '@angular/core'
import { User } from 'src/models/user';
import { Subject } from 'rxjs';

@Injectable()
export class UserService{

    constructor(){}

    //list of users
    users = [
        new User(1000,new Date(2022,10,17),'Open to work', 'A'),
        new User(2000,new Date(2022,10,18),'Open to hire', 'B'),
        new User(3000,new Date(2022,10,17),'Open to hire', 'B'),
        new User(1500,new Date(2022,10,20),'Retired', 'C'),
        new User(1300,new Date(2022,10,17),'Retired', 'B'),
        new User(2500,new Date(2022,10,21),'Open to work', 'B'),
        new User(1600,new Date(2022,10,19),'Working', 'A'),
        new User(1900,new Date(2022,10,17),'Working', 'A'),
        new User(1000,new Date(2022,10,18),'Open to work', 'C'),
        new User(3000,new Date(2022,10,16),'Working', 'C'),
    ];

    selectedUser:User = this.users[0];
    pic:any;//safa URL for picture
    selectUser = new Subject<User>();

}