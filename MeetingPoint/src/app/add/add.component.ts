import { Component, OnInit } from '@angular/core';
import {DalService} from '../dal.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent {
  DB: DalService;
  constructor(DBobj: DalService, private router: Router) {
    this.DB = DBobj;
  }
  onbtnaddm(title: string, datetime: string, place: string, purpose: string, priority: number, state: string) {
    this.DB.Addmeeting(this.DB.Utemp.username, title, datetime, place, purpose, priority, state);
    this.router.navigateByUrl('/list');
  }

}
