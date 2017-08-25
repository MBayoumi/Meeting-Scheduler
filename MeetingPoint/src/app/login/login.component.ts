import { Component, OnInit } from '@angular/core';
import { Router, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import {DalService} from '../dal.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  DB: DalService;
  Auser;
  constructor(DBobj: DalService, private router: Router) {
    this.DB = DBobj;
  }
  onlogbtn(UN: string, PW: string) {
    if (this.DB.Login(UN, PW)) {
      this.Auser = UN;
      this.DB.logedin = true;
      this.router.navigateByUrl('/');
    } else {
      alert ('failed');
    }
  }


}
