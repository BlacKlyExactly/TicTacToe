import { Component, OnInit, NgModule} from '@angular/core';
type Turn = 'X' | 'O' | null
type Field = { number: Number, fill: Turn}

@Component({
  selector: 'Board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.scss']
})
export class BoardComponent implements OnInit{
  ngOnInit(){
    
  }
  fields: Array<Field> = [
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
   /*  this.gameInit();
    window.addEventListener('setField', ()=>{
      this.turn === "O" ?
        this.turn = 'X' : this.turn = 'O';
        console.log(this.turn)
    })

  gameInit = () => {
      this.fields.forEach((field, index) => {
        field[index] = { number: index + 1, fill: null };
      })
  } */
  
}
