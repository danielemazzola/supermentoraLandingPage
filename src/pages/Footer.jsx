import SocialNetworks from './SocialNetworks'
import icono from '../images/icono.png'

const Footer = () => {
  const date = new Date()
  const year = date.getFullYear()
  return (
    <footer className="flex flex-col items-center justify-center text-center md:flex-row md:justify-around py-10 border-t-2 border-dashed border-red-500">
        <div className="w-96 flex justify-center">
          <img src={icono} alt="Supermentora-icono" title="Supermentora" className="w-20 rounded-full transition ease-in-out hover:-translate-y-1 hover:scale-110 duration-300" />
        </div>
        <div className="my-2 sm:my-0 w-96 flex flex-col justify-center">
            <h3 className="text-sm uppercase description">@Supermentora</h3>
            <p className="text-sm description">&copy; www.supermentora.com</p>
            <p className="font-bold text-sm uppercase description">{`All rights reserved 2019-${year}`}</p>
        </div>
        <div className="sm:mt-5 w-96 flex justify-center">
          <SocialNetworks />
        </div>
    </footer>
  )
}

export default Footer
