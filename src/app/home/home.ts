import { DOCUMENT } from '@angular/common';
import {
  afterNextRender,
  ChangeDetectionStrategy,
  Component,
  computed,
  effect,
  inject,
  input,
  signal,
} from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';
import { RouterLink } from '@angular/router';
import {
  BUSINESS_ID,
  COMPANY,
  CONTENT,
  EMAIL,
  GITHUB,
  Lang,
  PERSON,
  PHONE,
  PHONE_HREF,
  SITE_URL,
} from '../content';

/** Current month as MM/YYYY. */
function monthStamp(date = new Date()): string {
  return String(date.getMonth() + 1).padStart(2, '0') + '/' + date.getFullYear();
}

@Component({
  selector: 'app-home',
  imports: [RouterLink],
  templateUrl: './home.html',
  styleUrl: './home.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Home {
  /** Bound from the route data. */
  readonly lang = input<Lang>('fi');

  protected readonly t = computed(() => CONTENT[this.lang()]);
  protected readonly fi = CONTENT.fi;
  protected readonly en = CONTENT.en;

  protected readonly email = EMAIL;
  protected readonly phone = PHONE;
  protected readonly phoneHref = PHONE_HREF;
  protected readonly github = GITHUB;
  protected readonly businessId = BUSINESS_ID;
  protected readonly company = COMPANY;
  protected readonly person = PERSON;
  /** The page is prerendered at build time, so the month and year are refreshed in the browser. */
  protected readonly month = signal(monthStamp());
  protected readonly year = signal(new Date().getFullYear());
  protected readonly cvOpen = signal(false);

  private readonly document = inject(DOCUMENT);
  private readonly title = inject(Title);
  private readonly meta = inject(Meta);

  constructor() {
    effect(() => this.applyHead());
    afterNextRender(() => {
      this.month.set(monthStamp());
      this.year.set(new Date().getFullYear());
    });
  }

  protected toggleCv(): void {
    this.cvOpen.update((open) => !open);
  }

  private applyHead(): void {
    const t = this.t();
    const doc = this.document;
    const url = SITE_URL + (t.path === '/' ? '/' : t.path);

    doc.documentElement.lang = t.lang;
    this.title.setTitle(t.meta.title);
    this.meta.updateTag({ name: 'description', content: t.meta.description });
    this.meta.updateTag({ property: 'og:title', content: t.meta.title });
    this.meta.updateTag({ property: 'og:description', content: t.meta.description });
    this.meta.updateTag({ property: 'og:url', content: url });
    this.meta.updateTag({ property: 'og:type', content: 'website' });
    this.meta.updateTag({ property: 'og:image', content: SITE_URL + '/img/jarkko.webp' });
    this.meta.updateTag({ property: 'og:locale', content: t.lang === 'fi' ? 'fi_FI' : 'en_GB' });

    this.setLink('canonical', url);
    this.setLink('alternate', SITE_URL + '/', 'fi');
    this.setLink('alternate', SITE_URL + '/en', 'en');
    this.setLink('alternate', SITE_URL + '/', 'x-default');
  }

  private setLink(rel: string, href: string, hreflang?: string): void {
    const head = this.document.head;
    const selector = hreflang ? `link[rel="${rel}"][hreflang="${hreflang}"]` : `link[rel="${rel}"]`;
    let link = head.querySelector<HTMLLinkElement>(selector);
    if (!link) {
      link = this.document.createElement('link');
      link.rel = rel;
      if (hreflang) {
        link.hreflang = hreflang;
      }
      head.appendChild(link);
    }
    link.href = href;
  }
}
