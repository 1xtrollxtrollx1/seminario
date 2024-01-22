import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";

@Component({
  selector: 'app-intro',
  templateUrl: './intro.page.html',
  styleUrls: ['./intro.page.scss'],
})
export class IntroPage implements OnInit {
  
  slides = [
    {
      title : "hola",
      description: "w",                 //aca se realizo lo que dimos en la clase
      images: "www"
    }
  ];

  constructor(private router: Router) { }

  ngOnInit() {
  }

  goToHome() {
    console.log("Go back to home");                    // boton para volver a la pantalla de inicio 
    this.router.navigateByUrl("/home");
  }
}
