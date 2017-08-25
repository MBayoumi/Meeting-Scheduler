import { Component, OnInit } from '@angular/core';
import {DalService} from '../dal.service';
import { Router, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
@Component({
  selector: 'app-show',
  templateUrl: './show.component.html',
  styleUrls: ['./show.component.css']
})
export class ShowComponent {
  DB: DalService;
  constructor(DBobj: DalService, private router: Router) {
    this.DB = DBobj;
  }
  onbtnup(titleu: string, state: string, piriorty: number) {
    for (const meet of this.DB.Utemp.Meeting) {
      if (titleu === meet.title) {
        meet.title = '';
        meet.datetime = '';
        meet.place = '';
        meet.purpose = '';
        meet.priority = 0;
        meet.state = '';
      }
    }
    this.DB.Utemp.Meeting.sort(function(a, b) {return (a.title > b.title) ? 1 : ((b.title > a.title) ? -1 : 0); });
    this.DB.Utemp.Meeting.splice(0, 1);
    this.DB.Addmeeting(this.DB.Utemp.username, this.DB.Mtemp.title, this.DB.Mtemp.datetime, this.DB.Mtemp.place, this.DB.Mtemp.purpose, piriorty, state);
    this.router.navigateByUrl('/list');
  }

}
