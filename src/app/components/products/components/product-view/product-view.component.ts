import {Component, OnInit} from '@angular/core';
import {Product} from '../../model/product';
import {CartService} from '../../../cart/service/cart.service';
import {ActivatedRoute} from '@angular/router';
import {ProductsService} from '../../service/products.service';
import {map} from 'rxjs/operators';

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
  originalProduct: Product;

  ngOnInit(): void {
    this.route.data.pipe(map(data => data.product)).subscribe((product: Product) => {
      this.product = { ...product };
      this.originalProduct = { ...product };
    });
  }

  onAddToCart(product: Product): void {
    this.cartService.addProductToCard(product);
  }

}
