import React from 'react'
import Header from '../Header/Header'
import Footer from '../Footer/Footer'
import Routers from '../../routes/Routers'


export default function Layout() {
  return (
    <div>

      <Header />
      <div>
        <Routers />
      </div>

      <Footer />
    </div>
  )
}
