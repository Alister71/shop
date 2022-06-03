import {Component, OnInit} from '@angular/core';
import {Product} from '../../model/product';
import {ActivatedRoute} from '@angular/router';
import {map} from 'rxjs/operators';
import {CartObservableService} from '../../../cart/service/cart-observable.service';

@Component({
  selector: 'app-product-view',
  templateUrl: './product-view.component.html',
  styleUrls: ['./product-view.component.css']
})
export class ProductViewComponent implements OnInit {

  constructor(private cartObservableService: CartObservableService,
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
    this.cartObservableService.onAddToCart(product);
  }

}
