import { useTranslation } from 'react-i18next'
import { Navigate } from 'react-router-dom'

const Register = () => {
  const [t] = useTranslation('global')

  return (
    <a href="https://docs.google.com/forms/d/e/1FAIpQLSd2l3n5HJG8VelKebf6wktJ6KItMoEAHywZ7vXSxCcep8cDrg/viewform" target="_blank" rel="noreferrer">
      <button
      className="uppercase bg-red-500 w-full text-white text-lg pt-3 pb-4 rounded-lg transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 hover:bg-orange-700 duration-300">
      {t('chatClub.chat')}<br /><span className="text-sm font-bold text-red-500 bg-zinc-50 px-2 py-1 rounded-xl">{t('chatClub.chatMsg')}</span>
    </button>
    </a>

  )
}

export default Register
