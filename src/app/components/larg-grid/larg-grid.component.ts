import { Component, OnInit } from '@angular/core';
import { BoardService } from '../../services/board.service';
@Component({
  selector: 'app-larg-grid',
  templateUrl: './larg-grid.component.html',
  styleUrls: ['./larg-grid.component.css'],
})
export class LargGridComponent implements OnInit {
  chosen: boolean = false;
  active: boolean = false;
  selectedId: number;
  constructor(private boardService: BoardService) {}

  ngOnInit(): void {}

  row(n: number): Array<number> {
    return this.boardService.numSeq(n);
  }

  cells(n: number) {
    return this.boardService.cells(n);
  }
  setClass(row: number, index: number): string {
    let className: string = '';
    if (row === 0) {
      className += 'top';
    }
    if (row === 8) {
      if (className.length === 0) {
        className = 'bottom';
      } else {
        className += ' bottom';
      }
    }
    if (index === 0) {
      if (className.length === 0) {
        className = 'left';
      } else {
        className += ' left';
      }
    }
    if (index === 8) {
      if (className.length === 0) {
        className = 'right';
      } else {
        className += ' right';
      }
    }
    return className;
  }

  onClick(cell: string, row: number, i: number) {
    if (cell === ' ') {
      this.selectedId = row * 9 + i;
      this.active = true;
      // document.getElementById(this.selectedId + '').focus();
    }
  }
}
