import { NgModule } from '@angular/core';
import {FileUploadModule} from 'primeng/fileupload';
import {ImageModule} from 'primeng/image';
import {CalendarModule} from 'primeng/calendar';
import {DropdownModule} from 'primeng/dropdown';
import {InputTextModule} from 'primeng/inputtext';
import {TableModule} from 'primeng/table';
import {CardModule} from 'primeng/card';
import {StepsModule} from 'primeng/steps';

@NgModule({
  declarations: [

  ],
  imports: [
    FileUploadModule,
    ImageModule,
    CalendarModule,
    DropdownModule,
    InputTextModule,
    TableModule,
    CardModule,
    StepsModule
  ],
  exports:[
    FileUploadModule,
    ImageModule,
    CalendarModule,
    DropdownModule,
    InputTextModule,
    TableModule,
    CardModule,
    StepsModule
  ]
  
})
export class PrimeNgModule { }
