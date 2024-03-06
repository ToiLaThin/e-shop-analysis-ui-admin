import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { CoreModule } from './core/core.module';
import { routes } from './app.routes';
import { RouterModule } from '@angular/router';

@NgModule({
    declarations: [AppComponent],
    imports: [BrowserModule, CommonModule, CoreModule, RouterModule.forRoot(routes)],
    bootstrap: [AppComponent]
})
export class AppModule {}
