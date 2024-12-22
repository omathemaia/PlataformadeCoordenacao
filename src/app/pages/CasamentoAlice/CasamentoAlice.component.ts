import { Component, ViewEncapsulation, HostBinding } from "@angular/core";

import { NotificationPanel } from "../../components/NotificationPanel/NotificationPanel.component";
import { Router } from "@angular/router";
@Component({
  selector: "casamento-alice",
  standalone: true,
  encapsulation: ViewEncapsulation.None,
  imports: [NotificationPanel],
  templateUrl: "./CasamentoAlice.component.html",
  styleUrls: ["./CasamentoAlice.component.css"],
})
export class CasamentoAlice {
  @HostBinding("style.display") display = "contents";

  constructor(private router: Router) {}

  onActionIconClick() {
    this.router.navigate(["/"]);
  }
}
