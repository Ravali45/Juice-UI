import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router'
import { GlobalService } from './../global.service'

// import from 'rxjs/observable/from';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  alljuices:any=[];

  constructor(private global:GlobalService,private routes:Router) { }

  ngOnInit() {
    this.global.getJuiceDetails().subscribe((res)=>
    {
       this.alljuices=res.json();
       console.log(this.alljuices);
    })
  }
}
