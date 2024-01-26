import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../services/auth.service';
import { NavController } from '@ionic/angular';
@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  loginForm: FormGroup;
  validation_messages = {
    email: [
      { type: "required", message: "El correo es obligatorio." },
      { type: "pattern", message: "El correo ingresado no es válido." }
    ],
    password: [                                    //mensajes del las validaciones
      { type: "required", message: "La contraseña es obligatoria." },
      { type: "minlength", message: "La contraseña debe tener al menos 6 caracteres." },
      { type: "maxlength", message: "La contraseña no puede tener más de 20 caracteres." }
    ]
  };
   loginMessage: any;
  constructor(
    private formBuilder: FormBuilder,
    private authService: AuthService,
    private navCtrl: NavController
    ) {
    this.loginForm = this.formBuilder.group({
      email: new FormControl(
        "",
        Validators.compose([                          //validaciones correo
          Validators.required,
          Validators.pattern(
            "^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$"
          )
        ])
      ),
      password: new FormControl(
        "",
        Validators.compose([
          Validators.required,                //validaciones contraseña
          Validators.maxLength(20),
          Validators.minLength(6)
        ])
      )
    });
  }

  ngOnInit() {}

  login() {
  if (this.loginForm.valid) {
    const loginData = this.loginForm.value;
    console.log("Datos de inicio de sesión:", loginData);
    
    this.authService.loginUser(loginData).then(res => {
      this.loginMessage = res;
      this.navCtrl.navigateForward('/intro');
    }).catch(err => {
      this.loginMessage = err;
    });
  }
}
}
