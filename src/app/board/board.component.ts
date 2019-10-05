import { Component, OnInit, NgModule, Input } from '@angular/core';
import Swal from 'sweetalert2';
type Turn = 'X' | 'O' | null;
type Field = { number: Number, fill: Turn}

@Component({
  selector: 'Board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.scss']
})
export class BoardComponent implements OnInit{
  ngOnInit(){
    this.gameInit();
    window.addEventListener('setField', ()=>{
      this.calculateWiner();
    })
    window.addEventListener('newGame', ()=>{
      this.gameInit();
    })
  }
  @Input()turn: Turn;
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
   calculateWiner = ()=> {
     const winSchametics = [
       [1, 2, 3],
       [4, 5, 6],
       [7, 8, 9],
       [1, 4, 7],
       [2, 5, 8],
       [3, 6, 9],
       [1, 5, 9],
       [3, 5, 7]
     ]
      winSchametics.forEach((schematic, index)=>{
          const [a, b, c] = schematic;
          if(
            this.fields[a - 1].fill === this.fields[b - 1].fill &&
            this.fields[a - 1].fill === this.fields[c - 1].fill &&
            this.fields[b - 1].fill === this.fields[c - 1].fill &&
            this.fields[a - 1].fill !== null &&
            this.fields[b - 1].fill !== null &&
            this.fields[c - 1].fill !== null
          ){
            this.gameProgress = 'ended';
            if(this.fields[a - 1].fill === 'X'){
              const endEvent = new CustomEvent('gameEnd',{
                detail:{
                  winner: 'X'
                }
              })
              window.dispatchEvent(endEvent);
              Swal.fire({
                title:'"X" won',
                text:'Congratulations my master'
              })
            }
            if(this.fields[a - 1].fill === 'O'){
              const endEvent = new CustomEvent('gameEnd',{
                detail:{
                  winner: 'O'
                }
              })
              window.dispatchEvent(endEvent);
              Swal.fire({
                title:'"O" won',
                text:'Gr8 m8'
              })
            }
          }
      })
   }
   gameInit = ()=> {
      this.fields = [
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
      this.gameProgress = 'not ended';
      this.turn = 'O';
  }

}
