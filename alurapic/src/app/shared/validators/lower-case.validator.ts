import { AbstractControl } from '@angular/forms';

export function lowerCaseValidator(control: AbstractControl){


  //se estiver em branco e não conter expressão regular .. entre!
  if(control.value.trim() && !/^[a-z0-9_\-]+$/.test(control.value)){
    return { lowerCase: true }
  }

  return null;

}
