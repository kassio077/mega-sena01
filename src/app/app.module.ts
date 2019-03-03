import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { TelaviviComponent } from './telavivi/telavivi.component';
import { BolaComponent } from './bola/bola.component';
import { MegaService } from './mega.service';
import { JogarModule } from './jogar/jogar.module';


@NgModule({
  declarations: [
    AppComponent,
    TelaviviComponent,
    BolaComponent
    
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    JogarModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
