import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  aim = 'Your perfect banking partner...'
  acnt = 'Account No'
  acno = ''
  psw = ''
  userDetails: any = {
    1000: { acno: 1000, username: "amal", password: 123, balance: 100000 },
    1001: { acno: 1001, username: "rashi", password: 123, balance: 200000 },
    1002: { acno: 1002, username: "ashwin", password: 123, balance: 300000 },
    1003: { acno: 1003, username: "abhiram", password: 123, balance: 150000 }

  }

  constructor() { }

  ngOnInit(): void {
  }
  // login() {
  //   var acno = this.acno
  //   var psw= this.psw
  //   let userDetails = this.userDetails
  //   if (acno in userDetails) {
  //     if (psw == userDetails[acno]['password']) {
  //       alert('login successfull')
  //     }
  //     else {
  //       alert('incorrect psw')
  //     }
  //   }
  //   else {
  //     alert('incorrect ac no or not exist')
  //   }
  // }
  login(a:any,b:any) {

    console.log(a.value);
    console.log(b.value);
    
    
    var acno = a.value
    var psw= b.value
    let userDetails = this.userDetails
    if (acno in userDetails) {
      if (psw == userDetails[acno]['password']) {
        alert('login successfull')
      }
      else {
        alert('incorrect psw')
      }
    }
    else {
      alert('incorrect ac no or not exist')
    }
  }

  // acnoChange(event: any) {
  //   this.acno = (event.target.value)
  //   console.log(this.acno);

  // }
  // pswChange(event: any) {
  //   this.psw = (event.target.value)
  //   console.log(this.psw);

  // }

}




