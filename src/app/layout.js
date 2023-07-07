
import Navbar from "@/components/Navbar.js"
import Footer from "@/components/Footer.js"
import Providers from "@/utils/Providers.js"

export const metadata = {
  title: 'Jordan\'s Birthday',
  description: 'A website made for my girlfriend\'s 22nd birthday',
  icons: {
    icon: '/mushroom.svg',
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
          <Providers>
            <Navbar/>
            {children}
            <Footer/>
          </Providers>
      </body>
    </html>
  )
}
