import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-compra',
  templateUrl: './compra.page.html',
  styleUrls: ['./compra.page.scss'],
})
export class CompraPage {
  isButtonDisabled: boolean = false;

  constructor(private router: Router, private alertController: AlertController) { }

  async ionViewWillEnter() {
    // Restablecer la propiedad cuando la página está a punto de entrar
    this.isButtonDisabled = false;
  }

  async confirmarCompra() {
    if (!this.isButtonDisabled) {
      // Lógica para confirmar la compra
      console.log('Compra confirmada.');

      // Muestra un mensaje de agradecimiento al usuario
      const alert = await this.alertController.create({
        header: '¡Gracias por su compra!',
        message: 'Su compra ha sido confirmada exitosamente.',
        buttons: ['OK']
      });

      await alert.present();

      this.isButtonDisabled = true; // Puedes deshabilitar el botón si es necesario después de mostrar el mensaje.

      // Redirige a la página de inicio después de la confirmación
      this.router.navigate(['menu/home']);
    }
  }
}
