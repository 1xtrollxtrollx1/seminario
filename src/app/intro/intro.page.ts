import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";
import { Storage } from '@ionic/storage';  // Importa el servicio Storage desde Ionic

@Component({
  selector: 'app-intro',
  templateUrl: './intro.page.html',
  styleUrls: ['./intro.page.scss'],
})
export class IntroPage implements OnInit {
  
  slides = [
    {
      title: "hola",
      description: "w",     // aca se realizo lo que dimos en la clase
      images: "www"
    }
  ];

  constructor(
    private router: Router,
    private storage: Storage  // Inyecta el servicio Storage
  ) { }

  async ionViewDidEnter() {
    console.log("Ya entré y observé la intro");
    
    // Verifica si la introducción ya ha sido mostrada previamente
    const mostreLaIntro = await this.storage.get('mostreLaIntro');

    if (!mostreLaIntro) {
      // Vamos a guardar en el storage que ya vio la intro
      await this.storage.set('mostreLaIntro', true);

      // Después de guardar, navegamos a la página de inicio
      this.router.navigateByUrl("menu/home");
    }
  }

  goToHome() {
    console.log("Go back to home");  // Botón para volver a la pantalla de inicio 
    this.router.navigate(["menu/home"]);
  }

  ngOnInit() {
    // No es necesario  checkIntroStatus aquí, ya que se maneja en ionViewDidEnter
  }
}
