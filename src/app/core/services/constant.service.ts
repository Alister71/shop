import {InjectionToken} from '@angular/core';

export interface AppMetadata {
  name: string;
  version: string;
  url: string;
}

export const DI_APPLICATION: AppMetadata = {
  name: 'First Component Application',
  version: '2.0',
  url: 'http://localhost:4200'
};

export const APPLICATION = new InjectionToken<AppMetadata>('application');

