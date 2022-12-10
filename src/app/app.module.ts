import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { AdminLoginComponent } from './admin-login/admin-login.component';
import { UserLoginComponent } from './user-login/user-login.component';
import { UserRegisterComponent } from './user-register/user-register.component';
import { UserProfileComponent } from './user-profile/user-profile.component';
import { AdminDashboardComponent } from './admin-dashboard/admin-dashboard.component';
import { NavBarAdminComponent } from './nav-bar-admin/nav-bar-admin.component';
import { NavBarUserComponent } from './nav-bar-user/nav-bar-user.component';
import { UserComplaintComponent } from './user-complaint/user-complaint.component';

const myRoute:Routes=[{"path":"",component:AdminLoginComponent},
                      {"path":"admindash",component:AdminDashboardComponent},
                      {"path":"user",component:UserLoginComponent},
                      {"path":"userprofile",component:UserProfileComponent},
                      {"path":"userregister",component:UserRegisterComponent},
                      {"path":"usercomplaint",component:UserComplaintComponent},
                     ]

@NgModule({
  declarations: [
    AppComponent,
    AdminLoginComponent,
    UserLoginComponent,
    UserRegisterComponent,
    UserProfileComponent,
    AdminDashboardComponent,
    NavBarAdminComponent,
    NavBarUserComponent,
    UserComplaintComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule,
    RouterModule.forRoot(myRoute),
    FormsModule,
    HttpClientModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
