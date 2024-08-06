import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CalculatorService {

  add( x: number, y: number): number {
    return x + y;
  }

  constructor() { }
}
