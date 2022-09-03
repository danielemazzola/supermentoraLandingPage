import { useState } from 'react'
import Header from './pages/Header'
import Description from './pages/Description'
import Register from './pages/Register'
import GroupClasses from './pages/GroupClasses'
import GetGift from './pages/GetGift'
import RegisterForm from './pages/RegisterForm'
import Footer from './pages/Footer'
function App () {
  const [gift, setGift] = useState(false)
  return (
    <>
      <div className="bg-gradient-to-b from-zinc-50 to-amber-300 h-full">
        <Header />
        <div className="flex flex-col items-center mx-5 sm:mx-10 md:wx-36 lg:mx-64">
          <Description />
          <div className="w-full my-5">
            <div className="my-3">
              <GetGift gift={ gift} setGift={setGift} />
              { gift &&
                <div className="bg-zinc-50 rounded-lg my-5 animate-beat">
                  <RegisterForm setGift={setGift} />
                </div>
              }
            </div>
            <div className="my-3">
              <Register />
            </div>
            <div className="my-3">
              <GroupClasses />
            </div>
          </div>
        </div>
        <div className="mt-5">
          <Footer />
        </div>
      </div>
    </>
  )
}

export default App
