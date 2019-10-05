import { Component, Input} from '@angular/core';
type Field = {number: Number, fill: "X" | "O" | null }
type Turn = "X" | "O";
@Component({
  selector: 'Field',
  templateUrl: './field.component.html',
  styleUrls: ['./field.component.scss']
})
export class FieldComponent{
    @Input() fieldNumber: Number;
    @Input() turn: Turn
    @Input() fields: Array<Field>
    /* setField = () => {
        let fieldToSet = this.fields.find(field => field.number === this.fieldNumber);
        fieldToSet = {number: this.fieldNumber, fill: this.turn};
        const event = new CustomEvent('setField');
        window.dispatchEvent(event);
        console.log(fieldToSet);
    } */
}
