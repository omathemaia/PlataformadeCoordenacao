import { Component, ViewEncapsulation, HostBinding } from "@angular/core";

import { Router } from "@angular/router";
@Component({
  selector: "continue-with-google-centre",
  standalone: true,
  encapsulation: ViewEncapsulation.None,
  imports: [],
  templateUrl: "./ContinueWithGoogleCentre.component.html",
  styleUrls: ["./ContinueWithGoogleCentre.component.css"],
})
export class ContinueWithGoogleCentre {
  @HostBinding("style.display") display = "contents";

  constructor(private router: Router) {}

  onContinueWithGoogleCentreClick() {
    this.router.navigate(["/"]);
  }
}
