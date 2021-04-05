import { Helmet } from "react-helmet";
import { useTranslation } from 'react-i18next';
import './style.scss';

function About() {

  const { t } = useTranslation()

  return (
    <div className="about-container">
      <Helmet>
        <title>{t('metaTitle')}</title>
        <meta name='description' content={t('metaDesc')} />
        <meta name='robots' content='index,follow' />
        <meta name='keywords' content={t('metaKeywords')} />
      </Helmet>
      <div className="about">
        <h2>{t('aboutTitle')}</h2>
        <p>{t('aboutDesc')}</p>
      </div>
    </div>
  )
}

export default About