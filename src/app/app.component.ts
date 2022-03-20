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

	const { TestBed } = await import('@angular/core/testing');
	const { RouterTestingModule } = await import('@angular/router/testing');
	const { ViteWelcomeComponent } = await import('./vite-welcome.component');

	describe('AppComponent', () => {
		beforeEach(async () => {
			await TestBed.configureTestingModule({
				imports: [RouterTestingModule],
				declarations: [AppComponent, ViteWelcomeComponent],
			}).compileComponents();
		});

		it('should create the app', () => {
			const fixture = TestBed.createComponent(AppComponent);
			const app = fixture.componentInstance;
			expect(app).toBeTruthy();
		});

		it(`should have as title 'demo'`, () => {
			const fixture = TestBed.createComponent(AppComponent);
			const app = fixture.componentInstance;
			expect(app.title).toEqual('demo');
		});

		it('should render title', () => {
			const fixture = TestBed.createComponent(AppComponent);
			fixture.detectChanges();
			const compiled = fixture.nativeElement as HTMLElement;
			expect(compiled.querySelector('h1')?.textContent).toContain(
				'Welcome demo'
			);
		});
	});
}