import { Component, OnInit } from '@angular/core';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  user = ""

  acno1 = ''
  psw1 = ''
  amnt1 = ''

  acno2 = ''
  psw2 = ''
  amnt2 = ''

  constructor(private ds: DataService) { 
    this.user=this.ds.currentUser
  }

  ngOnInit(): void {
  }
  deposit() {
    var acnum = this.acno1
    var pswrd = this.psw1
    var amnt = this.amnt1
    const result = this.ds.deposit(acnum, pswrd, amnt)
    if (result) {
      alert(`${amnt} is credited,new balance is ${result}`)
    }

  }
  withdraw() {
    var ac = this.acno2
    var ps = this.psw2
    var am = this.amnt2
    const result = this.ds.withdraw(ac, ps, am)
    if (result) {
      alert(`${am} is debited,new balance is ${result}`)
    }

  }


}
