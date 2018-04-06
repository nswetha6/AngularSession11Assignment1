import {dropdown} from './dropdown.model';

import { Injectable } from '@angular/core';

@Injectable()

export class DropDownService {
    
    deplist:dropdown[] =[];
    getDepList(){
//passing deparment list values to dropdown
        return this.deplist =[{
            id:1,
            depname:"CSE"
        },
        {
            id:2, depname:"ECE"
        },
        {
            id:3, depname:"EEE"
        },
        {
            id:4, depname:"IT"
        }
    ];
        
    }
}

