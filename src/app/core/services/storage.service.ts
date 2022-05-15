import {InjectionToken} from '@angular/core';

export const LocalStorageService = new InjectionToken<StorageService>('LocalStorageService');
export const SessionStorageService = new InjectionToken<StorageService>('SessionStorageService');


export class StorageService {
  constructor(protected storage: Storage) {
  }

  isKeyExists(key: string): boolean {
    return this.storage.getItem(key) !== null;
  }

  get<T = any>(key: string): T {
    if (!this.isKeyExists(key)) {
      throw new Error('Undefined key ' + key);
    }

    return JSON.parse(this.storage.getItem(key)!) as T;
  }

  set<T>(key: string, data: T): void {
    this.storage.setItem(
      key,
      JSON.stringify(data)
    );
  }
}


