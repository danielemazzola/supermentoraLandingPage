import { useTranslation } from 'react-i18next'

const GetGift = ({ gift, setGift }) => {
  const [t] = useTranslation('global')

  const handleGift = () => {
    setGift(!gift)
  }

  return (
    <button className="uppercase bg-red-500 w-full text-white text-lg pt-3 pb-4 rounded-lg transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 hover:bg-orange-700 duration-300" onClick={handleGift}>
      {gift ? t('getGift.giftOpen') : t('getGift.giftClose')}
</button>
  )
}

export default GetGift
