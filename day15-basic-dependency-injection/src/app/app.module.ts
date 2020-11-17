import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { FormsModule } from "@angular/forms";

import { AppComponent } from "./app.component";
import { ToggleComponent } from "./toggle/toggle.component";
import { NameFormComponent } from "./name-form/name-form.component";
import { ProductComponent } from "./product/product.component";
import { CartService, CartExtService } from "./di";

@NgModule({
  imports: [BrowserModule, FormsModule],
  declarations: [
    AppComponent,
    ToggleComponent,
    NameFormComponent,
    ProductComponent
  ],
  bootstrap: [AppComponent],
  providers: [
    {
      provide: CartService,
      useClass: CartExtService
    }
  ]
})
export class AppModule { }
