import {InjectionToken} from '@angular/core';

enum Locals {
  ACCESS_TOKEN = 'access_token',
  REFRESH_TOKEN = 'refresh_token'
}

export const LocalStorageServiceToken = new InjectionToken<LocalStorageServiceClass>('LocalStorageServiceToken');

export class LocalStorageServiceClass {

  constructor(protected storage: Storage) {
  }

  public getAccessToken(): string {
    return this.storage.getItem(Locals.ACCESS_TOKEN);
  }

  public setAccessToken(accessToken: string): void {
    this.storage.setItem(Locals.ACCESS_TOKEN, accessToken);
  }

  public getRefreshToken(): string {
    return this.storage.getItem(Locals.REFRESH_TOKEN);
  }

  public setRefreshToken(refreshToken: string): void {
    this.storage.setItem(Locals.REFRESH_TOKEN, refreshToken);
  }

  public clear(): void {
    this.clearItems([Locals.ACCESS_TOKEN, Locals.REFRESH_TOKEN]);
  }

  private clearItem(key: string): void {
    this.storage.removeItem(key);
  }

  private clearItems(keys: string[]): void {
    keys.forEach((key) => this.clearItem(key));
  }
}
