import { useTranslation } from 'react-i18next'

const GetGift = ({ gift, setGift }) => {
  const [t] = useTranslation('global')

  const handleGift = () => {
    setGift(!gift)
  }

  return (
    <button className="uppercase bg-red-500 w-full text-white text-lg pt-3 pb-4 rounded-lg hover:bg-orange-700" onClick={handleGift}>
      {gift ? t('getGift.giftOpen') : t('getGift.giftClose')}
</button>
  )
}

export default GetGift
