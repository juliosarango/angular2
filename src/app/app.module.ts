import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
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
    HttpModule
  ],
  providers: [TicketService],
  bootstrap: [AppComponent]
})
export class AppModule { }
