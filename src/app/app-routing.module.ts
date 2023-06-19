import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RegisterComponent } from './MyComponent/register/register.component';
import { LoginComponent } from './MyComponent/login/login.component';
import { IdeasComponent } from './MyComponent/ideas/ideas.component';
import { HomeComponent } from './MyComponent/home/home.component';
import { MainhomeComponent } from './MyComponent/mainhome/mainhome.component';
import { PostIdeasComponent } from './MyComponent/post-ideas/post-ideas.component';

import { ProjectComponent } from './MyComponent/project/project.component';

import { AboutComponent } from './MyComponent/about/about.component';
import { NavbarAboutComponent } from './MyComponent/navbar-about/navbar-about.component';


const routes: Routes = [
  {path:"", component:HomeComponent},
  {path:"register", component:RegisterComponent},
  {path:"login",component:LoginComponent},
  {path:"ideas",
  children:[
    {path:"", component:IdeasComponent},
    {path:"postideas", component:PostIdeasComponent}
  ]
},
  {path:"mainhome", component:MainhomeComponent},

<<<<<<< HEAD
  {path:"project", component:ProjectComponent},
=======
  {path:"project", component:ProjectComponent}
>>>>>>> 76cd4e88afe22f5a324212591dd76a48e4140af6

  {path:"about", component:AboutComponent}



  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
