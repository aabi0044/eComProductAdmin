import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import{ RouterModule }from'@angular/router';
import{FormsModule}from "@angular/forms";
import { ToastrModule } from 'ngx-toastr';
import{AngularFireModule}from'@angular/fire';
import{AngularFirestoreModule}from'@angular/fire/firestore';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { LoginComponent } from './pages/login/login.component';
import { HeaderComponent } from './shared/header/header.component';
import { NavbarComponent } from './shared/navbar/navbar.component';
import { IndexComponent } from './pages/index/index.component';
import{EnterProductComponent}from'./pages/enter-product/enter-product.component';
import { environment } from 'src/environments/environment';
import { UpdateproductComponent } from './pages/updateproduct/updateproduct.component';


@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    LoginComponent,
    
    HeaderComponent,
    NavbarComponent,
    IndexComponent,
    EnterProductComponent,
    UpdateproductComponent
  ],
  imports: [
    BrowserModule,  
    AngularFirestoreModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    BrowserAnimationsModule,
    AppRoutingModule,
    ToastrModule.forRoot(),
    FormsModule,
    RouterModule.forRoot([
      { path: '', redirectTo: 'login', pathMatch: 'full'},
      { path: 'dashboard', 
      component:DashboardComponent,
      children:[
        {
          path: 'index',
          component:IndexComponent
        },
        {
          path:'EnterProduct/:id',
          component:EnterProductComponent
        },
        {
          path:'EnterProduct',
          component:EnterProductComponent
        },
        {
          path:'updateproduct',
          component:UpdateproductComponent
        }
      ]
    },
      { path: 'login', component:LoginComponent}
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
