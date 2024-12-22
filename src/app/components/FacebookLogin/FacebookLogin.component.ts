import { Component, ViewEncapsulation, HostBinding } from "@angular/core";

import { ContinueWithFacebookCentr } from "../ContinueWithFacebookCentr/ContinueWithFacebookCentr.component";
import { ContinueWithGoogleCentre } from "../ContinueWithGoogleCentre/ContinueWithGoogleCentre.component";
import { ContinueWithAppleCentre } from "../ContinueWithAppleCentre/ContinueWithAppleCentre.component";
import { Router } from "@angular/router";
@Component({
  selector: "facebook-login",
  standalone: true,
  encapsulation: ViewEncapsulation.None,
  imports: [
    ContinueWithFacebookCentr,
    ContinueWithGoogleCentre,
    ContinueWithAppleCentre,
  ],
  templateUrl: "./FacebookLogin.component.html",
  styleUrls: ["./FacebookLogin.component.css"],
})
export class FacebookLogin {
  @HostBinding("style.display") display = "contents";

  constructor(private router: Router) {}

  onNoTemRedesClick() {
    this.router.navigate(["/login-sem-rede-social"]);
  }
}
