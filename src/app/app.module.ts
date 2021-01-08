import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { FormsModule } from "@angular/forms";

import { AppComponent } from "./app.component";
import { HelloComponent } from "./hello.component";
import { OnChangeComponent } from "./on-change.component";
import { OnChangeParentComponent } from "./on-change-parent.component";

@NgModule({
  imports: [BrowserModule, FormsModule],
  declarations: [
    AppComponent,
    HelloComponent,
    OnChangeComponent,
    OnChangeParentComponent
  ],
  bootstrap: [AppComponent],
  providers: []
})
export class AppModule {}
