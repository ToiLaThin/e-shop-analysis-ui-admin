import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule, registerLocaleData } from '@angular/common';
import { CoreModule } from './core/core.module';
import { routes } from './app.routes';
import { RouterModule } from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NZ_I18N } from 'ng-zorro-antd/i18n';
import { en_US } from 'ng-zorro-antd/i18n';
import en from '@angular/common/locales/en';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { NzModalRef } from 'ng-zorro-antd/modal';

registerLocaleData(en);
@NgModule({
    declarations: [AppComponent],
    imports: [
        BrowserModule,
        CommonModule,
        CoreModule,
        RouterModule.forRoot(routes),
        BrowserAnimationsModule,
        FormsModule,
        HttpClientModule
    ],
    bootstrap: [AppComponent],
    providers: [
      { provide: NZ_I18N, useValue: en_US },
    ]
})
export class AppModule {}
