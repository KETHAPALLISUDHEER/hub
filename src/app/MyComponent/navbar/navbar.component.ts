import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {
 constructor(private route:Router){}
 ngOnInit(){}
 logout(){
  this.route.navigate(['./'])
 }
 
  check:boolean=true
  
  DataCollection:any='change'
  onclick(Data:any){
    console.log(Data);
      
      console.log(this.DataCollection);
      if(this.DataCollection=='change'){
        this.check=false;
      }
      else{
        this.check=true;
      }
  }
}
