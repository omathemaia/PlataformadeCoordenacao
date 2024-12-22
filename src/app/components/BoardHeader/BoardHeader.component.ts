import {
  Component,
  ViewEncapsulation,
  HostBinding,
  Input,
} from "@angular/core";

import { CommonModule } from "@angular/common";
@Component({
  selector: "board-header",
  standalone: true,
  encapsulation: ViewEncapsulation.None,
  imports: [CommonModule],
  templateUrl: "./BoardHeader.component.html",
  styleUrls: ["./BoardHeader.component.css"],
})
export class BoardHeader {
  @HostBinding("style.display") display = "contents";

  constructor() {}

  /** Value props */
  @Input() toDo: string = "";
  /** Style props */
  @Input() toDoMargin: string | number = "";
  @Input() toDoTextDecoration: string | number = "";
  @Input() toDoDisplay: string | number = "";
  @Input() toDoMinWidth: string | number = "";

  get toDoStyle() {
    return {
      margin: this.toDoMargin,
      "text-decoration": this.toDoTextDecoration,
      display: this.toDoDisplay,
      "min-width": this.toDoMinWidth,
    };
  }
}
