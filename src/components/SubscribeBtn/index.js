import { useState } from 'react'
import { useTranslation } from 'react-i18next'
import gift from './gift.png'
import './style.scss'

function SubscribeBtn() {

  const { t } = useTranslation()

  const [modalOpen, setModalOpen] = useState(false)

  return (
    <>
      <button className="subscribe-btn" onClick={() => setModalOpen(true)}>
        <img src={gift} alt="gift" />
        {t('subscribeBtn')}
      </button>
      {modalOpen && (
        <>
          <div className="modal-background" onClick={() => setModalOpen(false)}></div>
          <div className="modal" id="mc_embed_signup">
            <form action="https://dog-academy.us1.list-manage.com/subscribe/post?u=dfee74bf98b227072536cafa3&amp;id=44bc220770" method="post" id="mc-embedded-subscribe-form" name="mc-embedded-subscribe-form" class="validate" target="_blank" novalidate>
              <label for="mce-EMAIL">{t('subscribeText')}</label>
              <input type="email" name="EMAIL" className="email" id="mce-EMAIL" placeholder="E-mail" required />
              <input type="text" name="FNAME" placeholder={t("firstName")} className="" id="mce-FNAME" required />
              <div style={{position: "absolute",left: "-5000px"}}><input type="text" name="b_dfee74bf98b227072536cafa3_44bc220770" tabindex="-1" value=""/></div>
              <div class="clear"><input type="submit" value={t("subscribeSubmit")} name="subscribe" id="mc-embedded-subscribe" className="button"/></div>
            </form>
          </div>
        </>
      )}
    </>
  )
}

export default SubscribeBtn