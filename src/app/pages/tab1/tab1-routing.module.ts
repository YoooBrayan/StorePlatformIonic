import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

import { Tab1Page } from "./tab1.page";

const routes: Routes = [
  {
    path: "",
    component: Tab1Page,
  },     
  {
    path: "addproduct/:id",
    loadChildren: () =>
      import("../new-product/new-product.module").then(
        (m) => m.NewProductPageModule
      ),
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Tab1PageRoutingModule {}
