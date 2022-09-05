import { useTranslation } from 'react-i18next'

const GroupClasses = () => {
  const [t] = useTranslation('global')

  return (
    <a href="https://wa.me/34722272980/?text=¡Hola! Хочу получить информацию по занятиям в группе🇪🇸" title="Whatsapp" target="_blank" rel="noreferrer">
        <button className="uppercase bg-red-500 w-full text-white text-lg pt-3 pb-4 rounded-lg hover:bg-orange-700">
           {t('groupClasses.group')} <br /><span className="text-sm font-bold text-red-500 bg-zinc-50 px-2 py-1 rounded-xl">{t('groupClasses.submsg')}</span>
        </button>

    </a>
  )
}

export default GroupClasses
