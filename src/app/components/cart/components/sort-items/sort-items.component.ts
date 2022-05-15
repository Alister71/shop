import {Component, EventEmitter, Input,  Output} from '@angular/core';
import {SortOptions} from '../../../../shared/models/sort-options';

@Component({
  selector: 'app-sort-items',
  templateUrl: './sort-items.component.html',
  styleUrls: ['./sort-items.component.css']
})
export class SortItemsComponent{
  @Input() sortOptions: SortOptions;
  @Output() sortChange: EventEmitter<SortOptions> = new EventEmitter<SortOptions>();

  onSortChange(sortOptions: SortOptions): void {
    this.sortChange.emit(sortOptions);
  }
}
