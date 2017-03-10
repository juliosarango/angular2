import { Injectable } from '@angular/core';

import { TICKETS } from './mocks/tickets.mock';

@Injectable()
export class TicketService {
    miVariableTickerGloabal = "soy una variable global";

    getTicket() {
        return TICKETS;
    }

    getVariableGlobal():string {
        return this.miVariableTickerGloabal;
    }
}