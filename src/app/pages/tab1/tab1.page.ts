import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";
import { Product } from "src/app/models/product";
import { Store } from "src/app/models/Store";
import { Usuario } from "src/app/models/Usuario";
import { ProductService } from "src/app/services/product.service";
import { StoreService } from "src/app/services/store.service";
import { UserService } from "src/app/services/user.service";

@Component({
  selector: "app-tab1",
  templateUrl: "./tab1.page.html",
  styleUrls: ["./tab1.page.scss"],
})
export class Tab1Page implements OnInit {
  user: Usuario = {
    nombre: "",
    nit: 0,
    numero_documento: "",
    email: "",
  };

  isUpdate: boolean;
  errorUpdate: boolean;
  storeSelect: string = "";

  stores: Store[] = [];

  products: Product[] = [];

  constructor(
    private router: ActivatedRoute,
    private route: Router,
    private userService: UserService,
    private storeService: StoreService,
    private productService: ProductService
  ) {
    this.getStores();
  }

  getStores() {
    const id = this.router.snapshot.paramMap.get("id");
    this.userService.getUser(id).subscribe(
      (res) => (this.user = res),
      (error) => console.log("error", error)
    );
    this.storeService.getStores(Number(id)).subscribe(
      (res: []) => (this.stores = res !== null ? res : []),
      (error) => console.log(error)
    );
  }

  getProducts() {
    if (this.storeSelect !== "") {
      this.productService.getProducts(this.storeSelect).subscribe(
        (res: []) => (this.products = res !== null ? res : []),
        (error) => console.log(error)
      );
    }
  }

  reload() {
    this.getStores();
    this.getProducts();
  }

  ngOnInit() {}

  update() {
    this.userService.update(this.user).subscribe(
      () => {
        this.isUpdate = true;
        this.errorUpdate = false;
        setTimeout(() => {
          this.isUpdate = false;
        }, 2000);
      },
      (error) => {
        console.log(error);
        this.errorUpdate = true;
      }
    );
  }

  addProduct() {
    this.route.navigateByUrl(`/tabs/tab1/addproduct/${this.storeSelect}`);
    this.storeSelect = "";
    this.products = [];
  }

  logout() {
    localStorage.removeItem("iduser");
    this.route.navigateByUrl("/login")
  }
}
