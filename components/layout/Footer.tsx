import Link from 'next/link';
import { getTranslations } from 'next-intl/server';

export default async function Footer() {
  const t = await getTranslations('footer');

  return (
    <footer
      role="contentinfo"
      className="border-t border-[rgba(255,255,255,0.08)] bg-bg"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          {/* Column 1: Logo + tagline */}
          <div>
            <Link
              href="/"
              className="text-xl font-bold"
              aria-label="AutoDiag EU — Accueil"
            >
              <span className="text-gradient">AutoDiag EU</span>
            </Link>
            <p className="mt-3 text-sm text-secondary">{t('tagline')}</p>
            <p className="mt-1 text-xs text-secondary">{t('location')}</p>
          </div>

          {/* Column 2: Legal links */}
          <div>
            <ul className="space-y-3" aria-label="Liens juridiques">
              <li>
                <Link
                  href="/mentions-legales"
                  className="text-sm text-secondary transition-colors duration-200 hover:text-white"
                >
                  {t('legalNotice')}
                </Link>
              </li>
              <li>
                <Link
                  href="/confidentialite"
                  className="text-sm text-secondary transition-colors duration-200 hover:text-white"
                >
                  {t('privacy')}
                </Link>
              </li>
              <li>
                <Link
                  href="/cgv"
                  className="text-sm text-secondary transition-colors duration-200 hover:text-white"
                >
                  {t('terms')}
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3: Site links */}
          <div>
            <ul className="space-y-3" aria-label="Liens du site">
              <li>
                <Link
                  href="/blog"
                  className="text-sm text-secondary transition-colors duration-200 hover:text-white"
                >
                  {t('blog')}
                </Link>
              </li>
              <li>
                <Link
                  href="/a-propos"
                  className="text-sm text-secondary transition-colors duration-200 hover:text-white"
                >
                  {t('about')}
                </Link>
              </li>
              <li>
                <Link
                  href="/compatibilite"
                  className="text-sm text-secondary transition-colors duration-200 hover:text-white"
                >
                  {t('compatibility')}
                </Link>
              </li>
              <li>
                <Link
                  href="/garages"
                  className="text-sm text-secondary transition-colors duration-200 hover:text-white"
                >
                  {t('garages')}
                </Link>
              </li>
              <li>
                <Link
                  href="/comparaison"
                  className="text-sm text-secondary transition-colors duration-200 hover:text-white"
                >
                  {t('comparison')}
                </Link>
              </li>
            </ul>
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
