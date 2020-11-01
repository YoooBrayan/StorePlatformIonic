import { Component, OnInit } from "@angular/core";
import { Usuario } from "src/app/models/Usuario";
import { UserService } from "src/app/services/user.service";
import { Router } from "@angular/router";

@Component({
  selector: "app-signup",
  templateUrl: "./signup.page.html",
  styleUrls: ["./signup.page.scss"],
})
export class SignupPage implements OnInit {
  user: Usuario = {
    nombre: "",
    nit: 0,
    tipo_documento: 0,
    numero_documento: "",
    email: "",
  };

  error: boolean;
  success: boolean;
  constructor(private userService: UserService, private router: Router) {}

  ngOnInit() {}

  signUp() {
    console.log(this.user);
    this.userService.signUp(this.user).subscribe(
      () => {
        this.success = true;
        this.error = false;
        setTimeout(() => {
          this.router.navigateByUrl("/login");
        }, 2000);
      },
      () => {
        this.success = false;
        this.error = true;
      }
    );
  }
}
