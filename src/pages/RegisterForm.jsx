import { useEffect, useState } from 'react'
import clientAxios from '../config/clientAxios'
import emailjs from 'emailjs-com'
import { useTranslation } from 'react-i18next'
import countries from '../helpers/countries.json'
import frases from '../download/frases-espanol-150.pdf'
import guia from '../download/guia-mi-espanol.pdf'
import series from '../download/guia-series-espanolas.pdf'

const RegisterForm = ({ setGift }) => {
  const [t] = useTranslation('global')
  const [loading, setLoading] = useState(false)
  const [msg, setMsg] = useState(false)
  const [msgSend, setMsgSend] = useState(false)
  const [msgText, setMsgText] = useState('')
  const [msgTextSend, setMsgTextSend] = useState('')
  const [check, setCheck] = useState(false)
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [countrie, setCountrie] = useState('')
  const [phonenumber, setPhonenumber] = useState('')
  const [userInstagram, setUserInstagram] = useState('')
  const [errName, setErrName] = useState(false)
  const [errNameT, setErrNameT] = useState('')
  const [errPhone, setErrPhone] = useState(false)
  const [errPhoneT, setErrPhoneT] = useState('')
  const [errNickName, setErrNickName] = useState(false)
  const [errNickNameT, setErrNickNameT] = useState('')
  const [download, setDownload] = useState(false)

  const handleRegister = async (e) => {
    e.preventDefault()
    if ([name, email, countrie, phonenumber, userInstagram].includes('')) {
      setMsg(true)
      setMsgText(t('formRegister.msgError'))
      return
    }
    if (name.length !== 0 && name.length <= 4) {
      return
    } else {
      setErrName(false)
      setErrNameT('')
    }
    if (phonenumber.length !== 0 && phonenumber.length <= 7) {
      return
    } else {
      setErrPhone(false)
      setErrPhoneT('')
    }
    if (userInstagram.length !== 0 && userInstagram.length <= 2) {
      setErrNickName(true)
      setErrNickNameT(t('formRegister.errNickNameT'))
    } else {
      setErrNickName(false)
      setErrNickNameT('')
    }
    setLoading(true)
    setMsg(false)

    const form = {
      title: t('message.title'),
      name,
      email,
      countrie,
      phonenumber,
      userInstagram,
      message: `<div>
          <h3>${t('message.hi')} ${name}</h3>
          <p>${t('message.body1')}</p>
          <p>${t('message.body2')}</p>
          <p>${t('message.body3')}</p>
          <p>${t('message.bye')}</p>
        </div>`

    }

    const { data } = await clientAxios.post('/landing/new-user', form)
    if (data.newUser) {
      setMsgSend(true)
      emailjs.send('service_64m4o7p', 'template_cksw2w4', form, 'eaKi81AQPGD30Wqfp')
        .then((response) => {
          setMsgTextSend(t('formRegister.sendMessage'))
          setDownload(true)
        }, (err) => {
          alert('FAILED...', err)
        })
      setName('')
      setEmail('')
      setCountrie('')
      setPhonenumber('')
      setUserInstagram('')
    } else {
      setMsgSend(true)
      setMsg(true)
      setMsgText(t('formRegister.existsUser'))
    }

    setTimeout(() => {
      setLoading(false)
      setMsgSend(false)
      setMsgTextSend('')
      setMsgText('')
      setMsg(false)
    }, 3000)
  }

  const handleCheck = () => {
    setCheck(!check)
  }
  useEffect(() => {
    if (name.length !== 0 && name.length <= 4) {
      setErrName(true)
      setErrNameT(t('formRegister.errNameT'))
    } else {
      setErrName(false)
      setErrNameT('')
    }
    if (phonenumber.length !== 0 && phonenumber.length <= 7) {
      setErrPhone(true)
      setErrPhoneT(t('formRegister.errPhoneT'))
    } else {
      setErrPhone(false)
      setErrPhoneT('')
    }
    if (userInstagram.length !== 0 && userInstagram.length <= 2) {
      setErrNickName(true)
      setErrNickNameT(t('formRegister.errNickNameT'))
    } else {
      setErrNickName(false)
      setErrNickNameT('')
    }
  })
  return (
    <section>
        <div className="bg-red-100 py-2 px-2">
            <h4 className="uppercase text-red-600 text-center font-bold text-xl description">{t('formRegister.title')}</h4>
            <p className="text-sm py-2 text-gray-600">{t('formRegister.description')}</p>
        </div>
        <form className="flex flex-col py-5 px-2 sm:px-10 md:px-20" onSubmit={handleRegister}>
        {msg && <div className="text-red-600 text-xs font-bold">{msgText}</div>}
        {msgSend && <div className="bg-green-400 text-white text-lg font-bold text-center rounded-lg animate-beat">{msgTextSend}</div>}
            <div className="flex flex-col my-1">
                <label htmlFor="name" className="my-1">
                    {t('formRegister.name')} <span className="text-xs text-red-500 font-bold">{errName && errNameT }</span>
                </label>
                <input className="px-2  rounded-lg" type="text" id="name" value={name} onChange={e => setName(e.target.value)} />
            </div>
            <div className="flex flex-col my-1">
                <label htmlFor="email" className="my12">
                {t('formRegister.email')}
                </label>
                <input className="px-2  rounded-lg" type="email" id="email" value={email} onChange={e => setEmail(e.target.value)} />
            </div>
            <div className="flex flex-col my-1">
              <label htmlFor='countrie' className="my12">
              {t('formRegister.countrie')}
              </label>
              <select
                value={countrie}
                onChange={e => setCountrie(e.target.value)}>
                <option></option>
                { countries.countries?.map((count, index) => count && <option key={index} value={count.name_en + ' | ' + count.dial_code}>{count.name_en} ({count.dial_code})</option>) }
              </select>
            </div>
            <div className="flex flex-col my-1">
                <label htmlFor="phone" className="my12">
                {t('formRegister.phonenumber')} <span className="text-xs text-red-500 font-bold">{errPhone && errPhoneT }</span>
                </label>
                <input className="px-2  rounded-lg" type="number" id="phone" value={phonenumber} onChange={e => setPhonenumber(e.target.value)} />
            </div>
            <div className="flex flex-col my-1">
                <label htmlFor="nick" className="my-1">
                {t('formRegister.userName')} <span className="text-xs text-red-500 font-bold">{errNickName && errNickNameT }</span>
                </label>
                <input className="px-2  rounded-lg" type="text" id="nick" value={userInstagram} onChange={e => setUserInstagram(e.target.value)} />
            </div>
            <div className="my-3">
                <label htmlFor="check" className="text-white bg-red-500 px-2 py-1 rounded">
                {t('formRegister.privacy')}
                    <input
                        type="checkbox"
                        id="check"
                        className="mx-2"
                        onClick={handleCheck}
                    />
                </label>
                    <p className="text-gray-700 text-xs mt-2">{t('formRegister.policiesPrivacy')}</p>
            </div>
            { download
              ? <div className="mt-2 flex flex-col border-t-4 pt-4 bg-gray-100 px-2 rounded-b-lg">
              <h3 className="uppercase">{t('formRegister.downloadMsg')}</h3>
              <a className="bg-yellow-200 my-2 capitalize py-1 rounded-lg text-center sm:w-1/2 hover:bg-yellow-500 hover:text-white" href={frases} target="_blank" download rel="noreferrer">{t('message.download1')}</a>
              <a className="bg-yellow-200 my-2 capitalize py-1 rounded-lg text-center sm:w-1/2 hover:bg-yellow-500 hover:text-white" href={guia} target="_blank" download rel="noreferrer">{t('message.download2')}</a>
              <a className="bg-yellow-200 my-2 capitalize py-1 rounded-lg text-center sm:w-1/2 hover:bg-yellow-500 hover:text-white" href={series} target="_blank" download rel="noreferrer">{t('message.download3')}</a>
              </div>
              : <>
            { loading
              ? <div className="flex justify-center mt-5">
                <span className="loader"></span>
              </div>
              : <>
                {check &&
                    <input
                        type="submit"
                        value={t('formRegister.button')}
                        className="uppercase text-white font-bold bg-sky-400 py-2 mt-2 rounded hover:bg-sky-600 transition-colors"
                    />
                }
              </>
            }
            </>
            }
        </form>
    </section>
  )
}

export default RegisterForm
