import { Component, OnInit } from '@angular/core';
import { CategoryEnum } from './category.enum';

@Component({
  selector: 'app-first',
  templateUrl: './first.component.html',
  styleUrls: ['./first.component.css']
})
export class FirstComponent implements OnInit {
  name: string;
  description: string;
  price: number;
  category: CategoryEnum;
  isAvailable: boolean;
  constructor() { console.log('constructor'); }

  ngOnInit(): void {
    this.name = 'name';
    this.description = 'description';
    this.price = 1;
    this.category = CategoryEnum.FOOD;
    this.isAvailable = true;
  }

}
