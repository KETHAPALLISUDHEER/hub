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
=======

<<<<<<< HEAD
import { ProjectComponent } from './MyComponent/project/project.component';

import { AboutComponent } from './MyComponent/about/about.component';
import { NavbarAboutComponent } from './MyComponent/navbar-about/navbar-about.component';

=======
import { AboutComponent } from './MyComponent/about/about.component';
import { NavbarAboutComponent } from './MyComponent/navbar-about/navbar-about.component';

>>>>>>> e89ca2421e6775d0fc0973e835ba815e06bc078b
import { ProjectComponent } from './MyComponent/project/project.component';

import { AboutComponent } from './MyComponent/about/about.component';
import { NavbarAboutComponent } from './MyComponent/navbar-about/navbar-about.component';
import { FaqComponent } from './MyComponent/faq/faq.component';

>>>>>>> 76cd4e88afe22f5a324212591dd76a48e4140af6



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

    SudheerComponent,
    AboutComponent,
    NavbarAboutComponent,
    FooterComponent,

    FooterComponent,
    ShreeComponent,

    SudheerComponent,
    ProjectComponent,

<<<<<<< HEAD
    SudheerComponent,
      FaqComponent
=======
    SudheerComponent
<<<<<<< HEAD

=======
>>>>>>> 76cd4e88afe22f5a324212591dd76a48e4140af6
>>>>>>> e89ca2421e6775d0fc0973e835ba815e06bc078b

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
