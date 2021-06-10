import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from '../user/user';
import { UserService } from '../user/user.service';

@Component({
  selector:'ap-header',
  templateUrl: './header.component.html'
})
export class HeaderComponent {

  // a variavel com tqm "$" na frente significa dizer que esse valor recebe um observable
  user$: Observable<User>;

  constructor(userService: UserService) {

    this.user$ = userService.getUser();
  }

}
