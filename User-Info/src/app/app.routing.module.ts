import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UserFormComponent } from './user-form/user-form.component';
import { UserPicComponent } from './user-pic/user-pic.component';
import { UserSummaryComponent } from './user-summary/user-summary.component';
import { UserTableComponent } from './user-table/user-table.component';

const routes: Routes = [
    {
        path: 'upload', component: UserPicComponent
    },
    {
        path: 'user', component: UserFormComponent
    },
    {
        path: 'people', component: UserTableComponent
    },
    {
        path: 'confirmation', component: UserSummaryComponent
    },
    {
        path: '', redirectTo:'upload', pathMatch:'full'
    },
    {
        path: '**', component: UserPicComponent
    },
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }