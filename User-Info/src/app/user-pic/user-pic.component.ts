import { Component, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { UserService } from 'src/services/user-service';

@Component({
  selector: 'app-user-pic',
  templateUrl: './user-pic.component.html',
  styleUrls: ['./user-pic.component.css']
})
export class UserPicComponent implements OnInit {

  constructor(private sanitizer: DomSanitizer, public userService: UserService) { }

  ngOnInit(): void {
  }



  async selectFile(file: any) {
    this.userService.pic = this.sanitizer.bypassSecurityTrustUrl(file.currentFiles[0].objectURL.changingThisBreaksApplicationSecurity);
  }

}
