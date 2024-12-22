import { Component, ViewEncapsulation, HostBinding } from "@angular/core";

import { Router } from "@angular/router";
import { Projects } from "../../components/Projects/Projects.component";
@Component({
  selector: "equipe",
  standalone: true,
  encapsulation: ViewEncapsulation.None,
  imports: [Projects],
  templateUrl: "./Equipe.component.html",
  styleUrls: ["./Equipe.component.css"],
})
export class Equipe {
  @HostBinding("style.display") display = "contents";

  constructor(private router: Router) {}

  onEllipseClick() {
    this.router.navigate(["/home"]);
  }
}
