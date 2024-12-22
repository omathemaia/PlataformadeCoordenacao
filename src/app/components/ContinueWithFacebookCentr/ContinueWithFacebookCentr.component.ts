import { Component, ViewEncapsulation, HostBinding } from "@angular/core";

import { Router } from "@angular/router";
@Component({
  selector: "continue-with-facebook-centr",
  standalone: true,
  encapsulation: ViewEncapsulation.None,
  imports: [],
  templateUrl: "./ContinueWithFacebookCentr.component.html",
  styleUrls: ["./ContinueWithFacebookCentr.component.css"],
})
export class ContinueWithFacebookCentr {
  @HostBinding("style.display") display = "contents";

  constructor(private router: Router) {}

  onContinueWithFacebookCentrClick() {
    this.router.navigate(["/"]);
  }
}
