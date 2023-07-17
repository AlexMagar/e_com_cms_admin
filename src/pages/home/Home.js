import React from 'react'
import { Header } from '../../components/layout/Header'
import { Footer } from '../../components/layout/Footer'

export const  Home = () => {
  return (
    <div>
        <Header />
        <main className='main App mt-5'>
            Home
        </main>
        <Footer />
    </div>
  )
}
