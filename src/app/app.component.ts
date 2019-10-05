import { Component, Input, OnInit } from '@angular/core';
import { TimelineMax } from "gsap/TweenMax"

type Turn = 'X' | 'O' | null;
type Field = { number: Number, fill: Turn};
import 'sweetalert2/src/sweetalert2.scss';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  @Input()gameProgress : 'ended' | 'not ended' = 'not ended'
  @Input()fields: Array<Field> = [
    { number: 1, fill: null },
    { number: 2, fill: null },
    { number: 3, fill: null },
    { number: 4, fill: null },
    { number: 5, fill: null },
    { number: 6, fill: null },
    { number: 7, fill: null },
    { number: 8, fill: null },
    { number: 9, fill: null }
  ]
  @Input() turn: Turn = 'O';
  xWins: number = 0;
  oWins: number = 0;

  constructor(){
    window.addEventListener('gameEnd', (event: any)=>{
      if(event.detail.winner === 'X') this.xWins += 1;
      else if(event.detail.winner === 'O') this.oWins += 1;
      console.log(event.detail.winner)
    })
    window.addEventListener('setField', ()=>{
      if(this.turn === 'X') this.turn = 'O'
      else if(this.turn === 'O') this.turn = 'X'
    })
  }
  ngOnInit(){
    const board = document.querySelector('.board');
    const fields = document.querySelectorAll('field');
    const tl = new TimelineMax();
    tl.from(board, 0.5 , {opacity:0, y:-10})
      .staggerFrom(fields, 0.2, {opacity:0, x:-10}, 0.5)
      .from('.stats__title', 0.23, {opacity:0, x:-20})
      .from('.stats__turn', 0.23, {opacity:0, x:-20})
      .from('.stats__summary', 0.23, {opacity:0, x:-20})
      .from('.ngButton', 0.23, {opacity:0, x:-20})
  }
    title = 'tic-tac-toe';
}
