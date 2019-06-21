import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {GlobalService} from './../../global.service';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit {

  cost:Number;
  name:string;
  newjuices:object={};
  flag:boolean=true;
  userNameError='';
  userCostError='';
  constructor(private routes:Router,private global:GlobalService) { }

  ngOnInit() {
    if(this.name!=null && this.cost!=undefined){
      this.flag=false;
      console.log(this.flag);
    }
  }
  postjuicedetails(){
    if (this.name === undefined || this.name === '' || this.name == null) {
      this.userNameError = 'Please provide your name';
      // this.contactLoader = false;
      // document.getElementById('name').style.border = '1px solid #FD4545';
      setTimeout(() => {
          this.userNameError = '';
      }, 2000);
  } 
  else if (this.cost === undefined || this.cost == null) {
    this.userCostError = 'Please provide cost';
    // this.contactLoader = false;
    // document.getElementById('cost').style.border = '1px solid #FD4545';
    setTimeout(() => {
        this.userCostError = '';
    }, 2000);
} 
  else{
    this.newjuices = {
      'name':this.name,
      'cost':this.cost
    }
  
    if(this.newjuices['name']!=null && this.newjuices['cost'] != null){
      this.global.insertjuicedetails(this.newjuices);
      console.log('inserted successfully');
    }
    console.log(this.newjuices);
   }
  }
   navigate()
   {
    this.routes.navigate(['/admin']);
   }
}
