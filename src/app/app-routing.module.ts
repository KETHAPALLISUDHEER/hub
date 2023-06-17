import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RegisterComponent } from './MyComponent/register/register.component';
import { LoginComponent } from './MyComponent/login/login.component';
import { IdeasComponent } from './MyComponent/ideas/ideas.component';

const routes: Routes = [
  {path:"register", component:RegisterComponent},
  {path:"login", component:LoginComponent},
  {path:"ideas", component:IdeasComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
