import { NgModule } from '@angular/core';
import { SignInComponent } from './signin/signin.component';
import { ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { VMessageModule } from '../shared/components/vmessage/Vmessage.module';

@NgModule({
  declarations:[ SignInComponent ],
  imports: [
    ReactiveFormsModule,
    CommonModule,
    VMessageModule
  ]
})
export class HomeModule {


}
