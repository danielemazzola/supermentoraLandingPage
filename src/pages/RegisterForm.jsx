import { useState } from 'react'
import clientAxios from '../config/clientAxios'
import emailjs from 'emailjs-com'
import { useTranslation } from 'react-i18next'

const RegisterForm = () => {
  const [t] = useTranslation('global')
  const [msg, setMsg] = useState(false)
  const [msgText, setMsgText] = useState('')
  const [check, setCheck] = useState(false)
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [phonenumber, setPhonenumber] = useState('')
  const [userInstagram, setUserInstagram] = useState('')

  const handleRegister = async (e) => {
    e.preventDefault()
    if ([name, email, phonenumber, userInstagram].includes('')) {
      setMsg(true)
      setMsgText(t('formRegister.msgError'))
    } else {
      setMsg(false)
      const form = {
        name,
        email,
        phonenumber,
        userInstagram
      }

      const { data } = await clientAxios.post('/landing/new-user', form)

      console.log(data)

      const frmContact = {
        name,
        email,
        phonenumber,
        userInstagram
      }
      emailjs.send('service_exgxyrh', 'template_3rkrbc5', frmContact, 'KMyysNWDqCJCt0FXH')
        .then((response) => {
          alert('Send message')
        }, (err) => {
          console.log('FAILED...', err)
        })
    }
  }

  const handleCheck = () => {
    setCheck(!check)
  }
  return (
    <section>
        <div className="bg-red-100 py-2 px-2">
            <h4 className="uppercase text-red-600 text-center font-bold text-xl description">{t('formRegister.title')}</h4>
            <p className="text-sm py-2 text-gray-600">{t('formRegister.description')}</p>
        </div>
        <form className="flex flex-col py-5 px-2 sm:px-10 md:px-20" onSubmit={handleRegister}>
        {msg && <div className="text-red-600 text-xs font-bold">{msgText}</div>}
            <div className="flex flex-col my-1">
                <label htmlFor="name" className="my-1">
                    {t('formRegister.name')}
                </label>
                <input className="px-2 border rounded-lg border-gray-700" type="text" id="name" value={name} onChange={e => setName(e.target.value)} />
            </div>
            <div className="flex flex-col my-1">
                <label htmlFor="email" className="my12">
                {t('formRegister.email')}
                </label>
                <input className="px-2 border rounded-lg border-gray-700" type="email" id="email" value={email} onChange={e => setEmail(e.target.value)} />
            </div>
            <div className="flex flex-col my-1">
                <label htmlFor="phone" className="my12">
                {t('formRegister.phonenumber')}
                </label>
                <input className="px-2 border rounded-lg border-gray-700" type="text" id="phone" value={phonenumber} onChange={e => setPhonenumber(e.target.value)} />
            </div>
            <div className="flex flex-col my-1">
                <label htmlFor="nick" className="my-1">
                {t('formRegister.userName')}
                </label>
                <input className="px-2 border rounded-lg border-gray-700" type="text" id="nick" value={userInstagram} onChange={e => setUserInstagram(e.target.value)} />
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
            {check &&
                <input
                    type="submit"
                    value={t('formRegister.button')}
                    className="uppercase text-white font-bold bg-sky-400 py-2 mt-2 rounded hover:bg-sky-600 transition-colors"
                />
            }
        </form>
    </section>
  )
}

export default RegisterForm
