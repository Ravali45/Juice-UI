import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StaffComponent } from './staff/staff.component';
import {StaffRoutingModule} from './staff-routing.module';
import { JuniorStaffComponent } from './junior-staff/junior-staff.component';
import { SharedModule} from '.././shared/shared/shared.module';
import { GlobalService } from '../global.service'
import { from } from 'rxjs/observable/from';
import {HttpModule} from '@angular/http';
// import { BsModalService,BsModalRef ,ModalModule} from 'ngx-bootstrap/modal';

@NgModule({
  imports: [
    StaffRoutingModule,
    HttpModule,
    CommonModule,
    // BsModalService,
    // ModalModule.forRoot()
  ],
  declarations: [StaffComponent, JuniorStaffComponent],
  providers:[GlobalService]
  
})
export class StaffModule { }
