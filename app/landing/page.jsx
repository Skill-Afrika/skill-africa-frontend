import React from 'react'
<<<<<<< HEAD
import Landing from '../landing2/landing2'

=======
import Landing from "../landing2/landing2"
>>>>>>> 802f8cd552c7d3211169bd55046c68d2679b648c


export async function generateMetadata({ params }) {
  return {
    icons: {
      icon: '/vercel.svg'
    }
    // title: '...',
  }
}

export default function LandingPage() {
  return (
   <Landing />
  )
}
