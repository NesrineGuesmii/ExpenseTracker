import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

//import {AngularFireModule} from '@angular/fire/compat';
//import {AngularFireAuthModule} from '@angular/fire/compat/auth';
//import {AngularFirestoreModule} from '@angular/fire/compat/firestore';
//import {AngularFireDatabaseModule} from '@angular/fire/compat/database';
//import {AngularFireStorageModule} from '@angular/fire/compat/storage';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SharedModule } from 'primeng/api';
//import { environment} from 'src/environments/environment';
import { SignInComponent } from './auth/sign-in/sign-in.component';
import { SignUpComponent } from './auth/sign-up/sign-up.component';
import { ForgotPasswordComponent } from './auth/forgot-password/forgot-password.component';
import { VerifyEmailComponent } from './auth/verify-email/verify-email.component';
import { CardModule } from 'primeng/card';
import {DividerModule} from 'primeng/divider';
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
import { PasswordModule } from 'primeng/password';
import { CheckboxModule } from 'primeng/checkbox';

@NgModule({
  declarations: [
    AppComponent,
    SignInComponent,
    SignUpComponent,
    ForgotPasswordComponent,
    VerifyEmailComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    //AngularFireModule.initializeApp(environment.firebase),
    //AngularFireAuthModule,
    //AngularFirestoreModule,
    //AngularFireDatabaseModule,
    //AngularFireStorageModule,
    CardModule,
    DividerModule,
    ButtonModule,
    InputTextModule,
    PasswordModule,
    CheckboxModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
