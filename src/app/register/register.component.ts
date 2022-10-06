import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

username=''
acno=''
psw=''

  constructor(private ds:DataService,private router:Router) { }

  ngOnInit(): void {
  }
  register(){ 
    var username=this.username
    var acno=this.acno
    var psw=this.psw
    const result=this.ds.register(acno,username,psw)
    if(result){
      alert("registered")
      this.router.navigateByUrl('')
    }
    else{
      alert("already existed")
    }
    // let userDetails=this.ds.userDetails
    // alert("success")
  }

}

