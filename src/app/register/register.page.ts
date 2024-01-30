import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { NavController } from '@ionic/angular';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {
  registerForm: FormGroup;
  showPassword: boolean = false;
  showConfirmation: boolean = false;
  loginMessage: any;

  constructor(
    private formBuilder: FormBuilder,
    private navCtrl: NavController,
    private authService: AuthService,
    private router: Router
  ) { 
    this.registerForm = this.formBuilder.group({
      email: new FormControl(
        "",
        Validators.compose([
          Validators.required,
          Validators.pattern(
            "^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$"
          )
        ])
      ),
      password: new FormControl(
        "",
        Validators.compose([
          Validators.required,
          Validators.maxLength(20),//valididators 
          Validators.minLength(6)
        ])
      ),
      confirmation_password: new FormControl(
        "",
        Validators.compose([
          Validators.required,
          Validators.maxLength(20),//valididators 
          Validators.minLength(6)
        ])
      ),
      name: new FormControl(
        "",                                 //valididators 
        Validators.compose([
          Validators.maxLength(20)
        ])
      ),
      last_name: new FormControl(
        "",
        Validators.compose([
          Validators.maxLength(20)
        ])
      )
    })
  }
  goToHome() {
    console.log("Ir a login");  // Botón para ir de registro a login, al registrarse.
    this.router.navigate(["/login"]);
  }
  ngOnInit() {}

  togglePassword() {
    this.showPassword = !this.showPassword;
  }
  //usado para la visibilidad de las contraseñas
  toggleConfirmation() {
    this.showConfirmation = !this.showConfirmation;
  }

  register(registerData: any) {
    console.log(registerData);
    // Llama al método registerUser del servicio AuthService
    this.authService.registerUser(registerData).then((response) => {
      // Maneja la respuesta del registro exitoso

      console.log(response);
    }).catch((error) => {
      // Maneja el error del registro
      console.error(error);
    });
  }
}
