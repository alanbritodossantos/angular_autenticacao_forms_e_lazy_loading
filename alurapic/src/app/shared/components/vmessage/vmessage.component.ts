import { Component, Input } from '@angular/core';

@Component({
  selector: 'ap-vmessage',//seletor
  templateUrl: './vmessage.component.html'
})
export class VMessageComponent {

  @Input() text = '';
 }


