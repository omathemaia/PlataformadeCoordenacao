import {
  Component,
  ViewEncapsulation,
  HostBinding,
  Input,
} from "@angular/core";

@Component({
  selector: "projects",
  standalone: true,
  encapsulation: ViewEncapsulation.None,
  imports: [],
  templateUrl: "./Projects.component.html",
  styleUrls: ["./Projects.component.css"],
})
export class Projects {
  @HostBinding("style.display") display = "contents";

  constructor() {}

  /** Value props */
  @Input() union: string = "";
}
