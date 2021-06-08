import { Injectable } from '@angular/core';
import { SEED } from '../SEED';

@Injectable({
  providedIn: 'root',
})
export class BoardService {
  constructor() {}
  // generate an array of numbers from 0-n
  numSeq(n: number): Array<number> {
    return Array.from(Array(n), (x, i) => i);
  }
  // get an array of number for each row
  cells(row: number) {
    return SEED.split('').slice(9 * row, 9 * row + 9);
  }
}
