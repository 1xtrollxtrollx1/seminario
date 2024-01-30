import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../services/auth.service';
import { NavController } from '@ionic/angular';
import { Storage } from '@ionic/storage-angular';
import { Router } from "@angular/router";
@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  loginForm: FormGroup;
  validation_messages = {
    email: [
      { type: "required", message: "⚠️El correo es obligatorio⚠️" },
      { type: "pattern", message: "⚠️El correo ingresado no es válido⚠️" }
    ],
    password: [                                    //mensajes del las validaciones
      { type: "required", message: "⚠️La contraseña es obligatoria⚠️" },
      { type: "minlength", message: "⚠️La contraseña debe tener al menos 6 caracteres⚠️" },
      { type: "maxlength", message: "⚠️La contraseña no puede tener más de 20 caracteres⚠️" }
    ]
  };
   loginMessage: any;
  constructor(
    private formBuilder: FormBuilder,
    private authService: AuthService,
    private navCtrl: NavController,
    private storage: Storage,
    private router: Router
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
  goToHome() {
    console.log("Ir a intro");  // Botón para ir a registro
    this.router.navigate(["/register"]);
  }

  ngOnInit() {}

  login(login_data: any) {
    console.log(login_data);
  if (this.loginForm.valid) {
    this.authService.loginUser(login_data).then(res => {
      this.loginMessage = res;
      this.storage.set('userLoggedIn', true);
      this.navCtrl.navigateForward('/intro');
    }).catch(err => {
      this.loginMessage = err;
    });
  }
}
}
