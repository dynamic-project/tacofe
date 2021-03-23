import { DemoMaterialModule } from './DemoMaterialModule.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './home/home.component';
import { RecentTacosComponent } from './recents/recents.component';
import { ApiService } from './api/ApiService';
import { RecentTacosService } from './recents/RecentTacosService';
import { SpecialsComponent } from './specials/specials.component';

import { routes } from './app.routes';
import { CloudTitleComponent } from './cloud-title/cloudtitle.component';
import { NonWrapsPipe } from './recents/NonWrapsPipe';
import { WrapsPipe } from './recents/WrapsPipe';
import { DesignComponent } from './design/design.component';
import { GroupBoxComponent } from './group-box/groupbox.component';
import { BigButtonComponent } from './big-button/bigbutton.component';
import { LittleButtonComponent } from './little-button/littlebutton.component';
import { LocationsComponent } from './locations/locations.component';
import { HttpClientModule } from '@angular/common/http';

import { CartComponent } from './cart/cart.component';
import { CartService } from './cart/cart-service';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import {MatDividerModule} from '@angular/material/divider';
import { LoginComponent } from './login/login.component';
import {MatCardModule} from '@angular/material/card';
import {MatButtonModule} from '@angular/material/button';
import {MatFormFieldModule} from '@angular/material/form-field';
import { RegisterComponent } from './register/register.component';

@NgModule({
  declarations: [		
    AppComponent,
    HeaderComponent,
    HomeComponent,
    LoginComponent,
    FooterComponent,
    RecentTacosComponent,
    SpecialsComponent,
    LocationsComponent,
    CloudTitleComponent,
    DesignComponent,
    CartComponent,
    NonWrapsPipe,
    WrapsPipe,
    GroupBoxComponent,
    BigButtonComponent,
    LittleButtonComponent,
      RegisterComponent
   ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot(routes),
    BrowserAnimationsModule,
    MatToolbarModule,
    MatIconModule,
    MatDividerModule,
    MatCardModule,
    MatButtonModule,
    MatFormFieldModule,
    DemoMaterialModule
  ],
  providers: [
    ApiService,
    CartService,
    RecentTacosService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
