import {
  Component,
  ViewEncapsulation,
  HostBinding,
  Input,
} from "@angular/core";

@Component({
  selector: "notification-panel",
  standalone: true,
  encapsulation: ViewEncapsulation.None,
  imports: [],
  templateUrl: "./NotificationPanel.component.html",
  styleUrls: ["./NotificationPanel.component.css"],
})
export class NotificationPanel {
  @HostBinding("style.display") display = "contents";

  constructor() {}

  /** Value props */
  @Input() union: string = "";
}
