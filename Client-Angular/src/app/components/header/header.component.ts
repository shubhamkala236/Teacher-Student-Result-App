import { Component,OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent{
  constructor(private auth:AuthService){}

  isLoggedIn()
  {
    return this.auth.isLoggedIn();
  }
  
  logOut()
  {
    this.auth.logout();
  }

}
