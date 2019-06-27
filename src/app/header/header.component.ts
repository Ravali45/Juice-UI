import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
// import { GlobalService } from './../../global.service';
import { Http } from '@angular/http';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(private routes: Router) { }

  ngOnInit() {
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
}
