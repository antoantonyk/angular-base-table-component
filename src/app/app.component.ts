import { Component } from "@angular/core";

@Component({
  selector: "my-app",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent {
  name = "Angular";

  columns = [
    { title: "ID", key: "id" },
    { title: "Name", key: "name" },
    { title: "Age", key: "age" },
    { title: "Sex", key: "sex" }
  ];

  values = [
    { id: 1, name: "Andrew", age: "26", sex: "M" },
    { id: 2, name: "David", age: "28", sex: "M" },
    { id: 3, name: "Steve", age: "30", sex: "M" },
    { id: 4, name: "Tony", age: "21", sex: "M" }
  ];

  footerValues = [{ copyrightDetails: "© 2019.  All rights reserved" }];
}
