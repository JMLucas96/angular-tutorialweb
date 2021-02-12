import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { products } from "../products";

@Component({
  selector: "app-product-details",
  templateUrl: "./product-details.component.html",
  styleUrls: ["./product-details.component.css"]
})
export class ProductDetailsComponent implements OnInit {
  product: any;
  constructor(private route: ActivatedRoute) {}

  ngOnInit() {
    //agafo el productid de la url
    const routeParams = this.route.snapshot.paramMap;
    const productId = Number(routeParams.get("productId"));

    this.product = products.find(product => product.id == productId);
  }
}
