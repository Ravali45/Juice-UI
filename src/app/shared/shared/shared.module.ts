import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ShcompComponent } from './shcomp/shcomp.component';
import { RouterModule } from '@angular/router';
import {FormsModule,ReactiveFormsModule} from '@angular/forms'
import {Http,Headers,Response} from '@angular/http';
import {Observable} from 'rxjs';
import {map,filter} from 'rxjs/operators';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [ShcompComponent],
  exports:[
    ShcompComponent,
    CommonModule,
    RouterModule,
    FormsModule,
    ReactiveFormsModule,
    Http,
    Headers,
    Response,
    Observable
  ]
})
export class SharedModule { }
