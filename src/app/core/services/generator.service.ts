import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GeneratorService {

  generate(n: number): string {
    let result           = '';
    const characters       = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    const charactersLength = characters.length;
    for ( let i = 0; i < n; i++ ) {
      result += characters.charAt(Math.floor(Math.random() *
        charactersLength));
    }
    return result;
  }

  // Есть в JavaScript такое понятие как генератор
  // он выглядит почти как функция function* NameOfGenerator() {...}
  getNewID(n: number): number {
    let result           = '';
    const characters       = '0123456789';
    const charactersLength = characters.length;
    for ( let i = 0; i < n; i++ ) {
      result += characters.charAt(Math.floor(Math.random() *
        charactersLength));
    }
    return +result;
  }
}
