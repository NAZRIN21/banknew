import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  currentUser: any
  // accountnumberne storeyan vendi useyuna vae
  currentAcno: any

  userDetails: any = {
    // transactions nadathan vendi empty array create cheydu kure transactions ullad kond array aki
    1000: { acno: 1000, username: "amal", password: 123, balance: 100000, transactions: [] },
    1001: { acno: 1001, username: "rashi", password: 123, balance: 200000, transactions: [] },
    1002: { acno: 1002, username: "ashwin", password: 123, balance: 300000, transactions: [] },
    1003: { acno: 1003, username: "abhiram", password: 123, balance: 150000, transactions: [] }

  }

  constructor() { }
  register(acno: any, username: any, password: any) {
    let userDetails = this.userDetails
    if (acno in userDetails) {
      return false
      // false/true-- already undo illayon check cheyunadhan
    }
    else {
      userDetails[acno] = { acno, username, password, balance: 0 }
      console.log(userDetails);

      return true
    }
  }
  login(acnoo: any, psww: any) {
    let userDetails = this.userDetails
    if (acnoo in userDetails) {
      if (psww == userDetails[acnoo]['password']) {
        this.currentUser = userDetails[acnoo]['username']
        this.currentAcno = acnoo
        return true
      }
      else {
        alert('incorrect psw')
        return false
      }
    }
    else {
      alert('incorrect ac no or not exist')

      return false
    }
  }

  deposit(acnum: any, pswrd: any, amnt: any) {
    let userDetails = this.userDetails
    // parseInt(amnt) it is used to coverting the string to num
    var amount = parseInt(amnt)
    if (acnum in userDetails) {
      if (pswrd == userDetails[acnum]['password']) {
        userDetails[acnum]['balance'] += amount
        // arraylek object ayt  add cheyen using with push
        userDetails[acnum]['transactions'].push({ type: 'CREDIT', amount })
        return userDetails[acnum]['balance']
      }
      else {
        alert("incorrect psw")
      }
    }
    else {
      alert("user not exist")
      return false
    }
  }
  withdraw(ac: any, ps: any, am: any) {
    let userDetails = this.userDetails
    var amount = parseInt(am)
    if (ac in userDetails) {
      if (ps == userDetails[ac]['password']) {
        if (userDetails[ac]['balance'] >= am) {
          userDetails[ac]['balance'] -= amount
          userDetails[ac]['transactions'].push({ type: 'DEBIT', amount })

          return userDetails[ac]['balance']

        }
        else {
          alert("insufficient balance")
        }
      }
      else {
        alert("incoorrect psw")
      }
    }
    else {
      alert("user not exist")
      return false

    }
  }

  getTransaction(acno: any) {
    return this.userDetails[acno]['transactions']
  }


}
