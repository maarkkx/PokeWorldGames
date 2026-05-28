import { useI18n } from '../../context/I18nContext.jsx';
import { KEYS } from '../../i18n/keys.js';
import './BrandLogo.css';

export default function BrandLogo({ variant = 'header', className = '' }) {
  const { t } = useI18n();

  return (
    <div className={`brand-logo brand-logo--${variant} ${className}`.trim()}>
      <div className="brand-logo__mark" aria-hidden="true">
        <img src="/assets/logo-outer.svg" alt="" className="brand-logo__outer" />
        <img src="/assets/logo-inner.svg" alt="" className="brand-logo__inner" />
      </div>
      <span className="brand-logo__title">{t(KEYS.common.brand)}</span>
    </div>
  );
}
