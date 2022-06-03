import {AfterViewInit, ChangeDetectionStrategy, Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import type { RouterOutlet } from '@angular/router';
import {AppSettingsService} from './core/services/app-settings.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AppComponent implements AfterViewInit, OnInit {
  @ViewChild('appTitle') title!: ElementRef<HTMLHeadingElement>;
  owner!: string;

  constructor(private appSettingsService: AppSettingsService) {}

  ngAfterViewInit(): void {
    this.title.nativeElement.innerText = 'Shop';
  }

  ngOnInit(): void {
    this.appSettingsService.initialize();
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
