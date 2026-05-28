import { Link } from 'react-router-dom';
import AppLayout from '../../components/layout/AppLayout.jsx';
import Button from '../../components/ui/Button.jsx';
import { useI18n } from '../../context/I18nContext.jsx';
import { KEYS } from '../../i18n/keys.js';
import { ROUTES } from '../../config/nav.js';
import './WipPage.css';

export default function WipPage({ wipId, activeNav = 'home' }) {
  const { t } = useI18n();
  const wipKeys = KEYS.wip[wipId];

  const titleKey = wipKeys?.title ?? KEYS.common.wipEyebrow;
  const descriptionKey = wipKeys?.description ?? KEYS.common.wipDefaultDescription;

  return (
    <AppLayout activeNav={activeNav}>
      <div className="wip-page">
        <p className="wip-page__eyebrow">{t(KEYS.common.wipEyebrow)}</p>
        <h1 className="wip-page__title">{t(titleKey)}</h1>
        <p className="wip-page__desc">{t(descriptionKey)}</p>
        <div className="wip-page__actions">
          <Button to={ROUTES.home} variant="primary-sm">
            {t(KEYS.common.backToHome)}
          </Button>
          <Link className="wip-page__link" to={ROUTES.games}>
            {t(KEYS.common.browseGames)}
          </Link>
        </div>
      </div>
    </AppLayout>
  );
}
