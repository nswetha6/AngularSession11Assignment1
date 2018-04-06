import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';
import {StudentService} from './forms-and-pipe/studentService';
import { AppComponent } from './app.component';
import { FormsAndPipeComponent } from './forms-and-pipe/forms-and-pipe.component';
import {DropDownService} from './forms-and-pipe/dropdownService';
//import { BsDatepickerModule, BsDatepickerConfig } from 'ngx-bootstrap/datepicker';
//import { DatepickerModule } from 'ngx-bootstrap';

@NgModule({
  declarations: [
    AppComponent,
    FormsAndPipeComponent
  ],
  imports: [
   // BsDatepickerModule.forRoot(),
    BrowserModule,FormsModule,
  ],
  providers: [StudentService,DropDownService],
  bootstrap: [AppComponent]
})
export class AppModule { }
