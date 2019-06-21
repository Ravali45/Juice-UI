import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {GlobalService} from './../../global.service';
@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.css']
})
export class ViewComponent implements OnInit {
  alljuices:any=[];
  name:string;
  cost:number;
  id:any;
  updatedjuices:object={};
  data:object={};
  userNameError='';
  userCostError='';
  constructor(private routes:Router,private global:GlobalService) { }

  ngOnInit() {
    this.getdetails();
  }
   getdetails(){
    this.global.getJuiceDetails().subscribe((res)=>
    {
       this.alljuices=res.json();
       console.log(this.alljuices);
    })
   }
   navigate()
   {
    this.routes.navigate(['/admin']);
   }
   delete(data:object){
    let s=this.global.deletejuice(data['_id']); 
    if(s =="del"){
      setTimeout(() => {
        this.getdetails(); 
      }, 5);
    }

   }
   updatejuice(juice)
   {
    this.name=juice["name"];
    this.cost=juice["cost"];
    this.data=juice;
    
   
   }
   postjuicedetails(){
     console.log(this.name,this.cost)
    if (this.name === undefined || this.name === '' || this.name === null) {
      this.userNameError = 'Please provide juice name';
      setTimeout(() => {
          this.userNameError = '';
      }, 2000);
    } 
    else if ( this.cost === undefined || this.cost === null) {
      this.userCostError = 'Please provide cost';
      setTimeout(() => {
          this.userCostError = '';
      }, 2000);
    } 
    else{
        console.log('not working')
        document.getElementById("myModal").style.display = "block";
        this.updatedjuices={
          'name':this.name,
          'cost':this.cost,
          }
        console.log("updated"+this.updatedjuices);
        let s=this.global.updatejuicedetails(this.data['_id'],this.updatedjuices);
        console.log("up"+s);
        if(s == "del"){
          setTimeout(() => {
            this.getdetails(); 
          }, 20);
        }
    }
}
}
