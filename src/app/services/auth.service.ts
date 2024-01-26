import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor() { }
  
  loginUser(credential: any){
    return new Promise((resolve, reject) => {
      if (
        credential.email === 'jesus@gmail.com' &&
        credential.password === '123456'
      ) {
         resolve('Sesión correcta');
      } else {
         reject('Login incorrecto');
      }
    });
  }
}

