import {AfterViewInit, ChangeDetectionStrategy, Component, ElementRef, ViewChild} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AppComponent implements AfterViewInit {
  @ViewChild('appTitle') title!: ElementRef<HTMLHeadingElement>;
  owner!: string;

  ngAfterViewInit(): void {
    this.title.nativeElement.innerText = 'Shop Application';
  }

  onSetValues(
    ownerField: HTMLInputElement
  ): void {
    this.owner = ownerField.value;
    this.title.nativeElement.innerText = 'Shop Application, owner: ' + this.owner ;
  }
}
