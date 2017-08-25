import { Component, OnInit } from '@angular/core';
import {DalService} from '../dal.service';
import {ListComponent} from '../list/list.component';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
  // providers: [DalService]
})
export class RegisterComponent {
  DB: DalService;
   constructor(DBobj: DalService) {
     this.DB = DBobj;
   }

  onbtnsubmit(UN: string, PW: string, EM: string) {
    this.DB.Adduser(UN, PW, EM);
    alert('User added successfully');
  }

}
