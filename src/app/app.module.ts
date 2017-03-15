import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';

//input
import { InputComponent } from './input/input.component';

//pipes
import { ConversorPipe } from './pipes/convesor.pipe';

//directivas
import { GigantDirective } from './directives/gigant.directive';
import { HighLightDirective } from './directives/highlight.directive';
 
 //servicios
 import { TicketService } from './services/ticket.service';









//firebase
import { AngularFireModule, AuthProviders, AuthMethods } from 'angularfire2';

export const firebaseConfig = {
    apiKey: "AIzaSyBGIwf5zoAxKidSGQzDuWgt25AxRqHW8rI",
    authDomain: "angular-platzi-be14d.firebaseapp.com",
    databaseURL: "https://angular-platzi-be14d.firebaseio.com",
    storageBucket: "angular-platzi-be14d.appspot.com",
    messagingSenderId: "231846617958"
};

export const myFirebaseAuthConfig = {
  provider: AuthProviders.Google,
  method: AuthMethods.Popup
}

@NgModule({
  declarations: [
    AppComponent,
    InputComponent,
    ConversorPipe,
    GigantDirective,
    HighLightDirective
    
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule,

    AngularFireModule.initializeApp(firebaseConfig,myFirebaseAuthConfig)
  
  ],
  providers: [TicketService],
  bootstrap: [AppComponent]
})
export class AppModule { }
