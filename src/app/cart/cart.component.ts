import { Component, OnInit, Injectable } from '@angular/core';
import { CartService } from './cart-service';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'taco-cart',
  templateUrl: 'cart.component.html',
  styleUrls: ['./cart.component.css']
})

@Injectable()
export class CartComponent implements OnInit {
  tacoId: number;
  tacoUrl: string;

  model = {
    deliveryName: '',
    deliveryStreet: '',
    deliveryCity: '',
    deliveryState: '',
    deliveryZip: '',
    ccNumber: '',
    ccExpiration: '',
    ccCVV: '',
    tacos: []
  };

  constructor(private cart: CartService, private httpClient: HttpClient, private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.queryParams.subscribe(params => {
      this.tacoId = params['id'];
    });

    this.tacoUrl = 'http://localhost:8080/design/' + this.tacoId;
    this.httpClient.get(this.tacoUrl).subscribe(taco => this.cart.addToCart(taco));
    this.tacoUrl = null;
  }

  get cartItems() {
    return this.cart.getItemsInCart();
  }

  get cartTotal() {
    return this.cart.getCartTotal();
  }

  onSubmit() {
    // this.model.tacos = this.cart.getItemsInCart();
    this.cart.getItemsInCart().forEach(cartItem => {
      this.model.tacos.push(cartItem.taco);
    });

    this.httpClient.post(
        'http://localhost:8080/orders',
        this.model, {
            headers: new HttpHeaders().set('Content-type', 'application/json')
                    .set('Accept', 'application/json'),
        }).subscribe(r => this.cart.emptyCart());

    // TODO: Do something after this...navigate to a thank you page or something
  }

}
