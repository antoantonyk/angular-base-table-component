import {
  Component,
  OnInit,
  Input,
  TemplateRef,
  ContentChild
} from "@angular/core";

@Component({
  selector: "app-custom-table",
  templateUrl: "./custom-table.component.html",
  styleUrls: ["./custom-table.component.css"]
})
export class CustomTableComponent implements OnInit {
  @Input()
  caption: string;

  @Input()
  columns: { title: string; key: string }[] = [];

  @Input()
  values: any[] = [];

  @Input()
  footerValues: any[] = [];

  @ContentChild("caption", { static: false })
  captionTemplate: TemplateRef<any>;

  @ContentChild("header", { static: false })
  headerTemplate: TemplateRef<any>;

  @ContentChild("body", { static: false })
  bodyTemplate: TemplateRef<any>;

  @ContentChild("footer", { static: false })
  footerTemplate: TemplateRef<any>;

  constructor() {}

  ngOnInit() {}
}
