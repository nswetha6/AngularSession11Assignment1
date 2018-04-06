import {student} from './student.model';
import { Injectable } from '@angular/core';

@Injectable()
export class StudentService{

    studentlist:student[]=[];
        getStudentList(addStudent:student){
            //console.log(addStudent);
            // adding input values for display using unshift method of arrays
        this.studentlist.unshift(addStudent);
    }
    getFinalList(){
        // return/display values in the view of screen.
        return this.studentlist;
    }
}