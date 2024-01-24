import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import ToasterContext from './context/ToasterContext'
import { AuthContext } from './context/AuthContext'
import ActiveStatus from './Components/ActiveStatus'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Gossipy',
  description: 'Gossip in text',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ActiveStatus>
        <AuthContext>
        <ToasterContext />
        {children}
        </AuthContext>
       </ActiveStatus>
        
      </body>
    </html>
  )
}
