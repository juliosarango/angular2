import { Component } from '@angular/core';

import { InputComponent } from './input/input.component';
import { TicketService } from './services/ticket.service';

import { AngularFire, FirebaseListObservable } from 'angularfire2';
import { AuthProviders, AuthMethods } from 'angularfire2';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'Hola mundo';
  mensaje = 'Esta es una prueba desde angular';

  votacion = '';
  tickets:any;

  ticketFirebase:any;

  constructor(private ticketService:TicketService,
              private af:AngularFire){
    this.tickets = ticketService.getTicket();

   
    this.ticketFirebase = af.database.list('ticket');
    /*this.ticketFirebase.push({
          'id': 1, 
          'titulo': 'no me funciona la impresora', 
          'estado': 'in progress'
      });
      this.ticketFirebase.push({
        'id': 2, 
        'titulo': 'no me funciona la computadora', 
        'estado': 'finish'
      });
      this.ticketFirebase.push({
        'id': 3, 
        'titulo': 'no me funciona el celular', 
        'estado': 'in progress'
      });
      this.ticketFirebase.push({
        'id': 4, 
        'titulo': 'no me funciona una lampara', 
        'estado': 'really'
      });

    this.af.auth.login({
      provider: AuthProviders.Google,
      method: AuthMethods.Popup
    });*/
  }
  

  votos = [
    {title: "opcion 1"},
    {title: "opcion 2"},
    {title: "opcion 3"},
    {title: "opcion 4"}
  ]

  addVoto(response:string){
     this.votacion = 'Ud eligió: '+response;
  }

  cantidad = 5;
  factor = 1;

  onSubmit(form:any):void {
    console.log("El formulario tiene "+form);
  }








  updateTicket(key):void {
    console.log(key);
    this.ticketFirebase.update(key,{estado: 'in progress'});
  }

  removeTicket(key):void {
    console.log(key);
    this.ticketFirebase.remove(key);
  }

  removeAllTicket():void {    
    this.ticketFirebase.remove();
  }
}
