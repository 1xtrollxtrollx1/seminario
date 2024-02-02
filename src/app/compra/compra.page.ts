import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-compra',
  templateUrl: './compra.page.html',
  styleUrls: ['./compra.page.scss'],
})
export class CompraPage implements OnInit {
  quiereCombo: boolean = false;
  combosSeleccionados: any = {};

  constructor(private router: Router) { }

  ngOnInit() {
  }

  confirmarCompra() {
    // Lógica para confirmar la compra
    console.log('Compra confirmada. ');
    console.log('Combos seleccionados:', this.combosSeleccionados);
  }

  goToHome() {
    console.log("Go back to home");
    this.router.navigate(["menu/home"]);
  }

  toggleCombo() {
    if (!this.quiereCombo) {
      // Reinicia la selección de combos si el usuario desactiva la opción
      this.combosSeleccionados = {};
    }
  }
}
