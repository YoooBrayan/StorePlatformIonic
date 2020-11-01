import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";
import { ToastController } from "@ionic/angular";
import { Product } from "src/app/models/product";
import { ProductService } from "src/app/services/product.service";

@Component({
  selector: "app-new-product",
  templateUrl: "./new-product.page.html",
  styleUrls: ["./new-product.page.scss"],
})
export class NewProductPage implements OnInit {
  product: Product = {
    nombre: "",
    descripcion: "",
    cantidad: 0,
    valor: 0,
    tipo: 0,
    foto: "",
    id_negocio: 0,
  };

  isAdd: boolean;
  error: boolean;

  constructor(
    private productService: ProductService,
    private route: ActivatedRoute,
    private toast: ToastController
  ) {
    this.product.id_negocio = Number(this.route.snapshot.paramMap.get("id"));
  }

  ngOnInit() {}

  async addProduct() {
    if (this.product.nombre && this.product.tipo && this.product.cantidad && this.product.valor) {
      this.productService.addProduct(this.product).subscribe(
        (res) => {
          this.isAdd = true;
          this.error = false;
          setTimeout(() => {
            this.isAdd = false;
            this.error = false;
          }, 2000);
        },
        () => {
          this.isAdd = false;
          this.error = true;
        }
      );
    } else {
      const toast = await this.toast.create({
        message: "Invalid Data!!!",
        duration: 2000
      });

      toast.present();
    }
  }
}
