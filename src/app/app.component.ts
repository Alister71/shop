import {AfterViewInit, ChangeDetectionStrategy, Component, ElementRef, ViewChild} from '@angular/core';
import type { RouterOutlet } from '@angular/router';

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
    this.title.nativeElement.innerText = 'Shop';
  }

  onSetValues(
    ownerField: HTMLInputElement
  ): void {
    this.owner = ownerField.value;
    this.title.nativeElement.innerText = 'Shop Application, owner: ' + this.owner ;
  }

  onActivate($event: any, routerOutlet: RouterOutlet): void {
    console.log('Activated Component', $event, routerOutlet);
  }
  onDeactivate($event: any, routerOutlet: RouterOutlet): void {
    console.log('Deactivated Component', $event, routerOutlet);
  }
}
