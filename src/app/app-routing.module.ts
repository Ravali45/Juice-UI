import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
// import {AdminModule} from './admin/admin.module';
// import {StaffModule} from './staff/staff.module';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'admin', loadChildren:  './admin/admin.module#AdminModule'},
  { path: 'staff', loadChildren:  './staff/staff.module#StaffModule'}
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(routes),
    

  ],
  declarations: [],
  exports: [ RouterModule ]
})
export class AppRoutingModule { }
