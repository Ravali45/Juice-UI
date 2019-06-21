import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { AdminComponent } from './admin/admin.component';
import { ViewComponent } from './view/view.component';
import { AddComponent } from './add/add.component';
const route :Routes= [
    {
        path:'',
        component:AdminComponent
    },
    {
      path:'view',
      component:ViewComponent
    },
    {
      path:'add',
      component:AddComponent
    }
]


@NgModule({
    imports: [
      CommonModule,
      RouterModule.forChild(route),
    ],
    declarations: [],
    exports: [ RouterModule ]
  })
  export class AdminRoutingModule { }