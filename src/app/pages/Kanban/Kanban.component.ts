import { Component, ViewEncapsulation, HostBinding } from "@angular/core";

import { Router } from "@angular/router";
import { Projects } from "../../components/Projects/Projects.component";
import { ToDo } from "../../components/ToDo/ToDo.component";
import { InProgress } from "../../components/InProgress/InProgress.component";
import { Done } from "../../components/Done/Done.component";
@Component({
  selector: "kanban",
  standalone: true,
  encapsulation: ViewEncapsulation.None,
  imports: [Projects, ToDo, InProgress, Done],
  templateUrl: "./Kanban.component.html",
  styleUrls: ["./Kanban.component.css"],
})
export class Kanban {
  @HostBinding("style.display") display = "contents";

  constructor(private router: Router) {}

  onEllipseClick() {
    this.router.navigate(["/home"]);
  }
}
