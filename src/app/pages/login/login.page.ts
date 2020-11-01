import { Component, OnInit } from "@angular/core";
import { Usuario } from "src/app/models/Usuario";
import { UserService } from "src/app/services/user.service";
import { Router } from "@angular/router";

@Component({
  selector: "app-login",
  templateUrl: "./login.page.html",
  styleUrls: ["./login.page.scss"],
})
export class LoginPage implements OnInit {
  email: string = "";
  password: string = "";
  error: boolean = false;
  islogged: boolean = true;

  user: Usuario = {
    email: "",
    password: "",
  };

  constructor(private userServive: UserService, private router: Router) {}

  ngOnInit() {}

  login() {
    console.log(this.user)
    this.error = false;
    this.userServive.authenticate(this.user).subscribe(
      (res:Usuario) => {
        this.islogged = true;
        localStorage.setItem("iduser", res.id + "");
        this.router.navigateByUrl(`/tabs/tab1/${res.id}`);
      },
      (error) => {
        console.log("error", error)
        this.error = true
      }
    );
  }

  signUp() {
    this.router.navigateByUrl("/signup");
  }
}
