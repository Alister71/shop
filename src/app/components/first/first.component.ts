import {Component, Inject, OnInit, Optional} from '@angular/core';
import { CategoryEnum } from './category.enum';
import {APPLICATION, AppMetadata, DI_APPLICATION} from '../../core/services/constant.service';
import {GeneratorFactory, IdGeneratorFactory, IdToken, SessionToken} from '../../core/services/generator.factory';
import {GeneratorService} from '../../core/services/generator.service';
import {ConfigOptionsService} from '../../core/services/config-options.service';
import {LocalStorageServiceClass, LocalStorageServiceToken} from '../../core/services/local-storage-service.class';
import {ConfigModel} from '../../core/models/config-model';

@Component({
  selector: 'app-first',
  templateUrl: './first.component.html',
  styleUrls: ['./first.component.css'],
  providers: [
    {provide: APPLICATION, useValue: DI_APPLICATION},
    {provide: SessionToken, useFactory: GeneratorFactory(15), deps: [GeneratorService]},
    {provide: IdToken, useFactory: IdGeneratorFactory(10), deps: [GeneratorService]},
    {provide: LocalStorageServiceToken, useValue: new LocalStorageServiceClass(window.localStorage)}
  ]
})
export class FirstComponent implements OnInit {
  name: string;
  description: string;
  price: number;
  category: CategoryEnum;
  isAvailable: boolean;

  constructor(@Optional() @Inject(APPLICATION) public appMetadata: AppMetadata ,
              @Optional() @Inject(SessionToken) public sessionId: string,
              private rs: GeneratorService,
              @Optional() @Inject(IdToken) public appId: number,
              private fs: GeneratorService,
              @Optional() public configOptionsService: ConfigOptionsService,
              @Optional() @Inject(LocalStorageServiceToken) public localStorage: LocalStorageServiceClass) {
  }



  ngOnInit(): void {
    this.name = 'name';
    this.description = 'description';
    this.price = 1;
    this.category = CategoryEnum.FOOD;
    this.isAvailable = true;
    this.localStorage.setAccessToken('access12345');
    this.localStorage.setRefreshToken('refresh12345');
    this.configOptionsService.setConfig({ id: '12', login: 'John Doe'});
  }

  public getConfig(): ConfigModel {
    return this.configOptionsService.getConfig();
  }

  onSetConfigProperty(key: string, value: string): void {
    this.configOptionsService.setConfigProperty(key, value);
  }
}
