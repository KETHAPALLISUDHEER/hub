import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './MyComponent/navbar/navbar.component';
import { RegisterComponent } from './MyComponent/register/register.component';
import { LoginComponent } from './MyComponent/login/login.component';
import { IdeasComponent } from './MyComponent/ideas/ideas.component';
import { HomeComponent } from './MyComponent/home/home.component';
import { MainhomeComponent } from './MyComponent/mainhome/mainhome.component';
import { PostIdeasComponent } from './MyComponent/post-ideas/post-ideas.component';

import { FooterComponent } from './MyComponent/footer/footer.component';
import { ShreeComponent } from './MyComponent/shree/shree.component';

import { SudheerComponent } from './MyComponent/sudheer/sudheer.component';
<<<<<<< HEAD
import { AboutComponent } from './MyComponent/about/about.component';
import { NavbarAboutComponent } from './MyComponent/navbar-about/navbar-about.component';
=======
>>>>>>> a21b79ed05532535d4309981e516c07f064d8bf8



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
    SudheerComponent,
    AboutComponent,
    NavbarAboutComponent,
    FooterComponent
=======

    FooterComponent,
    ShreeComponent,
    SudheerComponent
>>>>>>> a21b79ed05532535d4309981e516c07f064d8bf8

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
