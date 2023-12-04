import { Raleway } from 'next/font/google'
import './globals.css'

// components
import Header from '@/components/Header'
import Footer from '@/components/Footer'
//Theme Provider
import ThemeProvider from '@/components/ThemeProvider'

const raleway = Raleway({ subsets: ['latin'] })

export const metadata = {
  title: 'Amy Richardson Developer Portfolio',
  description: 'Portfolio of work by Amy Richardson - Full Stack Developer with bonus creativity',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={raleway.className}>
        <ThemeProvider attribute='class' defaultTheme='light'>
        <Header />
        {children}
        <Footer />
        </ThemeProvider>
        </body>
    </html>
  )
}
