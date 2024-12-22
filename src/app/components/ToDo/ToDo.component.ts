import { Component, ViewEncapsulation, HostBinding } from "@angular/core";

import { BoardHeader } from "../BoardHeader/BoardHeader.component";
import { ProgressBar } from "../ProgressBar/ProgressBar.component";
@Component({
  selector: "to-do",
  standalone: true,
  encapsulation: ViewEncapsulation.None,
  imports: [BoardHeader, ProgressBar],
  templateUrl: "./ToDo.component.html",
  styleUrls: ["./ToDo.component.css"],
})
export class ToDo {
  @HostBinding("style.display") display = "contents";

  constructor() {}
}
