import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from '../services/data.service';

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
  // userDetails: any = {
  //   1000: { acno: 1000, username: "amal", password: 123, balance: 100000 },
  //   1001: { acno: 1001, username: "rashi", password: 123, balance: 200000 },
  //   1002: { acno: 1002, username: "ashwin", password: 123, balance: 300000 },
  //   1003: { acno: 1003, username: "abhiram", password: 123, balance: 150000 }

  // }

  constructor(private router:Router,private ds:DataService) { }

  ngOnInit(): void {
  }
  login() {
    var acnoo = this.acno
    var psww= this.psw

  const result=  this.ds.login(acnoo,psww)
  if(result){
    alert("login success")
    this.router.navigateByUrl('dashboard')
  }

  }
  // login(a:any,b:any) {

  //   console.log(a.value);
  //   console.log(b.value);
    
    
  //   var acno = a.value
  //   var psw= b.value
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



  // acnoChange(event: any) {
  //   this.acno = (event.target.value)
  //   console.log(this.acno);

  // }
  // pswChange(event: any) {
  //   this.psw = (event.target.value)
  //   console.log(this.psw);

  // }

}




