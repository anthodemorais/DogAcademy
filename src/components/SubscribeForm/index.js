import { useTranslation } from 'react-i18next'
import i18n from "i18next";
import preview from '../SubscribeBtn/preview.jpg'
import './style.scss'

function SubscribeForm() {

  const { t } = useTranslation()

  return (
    <div className="subscribe-form" id="mc_embed_signup">
      <img src={preview} alt={t('subscribeAlt')} />
      <form action="https://dog-academy.us1.list-manage.com/subscribe/post?u=dfee74bf98b227072536cafa3&amp;id=44bc220770" method="post" id="mc-embedded-subscribe-form" name="mc-embedded-subscribe-form" class="validate" target="_blank" novalidate>
        <label for="mce-EMAIL">{t('subscribeText')}</label>
        <input type="email" name="EMAIL" className="email" id="mce-EMAIL" placeholder="E-mail" required />
        <input type="text" name="FNAME" placeholder={t("firstName")} className="" id="mce-FNAME" required />
        <div class="mc-field-group input-group" style={{position: "absolute",left: "-5000px", visibility: "hidden"}}>
            <strong>Lang </strong>
            <ul>
              <li><input type="checkbox" value="1" name="group[380314][1]" id="mce-group[380314]-380314-0" checked={i18n.language === "fr"} /><label for="mce-group[380314]-380314-0">fr</label></li>
              <li><input type="checkbox" value="2" name="group[380314][2]" id="mce-group[380314]-380314-1" checked={i18n.language !== "fr"} /><label for="mce-group[380314]-380314-1">en</label></li>
            </ul>
        </div>
        <div style={{position: "absolute",left: "-5000px", visibility: "hidden"}}><input type="text" name="b_dfee74bf98b227072536cafa3_44bc220770" tabindex="-1" value=""/></div>
        <input type="submit" value={t("subscribeSubmit")} name="subscribe" id="mc-embedded-subscribe" className="button"/>
      </form>
    </div>
  )
}

export default SubscribeForm