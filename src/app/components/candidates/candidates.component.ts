import { Component, OnInit } from '@angular/core';
import { BoardService } from '../../services/board.service';

@Component({
  selector: 'app-candidates',
  templateUrl: './candidates.component.html',
  styleUrls: ['./candidates.component.css'],
})
export class CandidatesComponent implements OnInit {
  arr = [0, 1, 2];
  constructor(private boardService: BoardService) {}

  ngOnInit(): void {}
  row(n: number): Array<number> {
    return this.boardService.numSeq(n);
  }
}
