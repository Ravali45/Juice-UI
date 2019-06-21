import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { StaffComponent } from './staff/staff.component';
import { JuniorStaffComponent } from './junior-staff/junior-staff.component';
const routes :Routes= [
    {
        path:'',
        component:StaffComponent
    },
    {
      path:'junior',
      component:JuniorStaffComponent
  }
]


@NgModule({
    imports: [
      CommonModule,
      RouterModule.forChild(routes),
    ],
    declarations: [],
    exports: [ RouterModule ]
  })
  export class StaffRoutingModule { }