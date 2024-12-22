import { Component, ViewEncapsulation, HostBinding } from "@angular/core";

import { Router } from "@angular/router";
@Component({
  selector: "continue-with-apple-centre",
  standalone: true,
  encapsulation: ViewEncapsulation.None,
  imports: [],
  templateUrl: "./ContinueWithAppleCentre.component.html",
  styleUrls: ["./ContinueWithAppleCentre.component.css"],
})
export class ContinueWithAppleCentre {
  @HostBinding("style.display") display = "contents";

  constructor(private router: Router) {}

  onContinueWithAppleCentreClick() {
    this.router.navigate(["/"]);
  }
}
