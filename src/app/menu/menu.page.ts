import { Component, OnInit } from '@angular/core';
import { MenuController } from '@ionic/angular';
import { NavController } from '@ionic/angular';
@Component({
  selector: 'app-menu',
  templateUrl: './menu.page.html',
  styleUrls: ['./menu.page.scss'],
})
export class MenuPage implements OnInit {

  constructor(
    private menu: MenuController,
    private navCtrl: NavController

  ) { }
  ngOnInit() {
  }
  closeMenu(){
    console.log("cerrar menu")
    this.menu.close();
  }
logout1(){
  this.navCtrl.navigateRoot("/compra")
}
logout2(){
  this.navCtrl.navigateRoot("/intro")

}
logout3(){
  this.navCtrl.navigateRoot("/login")

}
}
