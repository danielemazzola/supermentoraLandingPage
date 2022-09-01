import { useTranslation } from 'react-i18next'

const Description = () => {
  const [t] = useTranslation('global')

  return (
    <aside className="text-center w-full">
        <p className="text-xl description">{t('descriptions.description')}</p>
    </aside>
  )
}

export default Description
