import { Component, OnInit, ComponentFactoryResolver } from '@angular/core';
import { Router } from '@angular/router';
import { GlobalService } from './../../global.service';
import { Http } from '@angular/http';
@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {
  cost:number=0;
  all:any;
  allopt:number=-1;
  paropt:number=-1;
  count:number=0;
  name: string;
  serachdel=[];
  newjuices: object = {};
  flag: boolean = false;
  myDateValue: Date;
  juicedetails: any = [];
  fromdate: Date;
  todate: Date;
  selectedoption: string=null;
  data: object;
  searchedetails: any = [];
  fdate: string;
  tdate: string;
  date: string;
  finalquantity: number = 0;
  finalcost: number = 0;
  //total cost quantity based on name and date 
  finalsearch: any = []
  dateobj: string;
  final: Object = {};
  // total cost,quantity for all beverages and specefic beverage b/w dates 
  allbever:any=[];
  constructor(private routes: Router, private global: GlobalService, private http: Http) {

  }

  ngOnInit() {
    console.log(this.selectedoption);
    this.myDateValue = new Date();
    this.global.getJuiceDetails().subscribe((res) => {
      this.juicedetails = res.json();

    });
    console.log("juicedetails" + JSON.stringify(this.juicedetails));
  }
  onDateChange(newDate: Date) {
    console.log(newDate);
  }
  navigate() {
    this.routes.navigate(['/']);
  }
  navigateview() {
    this.routes.navigate(['admin/view']);
  }
  navigateadd() {
    this.routes.navigate(['admin/add']);
  }
  search() {
    this.allopt=-1;
    this.paropt=-1;
    this.serachdel=[];
    this.finalsearch = [];
    this.allbever=[];
    this.searchedetails=[];
    this.final = {};
    this.finalquantity = 0;
    this.finalcost = 0;
    this.count=0
    this.fdate = this.getTodaysDate(new Date(this.fromdate));
    this.tdate = this.getTodaysDate(new Date(this.todate));

    if (this.selectedoption == 'All') {
      //console.log(this.fdate,this.tdate,this.selectedoption);
      this.global.findallbill(this.fdate, this.tdate).subscribe((res) => {
        // document.getElementById("notall").style.display = "block";
        this.searchedetails = res.json();
        if(this.searchedetails.length==0)
        {
            this.count=0;
            this.allopt=0;

        }
        for (let i = 0; i < this.searchedetails.length; i++) {
             this.allopt=this.allopt+1;
          for (let k = i + 1; k < this.searchedetails.length; k++) {
            this.count=this.count+1;

            if (this.searchedetails[i]["date"] == this.searchedetails[k]["date"]) {
              for (let j = 0; j < this.searchedetails[k]["bill"].length; j++) {
                this.searchedetails[i]["bill"].push(this.searchedetails[k]["bill"][j])

              }
              this.searchedetails.splice(k, 1);
              k = k - 1;
            }

          }
        }

        // console.log("before adding" + JSON.stringify(this.searchedetails));
        for (let i = 0; i < this.searchedetails.length; i++) {
          for (let j = 0; j < this.searchedetails[i]['bill'].length; j++) {
            for (let k = j + 1; k < this.searchedetails[i]['bill'].length; k++) {
              // console.log(this.searchedetails[i]['bill'][j]['name'])
              if (this.searchedetails[i]['bill'][j]['name'] == this.searchedetails[i]['bill'][k]['name']) {
                this.searchedetails[i]['bill'][j]['quantity'] += this.searchedetails[i]['bill'][k]['quantity'];
                this.searchedetails[i]['bill'][j]['cost'] += this.searchedetails[i]['bill'][k]['cost'];
                this.searchedetails[i]['bill'].splice(k, 1);
                // console.log(JSON.stringify("nav"+this.searchedetails))
                k = k - 1;
              }
            }
          }
        }

        //  console.log("after adding" + JSON.stringify(this.searchedetails));
         for(let i=0;i<this.searchedetails.length;i++)
         {
             this.serachdel.push(this.searchedetails[i]);
 
 
         }
        //  console.log("vv"+JSON.stringify(this.searchedetails));
        for(let b=0;b<this.searchedetails.length;b++)
        {
            for(let g=0;g<this.searchedetails[b]["bill"].length;g++)
            {
                this.allbever.push(this.searchedetails[b]["bill"][g]);
            }


        }
        // console.log("before adding based on date" + JSON.stringify(this.allbever));
       
        for(let n=0;n<this.allbever.length;n++)
        {
          for(let z=n+1;z<this.allbever.length;z++){
            // console.log(this.allbever)
          if(this.allbever[n]['name']==this.allbever[z]['name']){

            this.allbever[n]['cost']+=this.allbever[z]['cost'];
            this.allbever[n]['quantity']+=this.allbever[z]['quantity'];
            this.allbever.splice(z,1);
            z=z-1;
          }
          }
        }
        // console.log("after adding based on date" + JSON.stringify(this.allbever));

        // console.log("vfdrv"+JSON.stringify(this.searchedetails));

        if(this.count>0)
        {
        console.log("based on name and date"+JSON.stringify(this.searchedetails));
        console.log("blw all dates"+JSON.stringify(this.allbever));
        }
        else
        {
          console.log("items not found between selcted dates")

        }
      })
    }
    else {
      this.flag=true;
      if(this.searchedetails.length==0)
      {
          this.count=0;
          this.paropt=0;
      }      // document.getElementById("all").style.display = "block";
      this.global.findbill(this.fdate, this.tdate, this.selectedoption).subscribe((res) => {
        // document.getElementById("all").style.display = "block";
        this.searchedetails = res.json();
        //console.log(this.searchedetails);
        for (let i = 0; i < this.searchedetails.length; i++) {
          this.paropt=this.paropt+1;
          this.dateobj = this.searchedetails[i]["date"]

          //console.log(this.searchedetails[i]["bill"]);
          for (let j = 0; j < this.searchedetails[i]["bill"].length; j++) {
            if (this.searchedetails[i]["bill"][j]["name"] == this.selectedoption) {

              this.searchedetails[i]["bill"][j]["date"] = this.dateobj;
              this.finalsearch.push(this.searchedetails[i]["bill"][j]);
              this.count=this.count+1;

            }

          }
        }
        // console.log("finalsearch" + JSON.stringify(this.finalsearch))


        for (let m = 0; m < this.finalsearch.length; m++) {
          //console.log(this.finalsearch[m]["date"])
          for (let l = m + 1; l < this.finalsearch.length; l++) {
            //console.log(this.finalsearch[l]["date"])
            if (this.finalsearch[m]["date"] == this.finalsearch[l]["date"]) {
              //  console.log(this.finalsearch[m]["date"])
              //  console.log(this.finalsearch[l]["date"])
              //console.log("before splice"+JSON.stringify(this.finalsearch))
              this.finalsearch[m]["cost"] += this.finalsearch[l]["cost"]
              this.finalsearch[m]["quantity"] += this.finalsearch[l]["quantity"]
              //this.finalsearch.pop(this.finalsearch[l]);
              this.finalsearch.splice(l, 1);
              // console.log("after splice"+JSON.stringify(this.finalsearch));
              l = l - 1;
            }

          }

        }
        //console.log(this.finalsearch);
        for (let k = 0; k < this.finalsearch.length; k++) {
          this.finalquantity += this.finalsearch[k]['quantity'];
          //console.log(this.finalquantity);
          this.finalcost += this.finalsearch[k]['cost'];
          //console.log(this.finalcost);
          this.final["name"] = this.selectedoption;
          this.final["TotalQuantity"] = this.finalquantity;
          this.final["TotalCost"] = this.finalcost;

        }
        this.allbever.push(this.final);
        //console.log("final"+JSON.stringify(this.final));
        if(this.count>0)
        {
        console.log("based on name and date" + JSON.stringify(this.finalsearch))
        console.log("blw all dates"+JSON.stringify(this.allbever));
        }
        else
        {
          console.log(" item not found between selected dates");

        }
      })
    }
  }

  getTodaysDate(date: Date) {
    let month = String(date.getMonth() + 1);
    let day = String(date.getDate())
    if (month.length < 2) month = '0' + month;
    if (day.length < 2) day = '0' + day;
    this.date = date.getFullYear() + '-' + month + '-' + day;
    // this.date = date.getFullYear() + '-' + month + '-' + day + ' ' + date.getHours() + ':' + date.getMinutes() + ':' + date.getSeconds();
    return this.date;
  }
  //get todays date in yyyy/mm/dd



}
