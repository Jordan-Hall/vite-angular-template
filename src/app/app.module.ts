import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

import { AppComponent } from './app.component';
import { ViteWelcomeComponent } from './vite-welcome.component';
@NgModule({
	declarations: [AppComponent, ViteWelcomeComponent],
	imports: [
		BrowserModule,
		RouterModule.forRoot([], { initialNavigation: 'enabledBlocking' }),
		CommonModule,
	],
	providers: [],
	bootstrap: [AppComponent],
})
export class AppModule { }