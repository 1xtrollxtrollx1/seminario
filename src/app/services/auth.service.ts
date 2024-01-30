import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor() { }
  
  loginUser(credentials: any){
    return new Promise((resolve, reject) => {
      if (
        credentials.email === 'jesus@gmail.com' &&
        credentials.password === '123456'
      ) { 
         resolve('Sesión correcta');
      } else {
         reject('Login incorrecto');
      }
    });
  }

  registerUser(userData: any) {
  
    return new Promise((resolve, reject) => {
      resolve('Usuario registrado exitosamente');
    });
  }
}
