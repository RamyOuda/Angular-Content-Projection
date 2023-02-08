import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { WavesComponent } from './waves/waves.component';
import { WaveComponent } from './wave/wave.component';

@NgModule({
  imports: [BrowserModule, FormsModule],
  declarations: [AppComponent, WavesComponent, WaveComponent],
  bootstrap: [AppComponent],
})
export class AppModule {}
