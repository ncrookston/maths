import { NgModule } from '@angular/core';
import { BrowserModule  } from '@angular/platform-browser';
import { AppComponent }   from './app.component';
import { RandomInts }   from './randomints.service';

@NgModule({
    imports:      [BrowserModule],
    declarations: [AppComponent],
    bootstrap:    [AppComponent],
    providers:    [RandomInts],
})
export class AppModule {}
