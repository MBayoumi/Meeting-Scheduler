import { Component } from '@angular/core';
import {DalService} from './dal.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [DalService]
})
export class AppComponent {
  DB: DalService;
  constructor(DBobj: DalService) {
    this.DB = DBobj;
  }
}
