import {Component, OnChanges, OnInit} from '@angular/core';
import {DalService} from '../dal.service';
@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
  // providers: [DalService]
})
export class ListComponent implements OnInit {
  DB: DalService;
  tuser;
  tshow = true;
  constructor(DBobj: DalService) {
    this.DB = DBobj;
  }
  ngOnInit() {
    for (const user of this.DB.Users) {
      if (this.DB.Utemp.username === user.username) {
        this.tuser = Object.assign({}, user);
      }
    }
  }
  onbtnfil(filterv: string) {
      const temp = this.tuser.Meeting;
      this.tuser.Meeting = [];
      for (const meet of temp) {
        if (meet.place === filterv) {
          this.tuser.Meeting.push(meet);
        }
      }
  }
  onbtnunfil() {
    this.tuser = Object.assign({}, this.DB.Utemp);
  }
  onbtnsort() {
    this.tuser.Meeting.sort(function(a, b) {return (a.priority < b.priority) ? 1 : ((b.priority < a.priority) ? -1 : 0); });
  }
  onshow(title: string) {
    for (const meet of this.tuser.Meeting) {
      if (title === meet.title) {
        this.DB.Mtemp = Object.assign({}, meet);
      }
    }
  }
  ondelete(title: string) {
    for (const meet of this.tuser.Meeting) {
      if (title === meet.title) {
        meet.title = '';
        meet.datetime = '';
        meet.place = '';
        meet.purpose = '';
        meet.priority = 0;
        meet.state = '';
      }
    }
    this.tuser.Meeting.sort(function(a, b) {return (a.title > b.title) ? 1 : ((b.title > a.title) ? -1 : 0); });
    this.tuser.Meeting.splice(0, 1);
    if (this.tuser.Meeting.length === 0) {
      this.tshow = false;
    }else {
      this.tshow = true;
    }

  }
}
