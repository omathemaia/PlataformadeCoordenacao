import { Component, ViewEncapsulation, HostBinding } from "@angular/core";

@Component({
  selector: "user-avatar",
  standalone: true,
  encapsulation: ViewEncapsulation.None,
  imports: [],
  templateUrl: "./UserAvatar.component.html",
  styleUrls: ["./UserAvatar.component.css"],
})
export class UserAvatar {
  @HostBinding("style.display") display = "contents";

  constructor() {}
}
