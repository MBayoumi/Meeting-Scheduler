// import { Injectable } from '@angular/core';
//
// @Injectable()
export class DalService {
  temp= {title: '', datetime: '', place: '', purpose: '', priority: 0, state: 'Active'};
  Utemp;
  Mtemp;
  logedin = false;
  Users = [{
    username: 'admin',
    password: 'admin',
    email: 'admin@admin.com',
    Meeting: [{title: 'first', datetime: '2017-05-10', place: 'maddi', purpose: 'project', priority: 5, state: 'Active'},
      {title: 'second', datetime: '2017-05-10', place: 'maddi', purpose: 'project', priority: 1, state: 'Active'},
      {title: 'third', datetime: '2017-05-10', place: 'ainshams', purpose: 'project', priority: 7, state: 'Active'}]
  }, {username: 'mido',
    password: 'mido',
    email: 'admin@admin.com',
    Meeting: [{title: 'sec', datetime: '1 jan', place: 'maddi', purpose: 'project', priority: 5, state: 'Active'}]}];
  Adduser(UN: string, PW: string, EM: string) {
    this.Users.push({username: UN, password: PW, email: EM,
      Meeting: []});
  }
  Login(UN: string, PW: string) {
    for (const user of this.Users) {
      if (UN === user.username && PW === user.password) {
        this.Utemp = Object.assign({}, user);
        return true;
      }
    }
    return false;
  }
  Addmeeting(username: string, titlev: string, datetimev: string, placev: string, purposev: string, priorityv: number, statev: string) {
    for (const user of this.Users) {
      if (username === user.username) {
        user.Meeting.push({title: titlev, datetime: datetimev, place: placev, purpose: purposev, priority: priorityv, state: statev});
      }
    }
  }
}
