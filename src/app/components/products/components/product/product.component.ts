import {Component, OnInit, Input, Output, EventEmitter} from '@angular/core';
import {Product} from '../../model/product';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit{

  constructor() { console.log('constructor'); }
  @Input()
  product!: Product;

  @Output()
  addToCard: EventEmitter<Product> = new EventEmitter();
  @Output() viewProduct = new EventEmitter<Product>();

  ngOnInit(): void { console.log('ngOnInit'); }

  onAddToCart(product: Product): void {
    console.log('Product was bought!', product);
    this.addToCard.emit(product);
  }

  onViewProduct(): void {
    this.viewProduct.emit(this.product);
  }
}
