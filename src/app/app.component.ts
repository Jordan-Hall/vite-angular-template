import { Component } from '@angular/core';

@Component({
	selector: 'angular-vitetest-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.css'],
})
export class AppComponent {
	title = 'demo';
	menu = { name: 'hello' };
}

if (import.meta.vitest) {
	const { it, expect, describe, beforeEach } = import.meta.vitest;
	const { TestBed, waitForAsync } = await import('@angular/core/testing');
	const { RouterTestingModule } = await import('@angular/router/testing');
	const { ViteWelcomeComponent } = await import('./vite-welcome.component');


	describe('AppComponent', () => {
		beforeEach(async () => {
			TestBed.configureTestingModule({
				imports: [RouterTestingModule],
				declarations: [AppComponent, ViteWelcomeComponent],
			}).compileComponents();
		});

		it('should create the app', () => {
			debugger;
			const fixture = TestBed.createComponent(AppComponent);
			debugger;
			const app = fixture.componentInstance;
			expect(app).toBeTruthy();
		});
	});
}