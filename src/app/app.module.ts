import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
// import { GlobalService } from './global.service'
import {HomeComponent} from './home/home.component'
import { AppComponent } from './app.component';
import { AppRoutingModule } from './/app-routing.module';
import {GlobalService} from './global.service';
import {HttpModule} from '@angular/http';
import { LoginComponent } from './login/login.component';
import { HeaderComponent } from './header/header.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    HeaderComponent 
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpModule,
  ],
  providers: [GlobalService],
  bootstrap: [AppComponent]
})
export class AppModule { }
