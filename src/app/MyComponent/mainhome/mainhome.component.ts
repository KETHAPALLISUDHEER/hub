import { Component } from '@angular/core';
import { ProjectComponent } from '../project/project.component';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-mainhome',
  templateUrl: './mainhome.component.html',
  styleUrls: ['./mainhome.component.css']
})
export class MainhomeComponent {
  
Post=[
  {
    src:"/assets/images/image2.jpg",
    title:"Gravitational Force",
    desc:"This in my new projects. I have done this project related to gracitional force",
    contact:"purchase:Rs200"
  },
  {
    src:"/assets/images/image2.jpg",
    title:"Gravitational Force",
    desc:"This in my new projects. I have done this project related to gracitional force uihjsnj  uhfhc ybe cyehacb cbuy jhbc ybcjhscb acuycb hceaucbyuaeecbajcn uch caeuchac uch huehfda uihaui fcheuach ueche uec ecgehcbaeuechech uh 7eh yuehceu uh euchue cijdic uhuiecienc jh7 uiejfuie uajkcnjhciahc ychjkeacnachd7aic ",
    contact:"connect"
  },
  {
    src:"/assets/images/image2.jpg",
    title:"Gravitational Force",
    desc:"This in my new projects. I have done this project related to gracitional force jkjn  hc uhcacioj jc hhdffue chuiach c uichuachac uayachaiuch auhcianc ahciwhac",
    contact:"connect"
  },
  {
    src:"/assets/images/image2.jpg",
    title:"Gravitational Force",
    desc:"This in my new projects. I have done this project related to gracitional force jkjn  hc uhcacioj jc hhdffue chuiach c uichuachac uayachaiuch auhcianc ahciwhac",
    contact:"connect"
  },
  {
    src:"/assets/images/image2.jpg",
    title:"Gravitational Force",
    desc:"This in my new projects. I have done this project related to gracitional force jkjn  hc uhcacioj jc hhdffue chuiach c uichuachac uayachaiuch auhcianc ahciwhac",
    contact:"connect"
  },
  {
    src:"/assets/images/image2.jpg",
    title:"Gravitational Force",
    desc:"This in my new projects. I have done this project related to gracitional force jkjn  hc uhcacioj jc hhdffue chuiach c uichuachac uayachaiuch auhcianc ahciwhac",
    contact:"connect"
  }
]
totalLike=0;
like(){
this.totalLike=this.totalLike+1;
}
}
