import {Component, OnInit} from '@angular/core';
import {Product} from '../../model/product';
import {CartService} from '../../../cart/service/cart.service';
import {ActivatedRoute, ParamMap} from '@angular/router';
import {ProductsService} from '../../service/products.service';
import {map, switchMap} from 'rxjs/operators';

@Component({
  selector: 'app-product-view',
  templateUrl: './product-view.component.html',
  styleUrls: ['./product-view.component.css']
})
export class ProductViewComponent implements OnInit {

  constructor(private cartService: CartService,
              private productsService: ProductsService,
              private route: ActivatedRoute) { console.log('constructor'); }
  product!: Product;

  ngOnInit(): void {
// it is not necessary to save subscription to route.paramMap
// when router destroys this component, it handles subscriptions automatically
    const observer = {
      next: (product: Product) => (this.product = { ...product }),
      error: (err: any) => console.log(err)
    };
    this.route.paramMap
      .pipe(
        switchMap((params: ParamMap) =>
// notes about "!"
// params.get() returns string | null, but getTask takes string | number
// in this case taskID is a path param and can not be null
            this.productsService.getProduct(params.get('productID'))
        ), // transform undefined => {}
        map(el => el ? el : {} as Product)
      )
      .subscribe(observer);

  }

  onAddToCart(product: Product): void {
    this.cartService.addProductToCard(product);
  }

}
