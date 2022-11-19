import { Component, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { Router } from '@angular/router';
import { User } from 'src/models/user';
import { UserService } from 'src/services/user-service';

@Component({
  selector: 'app-user-pic',
  templateUrl: './user-pic.component.html',
  styleUrls: ['./user-pic.component.css']
})
export class UserPicComponent implements OnInit {

  constructor(
    private sanitizer: DomSanitizer, 
    public userService: UserService,
    private router:Router) { }

  ngOnInit(): void {}

  selectFile(file: any) {
    this.userService.selectedUser.pic = this.sanitizer.bypassSecurityTrustUrl(file.currentFiles[0].objectURL.changingThisBreaksApplicationSecurity);
  }

  goToNextPage(){
    this.router.navigate(['/user'])
  }

}
