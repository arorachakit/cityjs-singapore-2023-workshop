import { storyblokInit, apiPlugin} from "@storyblok/react/rsc"
import StoryblokProvider from "@/components/StoryblokProvider"
import Navigation from "@/components/Navigation"
import Footer from "@/components/Footer"

import './globals.css';

export const metadata = {
  title: 'Storyblok and Next.js 13',
  description: 'A Next.js and Storyblok app using app router ',
}

storyblokInit({
  accessToken: '8w7GdKE2CV5wFlsPfQu8Zwtt',
  use: [apiPlugin]
})

export default function RootLayout({ children }) {
  return (
    <StoryblokProvider>
      <html lang="en">
      <body>
        <Navigation/>
          {children}
        <Footer/>
      </body>
      </html>
    </StoryblokProvider>
  )
}
