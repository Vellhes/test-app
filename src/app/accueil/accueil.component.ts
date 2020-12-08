import { Component } from "@angular/core";
import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Product } from "./accueil.product.model";

@Injectable()
export class ConfigService {
  constructor(private http: HttpClient) {}
}

@Component({
  selector: "app-accueil",
  templateUrl: "./accueil.component.html",
  styleUrls: ["./accueil.component.css"]
})
export class AccueilComponent {
  url = "https://world.openfoodfacts.org/api/v0/product/";
  product = new Product();
  name: "";
  novaGroup: "";
  imageUrl: "";
  nutriScore: "";
  test = this.setInformations("3095758863011");
  constructor(private httpClient: HttpClient) {}
  async getProductData(barcode: string) {
    const data = await this.httpClient
      .get(this.url + barcode + ".json", {
        responseType: "json"
      })
      .toPromise();
    return (this.product = {
      name: data["product"]["product_name"],
      novaGroup: data["product"]["nova_group"],
      imageUrl: data["product"]["selected_images"]["front"]["thumb"]["fr"],
      nutriScore: data["product"]["nutriscore_grade"]
    });
  }
  setInformations(barcode: string) {
    Promise.resolve(this.getProductData(barcode)).then(value => {
      this.name = value.name;
      this.novaGroup = value.novaGroup;
      this.imageUrl = value.imageUrl;
      this.nutriScore = value.nutriScore;
    });
  }
}
