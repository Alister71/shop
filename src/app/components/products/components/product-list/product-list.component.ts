import {Component, Input, OnInit, OnChanges, SimpleChanges} from '@angular/core';
import {Product} from '../../model/product';
import {Router} from '@angular/router';
import {ProductsPromiseService} from '../../service/products-promise.service';
import {CartObservableService} from '../../../cart/service/cart-observable.service';
import {Subscription} from 'rxjs';
import {AutoUnsubscribe} from '../../../../core/decorators/auto-unsubscribe.decorator';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
@AutoUnsubscribe()
export class ProductListComponent implements OnInit, OnChanges  {
  products!: Promise<Product[]>;
  @Input()
  owner!: string;
  private sub!: Subscription;

  constructor(private router: Router,
              private productsPromiseService: ProductsPromiseService,
              private cartObservableService: CartObservableService) {
  }

  ngOnInit(): void {
    this.products = this.productsPromiseService.getProducts();
  }

  onAddToCart(product: Product): void {
    this.cartObservableService.onAddToCart(product);
  }

  ngOnChanges(changes: SimpleChanges): void {
    console.log('On Changes Hook');

    for (const propName in changes) {
      if (changes.hasOwnProperty (propName)) {
        const chng = changes[propName];
        const cur  = JSON.stringify(chng.currentValue);
        const prev = JSON.stringify(chng.previousValue);
        console.log(`${propName}: currentValue = ${cur}, previousValue = ${prev}`);
        console.log(`Is First Change: ${chng.isFirstChange()}`);
      }
    }
  }

  onViewProduct(product: Product): void {
    const link = ['/products-list', product.id];
    this.router.navigate(link);
  }
}
