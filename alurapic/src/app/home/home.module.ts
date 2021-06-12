import { NgModule } from '@angular/core';
import { SignInComponent } from './signin/signin.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { VMessageModule } from '../shared/components/vmessage/Vmessage.module';
import { RouterModule } from '@angular/router';
import { SignUpComponent } from './signup/signup.component';

@NgModule({
  declarations:[
    SignInComponent,
    SignUpComponent
   ],
  imports: [
    ReactiveFormsModule,
    CommonModule,
    FormsModule,
    VMessageModule,
    RouterModule
  ]
})
export class HomeModule {


}
