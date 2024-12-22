import { Component, ViewEncapsulation, HostBinding } from "@angular/core";

import { BoardHeader } from "../BoardHeader/BoardHeader.component";
import { ProgressBar } from "../ProgressBar/ProgressBar.component";
@Component({
  selector: "done",
  standalone: true,
  encapsulation: ViewEncapsulation.None,
  imports: [BoardHeader, ProgressBar],
  templateUrl: "./Done.component.html",
  styleUrls: ["./Done.component.css"],
})
export class Done {
  @HostBinding("style.display") display = "contents";

  constructor() {}
}
