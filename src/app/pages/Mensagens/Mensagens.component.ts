import { Component, ViewEncapsulation, HostBinding } from "@angular/core";

import { NotificationPanel } from "../../components/NotificationPanel/NotificationPanel.component";
import { Router } from "@angular/router";
import { UserAvatar } from "../../components/UserAvatar/UserAvatar.component";
import { FrameComponent } from "../../components/FrameComponent/FrameComponent.component";
@Component({
  selector: "mensagens",
  standalone: true,
  encapsulation: ViewEncapsulation.None,
  imports: [NotificationPanel, UserAvatar, FrameComponent],
  templateUrl: "./Mensagens.component.html",
  styleUrls: ["./Mensagens.component.css"],
})
export class Mensagens {
  @HostBinding("style.display") display = "contents";

  constructor(private router: Router) {}

  onRecordButtonClick() {
    this.router.navigate(["/home"]);
  }
}
