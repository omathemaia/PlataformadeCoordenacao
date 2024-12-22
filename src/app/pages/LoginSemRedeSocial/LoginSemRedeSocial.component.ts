import { Component, ViewEncapsulation, HostBinding } from "@angular/core";

import { SocialLogin } from "../../components/SocialLogin/SocialLogin.component";
import { Router } from "@angular/router";
@Component({
  selector: "login-sem-rede-social",
  standalone: true,
  encapsulation: ViewEncapsulation.None,
  imports: [SocialLogin],
  templateUrl: "./LoginSemRedeSocial.component.html",
  styleUrls: ["./LoginSemRedeSocial.component.css"],
})
export class LoginSemRedeSocial {
  @HostBinding("style.display") display = "contents";

  constructor(private router: Router) {}

  onLoadingIconClick() {
    this.router.navigate(["/login"]);
  }
}
