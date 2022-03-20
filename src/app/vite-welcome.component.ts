import { Component, OnInit, ViewEncapsulation } from '@angular/core';

/* eslint-disable */

@Component({
	selector: 'angular-vitetest-vite-welcome',
	template: `
    <!--
     * * * * * * * * * * * * * * * * * * * * * * * * * * * *
     This is a starter component and can be deleted.
     * * * * * * * * * * * * * * * * * * * * * * * * * * * *
     Delete this file and get started with your project!
     * * * * * * * * * * * * * * * * * * * * * * * * * * * *
     -->
    <style>
      html {
        -webkit-text-size-adjust: 100%;
        font-family: ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont,
          'Segoe UI', Roboto, 'Helvetica Neue', Arial, 'Noto Sans', sans-serif,
          'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol',
          'Noto Color Emoji';
        line-height: 1.5;
        tab-size: 4;
        scroll-behavior: smooth;
      }
      body {
        font-family: inherit;
        line-height: inherit;
        margin: 0;
      }
      h1,
      h2,
      p,
      pre {
        margin: 0;
      }
      *,
      ::before,
      ::after {
        box-sizing: border-box;
        border-width: 0;
        border-style: solid;
        border-color: currentColor;
      }
      h1,
      h2 {
        font-size: inherit;
        font-weight: inherit;
      }
      a {
        color: inherit;
        text-decoration: inherit;
      }
      pre {
        font-family: ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas,
          'Liberation Mono', 'Courier New', monospace;
      }
      svg {
        display: block;
        vertical-align: middle;
      }
      svg {
        shape-rendering: auto;
        text-rendering: optimizeLegibility;
      }
      pre {
        background-color: rgba(55, 65, 81, 1);
        border-radius: 0.25rem;
        color: rgba(229, 231, 235, 1);
        font-family: ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas,
          'Liberation Mono', 'Courier New', monospace;
        overflow: scroll;
        padding: 0.5rem 0.75rem;
      }
      .shadow {
        box-shadow: 0 0 #0000, 0 0 #0000, 0 10px 15px -3px rgba(0, 0, 0, 0.1),
          0 4px 6px -2px rgba(0, 0, 0, 0.05);
      }
      .rounded {
        border-radius: 1.5rem;
      }
      .wrapper {
        width: 100%;
      }
      .container {
        margin-left: auto;
        margin-right: auto;
        max-width: 768px;
        padding-bottom: 3rem;
        padding-left: 1rem;
        padding-right: 1rem;
        color: rgba(55, 65, 81, 1);
        width: 100%;
      }
      #welcome {
        margin-top: 2.5rem;
      }
      #welcome h1 {
        font-size: 3rem;
        font-weight: 500;
        letter-spacing: -0.025em;
        line-height: 1;
      }
      #welcome span {
        display: block;
        font-size: 1.875rem;
        font-weight: 300;
        line-height: 2.25rem;
        margin-bottom: 0.5rem;
      }
      #hero {
        align-items: center;
        background-color: hsla(214, 62%, 21%, 1);
        border: none;
        box-sizing: border-box;
        color: rgba(55, 65, 81, 1);
        display: grid;
        grid-template-columns: 1fr;
        margin-top: 3.5rem;
      }
      #hero .text-container {
        color: rgba(255, 255, 255, 1);
        padding: 3rem 2rem;
      }
      #hero .text-container h2 {
        font-size: 1.5rem;
        line-height: 2rem;
        position: relative;
      }
      #hero .text-container h2 svg {
        color: hsla(162, 47%, 50%, 1);
        height: 2rem;
        left: -0.25rem;
        position: absolute;
        top: 0;
        width: 2rem;
      }
      #hero .text-container h2 span {
        margin-left: 2.5rem;
      }
      #hero .text-container a {
        background-color: rgba(255, 255, 255, 1);
        border-radius: 0.75rem;
        color: rgba(55, 65, 81, 1);
        display: inline-block;
        margin-top: 1.5rem;
        padding: 1rem 2rem;
        text-decoration: inherit;
      }
      #hero .logo-container {
        display: none;
        justify-content: center;
        padding-left: 2rem;
        padding-right: 2rem;
      }
      #hero .logo-container svg {
        fill: #fff;
        width: 50%;
      }
      #middle-content {
        align-items: flex-start;
        display: grid;
        gap: 4rem;
        grid-template-columns: 1fr;
        margin-top: 3.5rem;
      }

      @media screen and (min-width: 768px) {
        #hero {
          grid-template-columns: repeat(2, minmax(0, 1fr));
        }
        #hero .logo-container {
          display: flex;
        }
        #middle-content {
          grid-template-columns: repeat(2, minmax(0, 1fr));
        }
      }
    </style>
    <div class="wrapper">
      <div class="container">
        <!--  WELCOME  -->
        <div id="welcome">
          <h1>
            <span> Hello there, </span>
            Welcome demo 👋
          </h1>
        </div>
        <!--  HERO  -->
        <div id="hero" class="rounded">
          <div class="text-container">
            <h2>
              <svg
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z"
                />
              </svg>
              <span>You&apos;re up and running</span>
            </h2>
            <a href="//nxext.dev/angular"> What&apos;s next? </a>
          </div>
          <div class="logo-container">
            <svg width="100%" height="100%" viewBox="0 0 205 210" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" xml:space="preserve" xmlns:serif="http://www.serif.com/" style="fill-rule:evenodd;clip-rule:evenodd;stroke-linejoin:round;stroke-miterlimit:2;">
              <g id="Layer-1" serif:id="Layer 1" transform="matrix(1,0,0,1,-610.999,-898.394)">
                  <g transform="matrix(1,0,0,1,721.886,1014.05)">
                      <path d="M0,-3.778L-6.814,-7.583L-13.629,-3.778L0,3.805L6.814,0.014L0,-3.778Z" style="fill-rule:nonzero;"/>
                  </g>
                  <g transform="matrix(1,0,0,1,673.31,1037.31)">
                      <path d="M0,-138.913L-62.311,-104.231L-62.311,-34.682L-27.178,-15.127L-27.178,-22.71L-55.682,-38.58L-55.682,-100.333L0,-131.33L55.682,-100.333L55.682,-38.58L41.761,-30.837L34.947,-27.033L0,-7.583L-7.292,-11.64L-7.292,-4.057L0,0L41.761,-23.241L48.576,-27.033L62.311,-34.682L62.311,-104.231L0,-138.913Z" style="fill-rule:nonzero;"/>
                  </g>
                  <g transform="matrix(1,0,0,1,756.833,1037.31)">
                      <path d="M0,-138.913L-34.947,-119.464L-28.132,-115.672L0,-131.33L55.682,-100.333L55.682,-38.58L20.549,-19.025L13.92,-15.327L0,-7.583L-28.132,-23.241L-34.947,-19.45L0,0L13.92,-7.743L20.549,-11.442L62.311,-34.682L62.311,-104.231L0,-138.913Z" style="fill-rule:nonzero;"/>
                  </g>
                  <g transform="matrix(0,1,1,0,745.531,972.762)">
                      <path d="M-9.91,-16.539L12.853,-16.539L16.539,-9.91L-6.211,-9.91L-9.91,-16.539Z" style="fill-rule:nonzero;"/>
                  </g>
                  <g transform="matrix(1,0,0,1,770.753,1051.06)">
                      <path d="M0,-28.08L0,12.966L-55.682,43.962L-111.363,12.966L-111.363,-48.788L-76.231,-68.343L-76.231,-75.926L-117.992,-52.685L-117.992,16.863L-55.682,51.545L6.629,16.863L6.629,-31.778L0,-28.08ZM-41.761,-79.625L-41.761,-72.028L-35.132,-68.343L-35.132,-75.926L-41.761,-79.625Z" style="fill-rule:nonzero;"/>
                  </g>
              </g>
          </svg>
          </div>
        </div>
        <!--  MIDDLE CONTENT  -->
        <div id="middle-content">

        </div>
      </div>
    </div>
  `,
	encapsulation: ViewEncapsulation.None,
})
export class ViteWelcomeComponent implements OnInit {
	constructor() { }

	ngOnInit(): void { }
}