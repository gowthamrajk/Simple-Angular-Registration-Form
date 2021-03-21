import { Component, VERSION } from "@angular/core";
import { User } from "./user";
@Component({
  selector: "my-app",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent {
  userModel = new User("", "", "", "", "");
}
