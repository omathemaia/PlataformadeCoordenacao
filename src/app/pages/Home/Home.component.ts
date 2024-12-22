import { Component, ViewEncapsulation, HostBinding } from "@angular/core";

import { Router } from "@angular/router";
import { NotificationPanel } from "../../components/NotificationPanel/NotificationPanel.component";
@Component({
  selector: "home",
  standalone: true,
  encapsulation: ViewEncapsulation.None,
  imports: [NotificationPanel],
  templateUrl: "./Home.component.html",
  styleUrls: ["./Home.component.css"],
})
export class Home {
  @HostBinding("style.display") display = "contents";

  constructor(private router: Router) {}

  onGroupContainerClick() {
    this.router.navigate(["/kanban"]);
  }

  onGroupContainerClick1() {
    this.router.navigate(["/"]);
  }

  onGroupContainerClick2() {
    this.router.navigate(["/equipe"]);
  }

  onGroupContainerClick3() {
    this.router.navigate(["/casamento-alice"]);
  }

  onClose24dp000000FILL0Wght40ImageClick() {
    this.router.navigate(["/login"]);
  }
}
