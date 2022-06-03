import {Inject, Injectable} from '@angular/core';
import {SortOptions} from '../../shared/models/sort-options';
import {HttpClient} from '@angular/common/http';
import {retry, take} from 'rxjs/operators';
import {LocalStorageService, StorageService} from './storage.service';

@Injectable({
  providedIn: 'root'
})
export class AppSettingsService {
  private sortOptions!: SortOptions;
  private key = 'config';
  private configPath = 'assets/app-settings.json';
  private defaultSortOptions: SortOptions = new SortOptions('name', 'asc');

  constructor(
    @Inject(LocalStorageService) private storage: StorageService,
    private http: HttpClient
  ) {}

  initialize() {
    if (this.storage.isKeyExists(this.key)) {
      this.setSortOptions(this.storage.get<SortOptions>(this.key));
    } else {
      const observer = {
        next: (res: SortOptions) => this.setSortOptions(res),
        error: () => this.setSortOptions(this.defaultSortOptions),
      };
      this.http
        .get<SortOptions>(this.configPath)
        .pipe(take(1), retry(2))
        .subscribe(observer);
    }
  }

  setSortOptions(updatedSortOptions: Partial<SortOptions>): SortOptions {
    this.sortOptions = {
      ...this.sortOptions,
      ...updatedSortOptions,
    };
    this.storage.set(this.key, this.sortOptions);
    return this.sortOptions;
  }

  getSortOptions(): Readonly<SortOptions> {
    return this.sortOptions;
  }

  getSortOptionsValue(key: keyof SortOptions) {
    return this.sortOptions[key];
  }

}
