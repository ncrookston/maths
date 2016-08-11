import { NgModule } from '@angular/core';
import { BrowserModule  } from '@angular/platform-browser';
import { AppComponent }   from './app.component';
import { Operation, RandomInts }   from './app.service';

@NgModule({
    imports:      [BrowserModule],
    declarations: [AppComponent],
    bootstrap:    [AppComponent],
    providers:    [Operation, RandomInts],
})
export class AppModule {}
