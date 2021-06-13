import { NgModule } from '@angular/core';
import { SignInComponent } from './signin/signin.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { VMessageModule } from '../shared/components/vmessage/Vmessage.module';
import { RouterModule } from '@angular/router';
import { SignUpComponent } from './signup/signup.component';
import { HomeComponent } from './home.component';
import { HomeRoutingModule } from './home.routing.module';

@NgModule({
  declarations:[
    SignInComponent,
    SignUpComponent,
    HomeComponent
   ],
  imports: [
    ReactiveFormsModule,
    CommonModule,
    FormsModule,
    VMessageModule,
    RouterModule,
    HomeRoutingModule
  ]
})
export class HomeModule {


}
