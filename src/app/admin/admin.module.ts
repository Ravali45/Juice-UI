import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminComponent } from './admin/admin.component';
import { AdminRoutingModule } from './admin-routing.module'
import { FormsModule,ReactiveFormsModule } from '@angular/forms'
import {HttpModule} from '@angular/http';
import {GlobalService} from '.././global.service';
import {RouterModule} from '@angular/router';
import { ViewComponent } from './view/view.component';
import { AddComponent } from './add/add.component';
import { SearchComponent } from './search/search.component';

@NgModule({
  imports: [
    CommonModule,
    AdminRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
    RouterModule,
  ],
  declarations: [AdminComponent, ViewComponent, AddComponent, SearchComponent],
  providers:[GlobalService]
})
export class AdminModule { }
