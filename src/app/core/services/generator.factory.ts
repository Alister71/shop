import {GeneratorService} from './generator.service';
import {InjectionToken} from '@angular/core';

export const SessionToken = new InjectionToken<number>('Random String');
export const IdToken = new InjectionToken<number>('Random Number');

export function GeneratorFactory(n: number): (generatorService: GeneratorService) => string {
  return (generatorService: GeneratorService): string => generatorService.generate(n);
}

export function IdGeneratorFactory(n: number): (generatorService: GeneratorService) => number {
  return (generatorService: GeneratorService): number => generatorService.getNewID(n);
}

