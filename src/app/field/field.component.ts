import { Component, Input, OnInit} from '@angular/core';

type Field = {number: Number, fill: "X" | "O" | null }
type Turn = "X" | "O";
@Component({
  selector: 'Field',
  templateUrl: './field.component.html',
  styleUrls: ['./field.component.scss']
})
export class FieldComponent{
    @Input() field: Field
    @Input() turn: Turn
    @Input() fields: Array<Field>
    @Input() value: Turn | null;
    @Input() gameProgress: 'ended' | 'not ended';
     setField = () => {
      const fieldIndex = this.fields.indexOf(this.field) + 1;
      const currField = this.fields[fieldIndex - 1];
      const event = new CustomEvent('setField');
      if(currField.fill === null && this.gameProgress === 'not ended'){
        if(this.turn === 'O') {
          this.fields[fieldIndex - 1] = {number: fieldIndex, fill:'O'};
          window.dispatchEvent(event);
        }
        else if(this.turn === 'X'){
          this.fields[fieldIndex - 1] = {number: fieldIndex, fill:'X'};
          window.dispatchEvent(event);
        }
      } 
    }
}
