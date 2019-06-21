import { Component, OnInit,Input } from '@angular/core';
import {AdminComponent} from './../admin/admin.component'
@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  @Input() admin:AdminComponent 
  constructor() { }
  
  ngOnInit() {
  }

}
