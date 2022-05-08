import {Component, Input, OnInit, OnChanges, SimpleChanges} from '@angular/core';
import {ProductsService} from '../../service/products.service';
import {Product} from '../../model/product';
import {CartService} from '../../../cart/service/cart.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit, OnChanges  {
  products!: Promise<Product[]>;
  @Input()
  owner!: string;

  constructor(private router: Router,
              private productService: ProductsService,
              private cartService: CartService) {
  }

  ngOnInit(): void {
    this.products = this.productService.getProducts();
  }

  onAddToCart(product: Product): void {
    console.log('Product was bought!', product);
    this.cartService.addProductToCard(product);
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
