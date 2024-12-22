import {
  Component,
  ViewEncapsulation,
  HostBinding,
  Input,
} from "@angular/core";

import { CommonModule } from "@angular/common";
@Component({
  selector: "progress-bar",
  standalone: true,
  encapsulation: ViewEncapsulation.None,
  imports: [CommonModule],
  templateUrl: "./ProgressBar.component.html",
  styleUrls: ["./ProgressBar.component.css"],
})
export class ProgressBar {
  @HostBinding("style.display") display = "contents";

  constructor() {}

  /** Variant props */
  @Input() progress: "100%" | "25%" | "50%" = "100%";
  /** Style props */
  @Input() progressBarWidth: string | number = "";

  get progressBarStyle() {
    return {
      width: this.progressBarWidth,
    };
  }
}
