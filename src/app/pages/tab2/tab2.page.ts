import { Component, OnInit } from "@angular/core";
import { Store } from "src/app/models/Store";
import { StoreService } from "src/app/services/store.service";

@Component({
  selector: "app-tab2",
  templateUrl: "./tab2.page.html",
  styleUrls: ["./tab2.page.scss"],
})
export class Tab2Page implements OnInit {
  store: Store = {
    nombre: "",
    tipo: 0,
    id_encargado: 0,
  };

  isAdd: boolean;
  error: boolean;

  constructor(private storeService: StoreService) {
    this.store.id_encargado = Number(localStorage.getItem('iduser'));
  }

  ngOnInit() {}

  addStore() {
    console.log(this.store);
    this.storeService.addStore(this.store).subscribe(
      () => {
        this.isAdd = true;
        this.error = false;
      },
      () => {
        this.isAdd = false;
        this.error = true;
      }
    );
  }
}
