import { Injectable } from '@angular/core';
import * as dataEvents from "./events.json";
@Injectable({
  providedIn: 'root'
})
export class EventsService {

  urlServer ="http://190.131.209.106";

  constructor() { }

  getEvents(){
    return fetch(`${this.urlServer}/events`).then(
      Response => Response.json()
    );
  }

  getLocalEvents(){
    return dataEvents;
  }
  //obtener categorias "get hacia /categiries "tarea
  //obtener 1 categoria" get hacia /categorias/:id"
}
