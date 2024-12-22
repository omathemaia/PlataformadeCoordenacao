import { Component, ViewEncapsulation, HostBinding } from "@angular/core";

import { BoardHeader } from "../BoardHeader/BoardHeader.component";
import { ProgressBar } from "../ProgressBar/ProgressBar.component";
@Component({
  selector: "in-progress",
  standalone: true,
  encapsulation: ViewEncapsulation.None,
  imports: [BoardHeader, ProgressBar],
  templateUrl: "./InProgress.component.html",
  styleUrls: ["./InProgress.component.css"],
})
export class InProgress {
  @HostBinding("style.display") display = "contents";

  constructor() {}
}
