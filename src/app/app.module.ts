import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BoardComponent } from './board/board.component';
import { FieldComponent } from './field/field.component';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';
import { NewGameButtonComponent } from './new-game-button/new-game-button.component';

@NgModule({
  declarations: [
    AppComponent,
    BoardComponent,
    FieldComponent,
    NewGameButtonComponent
  ],
  imports: [
    BrowserModule,
    ServiceWorkerModule.register('ngsw-worker.js', { enabled: environment.production })
  ],
  providers: [],
  bootstrap: [AppComponent],
  exports: [BoardComponent, FieldComponent, NewGameButtonComponent]
})
export class AppModule { }
