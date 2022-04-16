import { Injectable } from '@angular/core';
import {ConfigModel} from '../models/config-model';

@Injectable({
  providedIn: 'root'
})
export class ConfigOptionsService {
  private config!: ConfigModel;

  getConfig(): ConfigModel {
    return this.config;
  }

  setConfig(config: Partial<ConfigModel>): void {
    this.config = {...this.config, ...config};
  }

  setConfigProperty(key: string, value: any): void {
    if ( key === 'id') {
      this.config.id = value;
    }
    else if ( key === 'email') {
      this.config.email = value;
    }
    else if ( key === 'login') {
      this.config.login = value;
    }
  }
}
