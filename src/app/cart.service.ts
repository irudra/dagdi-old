<<<<<<< HEAD
import * as core from '@angular/core';
import { HttpClient } from '@angular/common/http';

@ core.Injectable({
=======
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http' 

  @Injectable({
>>>>>>> be3c48410d2a462383281095ecd1486f63a22f55
    providedIn: 'root'
  })

export class CartService {

  items = [];
  constructor(
    private http: HttpClient
  ) { }

  addToCart(product){
<<<<<<< HEAD
    this .items.push(product);
  }

  getItems(){
    return this .items;
  }

  clearCart(){
    this .items = [];
    return this .items;
  }

  getShippingPrices(){
  return this .http.get("/assets/shipping.json");
  }
}
=======
    this.items.push(product);
  }

  getItems(){
    return this.items;
  }

  clearCart(){
    this.items = [];
    return this.items;
  }

  getShippingPrices(){
  return this.http.get("/assets/shipping.json");
  }
}
>>>>>>> be3c48410d2a462383281095ecd1486f63a22f55
