import { Injectable } from '@angular/core';
import * as dataEvents from "./events.json";

@Injectable({
  providedIn: 'root'
})
export class EventsService {

  urlServer = "http://190.131.209.106";

  constructor() { }

  getEvents() {
    return fetch(`${this.urlServer}/events`).then(
      Response => Response.json()
    );
  }

  getLocalEvents() {
    return dataEvents;
  }

  // Obtener todas las categorías
  getCategories() {
    return fetch(`${this.urlServer}/categories`).then(
      Response => Response.json()
    );
  }

  // Obtener una categoría por su ID
  getCategoryById(categoryId: number) {
    return fetch(`${this.urlServer}/categories/${categoryId}`).then(
      Response => Response.json()
    );
  }
}
