import { Link } from 'react-router-dom';
import { useI18n } from '../../context/I18nContext.jsx';
import { KEYS } from '../../i18n/keys.js';
import './BrandLogo.css';

export default function BrandLogo({ variant = 'header', className = '', to }) {
  const { t } = useI18n();

  const content = (
    <>
      <div className="brand-logo__mark" aria-hidden="true">
        <img src="/assets/logo-outer.svg" alt="" className="brand-logo__outer" />
        <img src="/assets/logo-inner.svg" alt="" className="brand-logo__inner" />
      </div>
      <span className="brand-logo__title">{t(KEYS.common.brand)}</span>
    </>
  );

  const rootClassName = `brand-logo brand-logo--${variant}${to ? ' brand-logo--link' : ''} ${className}`.trim();

  if (to) {
    return (
      <Link
        to={to}
        className={rootClassName}
        aria-label={t(KEYS.common.backToHome)}
      >
        {content}
      </Link>
    );
  }

  return <div className={rootClassName}>{content}</div>;
}
