"use client"
import { store } from '@/libs/redux/store'
import { SessionProvider } from 'next-auth/react'
import React from 'react'
import { Provider } from 'react-redux'

function Providers  ({ children }:any) {
  return (
    <SessionProvider>
      <Provider store={store}>
        {children}
      </Provider>
    </SessionProvider>
  )
}

export default Providers