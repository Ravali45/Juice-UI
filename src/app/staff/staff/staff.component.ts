import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { containerStart } from '@angular/core/src/render3/instructions';
import {GlobalService} from './../../global.service'
import {Response} from '@angular/http';
import { elementAt } from 'rxjs/operators';

@Component({
  selector: 'app-staff',
  templateUrl: './staff.component.html',
  styleUrls: ['./staff.component.css']
})
export class StaffComponent implements OnInit {
  billobj:Object={};
  quantity:number=0;
  cost:number=0;
  cflag:number=0;
  juiceDetails:any=[];
  juiceDetails_one:any=[];
  juice_name:string;
  total_cost:number=0;
  date:string;
  dataobj:Object={};
  parsedate:string;
  constructor(private routes:Router,private global:GlobalService) { }

  ngOnInit() {

      this.global.getJuiceDetails().subscribe((resp:Response)=>
      {

        this.juiceDetails=resp.json();
        console.log(JSON.stringify(this.juiceDetails))
        for(let i=0;i<this.juiceDetails.length;i++){
          console.log(this.juiceDetails[i]);
          this.juiceDetails[i]["quantity"]=0;
          this.juiceDetails[i]["total"]=0;
        }
      })
     
  }
  navigate(){
    this.routes.navigate(['/']);
    }
    click_plus(juice:Object){
      juice["quantity"]=juice["quantity"]+1
      this.quantity_cost(juice);
    }
    click_minus(juice:Object){
      if(juice["quantity"]>0)
      {
        juice["quantity"]=juice["quantity"]-1
        this.quantity_cost(juice);
       }
    }
    quantity_cost(juice:Object){
      let cost = juice["cost"];
      juice["total"]=juice["quantity"]*cost; 
    }
    submit(){
      this.juiceDetails_one=[];
      var count=0;
      
      for(let i=0;i<this.juiceDetails.length;i++){

        if(this.juiceDetails[i]["quantity"]!=0){
          count++;
          this.billobj={
            "name":this.juiceDetails[i]["name"],
            "quantity":this.juiceDetails[i]["quantity"],
            "cost":this.juiceDetails[i]["total"]
          }
          this.juiceDetails_one.push(this.billobj);
          this.total_cost = this.juiceDetails[i]['total']+this.total_cost;
         
        }
      }
      //console.log(this.total_cost);
      //console.log(this.juiceDetails_one);
      this.getTodaysDate();
      //this.date=new Date()+"";
      //console.log(this.date);
      this.dataobj={
        "bill":this.juiceDetails_one,
        "date":this.date,
        "total_cost":this.total_cost
      }
      if(count>0)
      {
      this.global.insertbill(this.dataobj);
      }
      else if(count==0)
      {
        window.alert("choose atleast one")

      }
      //console.log(this.date.split(' ')[0]);
      this.global.getJuiceDetails().subscribe((resp:Response)=>
      {

        this.juiceDetails=resp.json();
        console.log(JSON.stringify(this.juiceDetails))
        for(let i=0;i<this.juiceDetails.length;i++){
          console.log(this.juiceDetails[i]);
          this.juiceDetails[i]["quantity"]=0;
          this.juiceDetails[i]["total"]=0;
        }
      })
    }
    reload(){
      window.location.reload();
    }

    //get todays date in yyyy/mm/dd
    getTodaysDate() {
      let date = new Date();
      let month = String(date.getMonth() + 1);
      let day = String(date.getDate())
      if (month.length < 2) month = '0' + month;
      if (day.length < 2) day = '0' + day;
      this.date = date.getFullYear() + '-' + month + '-' + day;
      // this.date = date.getFullYear() + '-' + month + '-' + day + ' ' + date.getHours() + ':' + date.getMinutes() + ':' + date.getSeconds();
      return this.date;
      }

      changeDateFormat(passedDate) {
        let tempdate;
        let data;
        let todaysDate = new Date();
        console.log(passedDate);
        if (passedDate === todaysDate) {
        return passedDate;
        }
        else {
        tempdate = String(passedDate.toLocaleDateString(('zh-Hans-CN')));
        data = tempdate.split("/");
        
        if (data[1].length < 2) data[1] = '0' + data[1];
        if (data[2].length < 2) data[2] = '0' + data[2];
        tempdate = data[0] + '-' + data[1] + '-' + data[2];
        return tempdate;
        }
        }



























    
}
