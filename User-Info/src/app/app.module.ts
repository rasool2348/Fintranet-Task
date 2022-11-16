import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { UserPicComponent } from './user-pic/user-pic.component';
import { UserFormComponent } from './user-form/user-form.component';
import { UserTableComponent } from './user-table/user-table.component';
import { UserSummaryComponent } from './user-summary/user-summary.component';

@NgModule({
  declarations: [
    AppComponent,
    UserPicComponent,
    UserFormComponent,
    UserTableComponent,
    UserSummaryComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
