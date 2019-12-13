import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { CustomTableComponent } from "./custom-table.component";

@NgModule({
  imports: [CommonModule],
  declarations: [CustomTableComponent],
  exports: [CustomTableComponent]
})
export class CustomTableModule {}
