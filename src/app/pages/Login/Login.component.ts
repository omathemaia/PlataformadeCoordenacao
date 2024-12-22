import { Component, ViewEncapsulation, HostBinding } from "@angular/core";

import { FacebookLogin } from "../../components/FacebookLogin/FacebookLogin.component";
@Component({
  selector: "login",
  standalone: true,
  encapsulation: ViewEncapsulation.None,
  imports: [FacebookLogin],
  templateUrl: "./Login.component.html",
  styleUrls: ["./Login.component.css"],
})
export class Login {
  @HostBinding("style.display") display = "contents";

  constructor() {}
}
