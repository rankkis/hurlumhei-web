import { RenderMode, ServerRoute } from '@angular/ssr';

/** Every page is prerendered to static HTML for GitHub Pages. */
export const serverRoutes: ServerRoute[] = [
  { path: '', renderMode: RenderMode.Prerender },
  { path: 'en', renderMode: RenderMode.Prerender },
  { path: '**', renderMode: RenderMode.Client },
];
