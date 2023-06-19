import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './MyComponent/navbar/navbar.component';
import { RegisterComponent } from './MyComponent/register/register.component';
import { LoginComponent } from './MyComponent/login/login.component';
import { IdeasComponent } from './MyComponent/ideas/ideas.component';
import { HomeComponent } from './MyComponent/home/home.component';
import { MainhomeComponent } from './MyComponent/mainhome/mainhome.component';
import { PostIdeasComponent } from './MyComponent/post-ideas/post-ideas.component';
<<<<<<< HEAD
import { FooterComponent } from './MyComponent/footer/footer.component';
import { ShreeComponent } from './MyComponent/shree/shree.component';
=======
import { SudheerComponent } from './MyComponent/sudheer/sudheer.component';
>>>>>>> 077160abad124f96740a52862cb2be8fca86ac19


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    RegisterComponent,
    LoginComponent,
    IdeasComponent,
    HomeComponent,
    MainhomeComponent,
    PostIdeasComponent,
<<<<<<< HEAD
    FooterComponent,
    ShreeComponent
=======
    SudheerComponent
>>>>>>> 077160abad124f96740a52862cb2be8fca86ac19
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
