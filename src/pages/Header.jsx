import logo from '../images/logo.png'
import SocialNetworks from './SocialNetworks'

const Header = () => {
  return (
    <header className="flex flex-col items-center py-5">
      <img
        title="Evgeniya Kozlovscaya"
        src={logo}
        alt="Supermentora"
        className="bg-cover w-32 rounded-full transition ease-in-out hover:-translate-y-1 hover:scale-110 duration-300 mx-2 cursor-pointer"
      />
      <h1 className="font-bold text-xl text-red-900 description">@supermentora</h1>
      <div className="my-4">
        <SocialNetworks />
      </div>
    </header>
  )
}

export default Header
