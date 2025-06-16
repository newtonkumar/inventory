import Footer from '@/components/frontend/footer'
import Header from '@/components/frontend/header'
import React, { ReactNode } from 'react'

export default function FrontendLayout({children}: {children:ReactNode}) {
  return (
    <div>
        <Header/>
        {children}
        <Footer/>
    </div>
  )
}
