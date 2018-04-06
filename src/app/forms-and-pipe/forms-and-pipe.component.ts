import { Component, OnInit } from '@angular/core';
import {student} from './student.model';
import {StudentService} from './studentService';
import {DropDownService} from './dropdownService';
import {dropdown} from './dropdown.model';
//import { BsDatepickerModule,BsDatepickerConfig } from 'ngx-bootstrap/datepicker';

@Component({
  selector: 'app-forms-and-pipe',
  templateUrl: './forms-and-pipe.component.html',
  styleUrls: ['./forms-and-pipe.component.css'],
  
})
export class FormsAndPipeComponent implements OnInit {

  //datePickerConfig: Partial<BsDatepickerConfig>;
 
  studentinfo:student;
  slist:student;
  FinalStudentInfo:student[];
  droplist:dropdown[]=[];
  submitted:boolean=false;
  constructor(private _dropdownservice:DropDownService,private _studentservice:StudentService) {
    /*for date picket styling
    this.datePickerConfig= Object.assign({},{containerClass:'theme-dark-blue'});  */
   }

// two services - 1. for dropdown list of department names, 2. for retuning the form input values
  ngOnInit() {
    //intialising values of 3 input , dropdown, date fields in ngOnInit
    
    this.studentinfo = 
    {
      firstname:"",
      middlename:"",
      lastname:"",
      course:"",
      date:new Date()
    };
     // new student("","","","",new Date());
     
  this.getDropDownlist();       // calling funciton to display dropdown values for course.
  }
  
  getDropDownlist(){
    this.droplist= this._dropdownservice.getDepList();
  }

  getStudentList(inputVal:student){
    // passing values from the form after clicking on the submit button
this.slist= {
     firstname:inputVal.firstname,
     middlename:inputVal.middlename,
    lastname:inputVal.lastname,
    course:inputVal.course,
    date:inputVal.date
}

// validating fields if all are filled or not.
if(inputVal.firstname.length!==0 
  && inputVal.middlename.length!==0 
  && inputVal.lastname.length!==0
  && inputVal.course.length!==0
  && inputVal.date)
{
  this.submitted=true;
    this._studentservice.getStudentList(this.slist);      // calling function using service to add the values to a table for display.
    this.FinalStudentInfo = this._studentservice.getFinalList();  //finally returning the values to a table for display.
}
 else
 {
   alert("please fill all details");
 } 
  }
 
}
