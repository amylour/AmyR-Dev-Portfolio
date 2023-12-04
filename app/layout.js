import { Raleway } from 'next/font/google'
import './globals.css'

const raleway = Raleway({ subsets: ['latin'] })

export const metadata = {
  title: 'Amy Richardson Developer Portfolio',
  description: 'Portfolio of work by Amy Richardson - Full Stack Developer with bonus creativity',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={raleway.className}>{children}</body>
    </html>
  )
}
