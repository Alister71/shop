import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-product',
  template: `
    <section>
      <button class="btn btn-primary" (click)="onAddToCart()">Buy</button>
    </section>`,
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  constructor() { console.log('constructor'); }

  ngOnInit(): void { console.log('ngOnInit'); }

  onAddToCart(): void {
    console.log('Product was bought!');
  }
}
