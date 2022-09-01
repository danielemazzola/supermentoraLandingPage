import rusia from '../images/languagesIcon/rusia.png'
import espana from '../images/languagesIcon/espana.png'
import { useTranslation } from 'react-i18next'

const Languages = () => {
  const [t, i18n] = useTranslation('global')
  return (
    <div className="flex flex-col sm:flex-row bg-gray-300 rounded-l-lg">
    <div className="mx-2 flex items-center">
      <button onClick={() => i18n.changeLanguage('ru')}>
        <img src={rusia} className="w-10 cursor-pointer transition ease-in-out hover:-translate-y-1 hover:scale-110 duration-300" title="Ruso" />
      </button>
    </div>
    <div className="mx-2 flex items-center">
      <button onClick={() => i18n.changeLanguage('es')}>
        <img src={espana} className="w-10 cursor-pointer transition ease-in-out hover:-translate-y-1 hover:scale-110 duration-300" title="Español" />
      </button>
    </div>
    </div>
  )
}

export default Languages
