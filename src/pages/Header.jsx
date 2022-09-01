import logo from '../images/logo.png'
import SocialNetworks from './SocialNetworks'
import Languages from './Languages'
import { useTranslation } from 'react-i18next'

const Header = () => {
  const [t] = useTranslation('global')
  return (
    <header className="flex flex-col items-center py-5">
      <div className="w-full flex flex-col items-center">
        <img
          title="Evgeniya Kozlovscaya"
          src={logo}
          alt="Supermentora"
          className="bg-cover w-32 rounded-full transition ease-in-out hover:-translate-y-1 hover:scale-110 duration-300 cursor-pointer"
        />
        <h1 className="font-bold text-xl text-red-900 description">{t('header.supermentora')}</h1>
      </div>
        <div className="absolute w-full flex justify-end">
          <div className="fixed">
            <Languages />
          </div>
        </div>
      <div className="my-4">
        <SocialNetworks />
      </div>
    </header>
  )
}

export default Header
