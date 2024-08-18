import Banner from './components/Banner';
import Features from './components/Work/index';
import Cook from './components/Cook/index';
import Expert from './components/Expert/index';
import Gallery from './components/Gallery';
import Booking from './components/Booking/Booking'
import Client from "./components/Client/index"
import Scrolling from "./components/Scrolling/scrollong"
import BookEvent from "./components/BookEvent"
import BookingCard from "./components/BookingCard"
import GalleryPage from "./components/All Gallery"


import Newsletter from './components/Newsletter/Newsletter';
import Link from 'next/link';




export default function Home() {
  return (

    <main>
      <Banner />
      <Scrolling />
      <Features />
      {/* <Cook /> */}
      <Expert />
      <Booking />
      <Gallery />
      {/* <GalleryPage /> */}

      <Client />
      <BookingCard />
      {/* <BookEvent /> */}
      {/* <Newsletter /> */}
    </main>

  )
}
