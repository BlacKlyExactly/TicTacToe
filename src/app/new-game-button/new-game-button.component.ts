import { Component } from '@angular/core';
import Swal from "sweetalert2";

@Component({
  selector: 'NewGameButton',
  templateUrl: './new-game-button.component.html',
  styleUrls: ['./new-game-button.component.scss']
})
export class NewGameButtonComponent {
    newGame = ()=> {
      Swal.fire({
        type:'info',
        title:'Do you want restart board ?',
        showCancelButton:true,
        cancelButtonText:'No',
        confirmButtonText:'Yes',
        cancelButtonColor: '#d33',
      })
      .then(res=>{
          if(res.value){
            const newGameEvent = new CustomEvent('newGame');
            window.dispatchEvent(newGameEvent);
          }
      })
    }
}
