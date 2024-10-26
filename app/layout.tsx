import {
  ClerkProvider,
  SignInButton,
  SignedIn,
  SignedOut,
  UserButton
} from '@clerk/nextjs'
import React from 'react'
import type { Metadata } from 'next'
import './globals.css';
export const metadata:Metadata ={
  title:"Aksverse",
  description:"this is the platform where people can help each other"

}
export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    
      <html lang="en">
        <ClerkProvider>
        <body>
          {children}
        </body>
        </ClerkProvider>
      </html>
  )
}