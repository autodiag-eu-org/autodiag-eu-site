import Link from 'next/link';
import { getTranslations, getLocale } from 'next-intl/server';

const LANG_OPTIONS = [
  { code: "fr", label: "Francais", flag: "\uD83C\uDDEB\uD83C\uDDF7", hrefLang: "fr" },
  { code: "en", label: "English", flag: "\uD83C\uDDEC\uD83C\uDDE7", hrefLang: "en" },
  { code: "de", label: "Deutsch", flag: "\uD83C\uDDE9\uD83C\uDDEA", hrefLang: "de" },
  { code: "es", label: "Espanol", flag: "\uD83C\uDDEA\uD83C\uDDF8", hrefLang: "es" },
  { code: "pt", label: "Portugues", flag: "\uD83C\uDDF5\uD83C\uDDF9", hrefLang: "pt" },
] as const;

const TOP_DTC_CODES = [
  "p0420",
  "p0171",
  "p0172",
  "p0300",
  "p0301",
  "p0302",
  "p0303",
  "p0304",
  "p0128",
  "p0442",
] as const;

export default async function Footer() {
  const t = await getTranslations('footer');
  const tc = await getTranslations('common');
  const locale = await getLocale();

  return (
    <footer
      role="contentinfo"
      className="border-t border-[rgba(255,255,255,0.08)] bg-bg"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-5">
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
            <ul className="space-y-3" aria-label={locale === 'en' ? 'Legal links' : 'Liens juridiques'}>
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
            <ul className="space-y-3" aria-label={locale === 'en' ? 'Site links' : 'Liens du site'}>
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

          {/* Column 4: Top DTC codes */}
          <div>
            <p className="mb-3 text-sm font-medium text-white">
              {t('topCodesTitle')}
            </p>
            <ul className="space-y-2" aria-label={t('topCodesTitle')}>
              {TOP_DTC_CODES.map((code) => (
                <li key={code}>
                  <Link
                    href={`/${locale}/codes/${code}`}
                    className="text-sm text-secondary transition-colors duration-200 hover:text-white"
                  >
                    {code.toUpperCase()}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 5: Language switcher */}
          <div>
            <p className="mb-3 text-sm font-medium text-white">
              {tc('language')}
            </p>
            <div className="flex flex-col gap-2">
              {LANG_OPTIONS.map((lang) => {
                const isCurrent = lang.code === locale;
                return isCurrent ? (
                  <span
                    key={lang.code}
                    className="inline-flex items-center gap-2 text-sm text-cyan"
                  >
                    <span className="h-2 w-2 rounded-full bg-cyan" />
                    {lang.flag} {lang.label}
                  </span>
                ) : (
                  <Link
                    key={lang.code}
                    href={`/${lang.code}`}
                    className="inline-flex items-center gap-2 text-sm text-secondary transition-colors duration-200 hover:text-white"
                    hrefLang={lang.hrefLang}
                  >
                    <span className="h-2 w-2 rounded-full bg-secondary/50" />
                    {lang.flag} {lang.label}
                  </Link>
                );
              })}
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
