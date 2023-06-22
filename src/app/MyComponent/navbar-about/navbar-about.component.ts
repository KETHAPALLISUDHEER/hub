import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar-about',
  templateUrl: './navbar-about.component.html',
  styleUrls: ['./navbar-about.component.css']
})
export class NavbarAboutComponent {
  public logo= ""
public  img='../assets/images/logoremove.png'
constructor(private app:Router){}
ngOnInit()
 {

 }
// logout()
//  {
//    this.app.navigateByUrl("login")
//  }
}
