import { Component, ViewEncapsulation, HostBinding } from "@angular/core";

import { Router } from "@angular/router";
@Component({
  selector: "social-login",
  standalone: true,
  encapsulation: ViewEncapsulation.None,
  imports: [],
  templateUrl: "./SocialLogin.component.html",
  styleUrls: ["./SocialLogin.component.css"],
})
export class SocialLogin {
  @HostBinding("style.display") display = "contents";

  constructor(private router: Router) {}

  onSubmitBackgroundClick() {
    this.router.navigate(["/"]);
  }
}
