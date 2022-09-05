import telegrama from '../images/SocialNetworks/telegrama.png'
import gmail from '../images/SocialNetworks/gmail.png'
import instagram from '../images/SocialNetworks/instagram.png'
import whatsapp from '../images/SocialNetworks/whatsapp.png'

const SocialNetworks = () => {
  return (
    <div className="flex">
        <a href="https://web.telegram.org/k/#@supermentora_espanol" title="@supermentora_espanol" target="_blank" className="transition ease-in-out hover:-translate-y-1 hover:scale-110 duration-300 mx-2" rel="noreferrer">
            <img src={telegrama} alt="Telegram" className="w-10"/>
        </a>
        <a href="https://wa.me/34722272980/?text=¡Hola! Хочу получить информацию по обучению🇪🇸" title="Whatsapp" target="_blank" className="transition ease-in-out hover:-translate-y-1 hover:scale-110 duration-300 mx-2" rel="noreferrer">
            <img src={whatsapp} alt="Whatsapp" className="w-10"/>
        </a>
        <a href="https://www.instagram.com/supermentora/?hl=es" title="@supermentora" target="_blank" className="transition ease-in-out hover:-translate-y-1 hover:scale-110 duration-300 mx-2" rel="noreferrer">
            <img src={instagram} alt="Instagram" className="w-10"/>
        </a>
        <a href="https://mail.google.com/mail/u/0/#inbox?compose=jrjtXJTmXShQLwTDNzLwgwbzRKrDkDChFDhqxBbdFXXwTxrCftmNQMlmMhJNdgJJnFnhpTTj" title="tusupermentora@gmail.com" target="_blank" className="transition ease-in-out hover:-translate-y-1 hover:scale-110 duration-300 mx-2" rel="noreferrer">
            <img src={gmail} alt="Gmail" className="w-10"/>
        </a>
    </div>
  )
}

export default SocialNetworks
