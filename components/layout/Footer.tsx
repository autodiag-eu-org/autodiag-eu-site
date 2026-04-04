import Link from 'next/link';
import { getTranslations, getLocale } from 'next-intl/server';

export default async function Footer() {
  const t = await getTranslations('footer');
  const locale = await getLocale();
  const isEn = locale === 'en';
  const altLocale = isEn ? 'fr' : 'en';
  const altLabel = isEn ? 'Francais' : 'English';

  return (
    <footer
      role="contentinfo"
      className="border-t border-[rgba(255,255,255,0.08)] bg-bg"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-4">
          {/* Column 1: Logo + tagline */}
          <div>
            <Link
              href={`/${locale}`}
              className="text-xl font-bold"
              aria-label="AutoDiag EU"
            >
              <span className="text-gradient">AutoDiag EU</span>
            </Link>
            <p className="mt-3 text-sm text-secondary">{t('tagline')}</p>
            <p className="mt-1 text-xs text-secondary">{t('location')}</p>
          </div>

          {/* Column 2: Legal links */}
          <div>
            <ul className="space-y-3" aria-label={isEn ? 'Legal links' : 'Liens juridiques'}>
              <li>
                <Link
                  href={`/${locale}/mentions-legales`}
                  className="text-sm text-secondary transition-colors duration-200 hover:text-white"
                >
                  {t('legalNotice')}
                </Link>
              </li>
              <li>
                <Link
                  href={`/${locale}/confidentialite`}
                  className="text-sm text-secondary transition-colors duration-200 hover:text-white"
                >
                  {t('privacy')}
                </Link>
              </li>
              <li>
                <Link
                  href={`/${locale}/cgv`}
                  className="text-sm text-secondary transition-colors duration-200 hover:text-white"
                >
                  {t('terms')}
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3: Site links */}
          <div>
            <ul className="space-y-3" aria-label={isEn ? 'Site links' : 'Liens du site'}>
              <li>
                <Link
                  href={`/${locale}/blog`}
                  className="text-sm text-secondary transition-colors duration-200 hover:text-white"
                >
                  {t('blog')}
                </Link>
              </li>
              <li>
                <Link
                  href={`/${locale}/a-propos`}
                  className="text-sm text-secondary transition-colors duration-200 hover:text-white"
                >
                  {t('about')}
                </Link>
              </li>
              <li>
                <Link
                  href={`/${locale}/compatibilite`}
                  className="text-sm text-secondary transition-colors duration-200 hover:text-white"
                >
                  {t('compatibility')}
                </Link>
              </li>
              <li>
                <Link
                  href={`/${locale}/garages`}
                  className="text-sm text-secondary transition-colors duration-200 hover:text-white"
                >
                  {t('garages')}
                </Link>
              </li>
              <li>
                <Link
                  href={`/${locale}/comparaison`}
                  className="text-sm text-secondary transition-colors duration-200 hover:text-white"
                >
                  {t('comparison')}
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 4: Language switcher */}
          <div>
            <p className="mb-3 text-sm font-medium text-white">
              {isEn ? 'Language' : 'Langue'}
            </p>
            <div className="flex flex-col gap-2">
              <span className="inline-flex items-center gap-2 text-sm text-cyan">
                <span className="h-2 w-2 rounded-full bg-cyan" />
                {isEn ? 'English (UK)' : 'Francais'}
              </span>
              <Link
                href={`/${altLocale}`}
                className="inline-flex items-center gap-2 text-sm text-secondary transition-colors duration-200 hover:text-white"
                hrefLang={altLocale === 'en' ? 'en-GB' : 'fr'}
              >
                <span className="h-2 w-2 rounded-full bg-secondary/50" />
                {altLabel}
              </Link>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-10 border-t border-[rgba(255,255,255,0.08)] pt-6 text-center">
          <p className="text-xs text-secondary">{t('copyright')}</p>
        </div>
      </div>
    </footer>
  );
}
