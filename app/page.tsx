import Banner from './components/Banner/index';
import Features from './components/Work/index';
import Cook from './components/Cook/index';
import Expert from './components/Expert/index';
import Gallery from './components/Gallery/index';
import Booking from './components/Booking/Booking'
import Client from "./components/Client/index"
import Scrolling from "./components/Scrolling/scrollong"
import BookEvent from "./components/BookEvent/index"
import BookingCard from "./components/BookingCard/index"
import GalleryPage from "./components/All Gallery/index"


import Newsletter from './components/Newsletter/Newsletter';
import Link from 'next/link';




export default function Home() {
  return (

    <main>
      <Banner />
      <Scrolling />
      <Features />
      <Cook />
      <Expert />
      <Booking />
      <Gallery />
      <GalleryPage />

      <Client />
      <BookingCard />
      <BookEvent />
      {/* <Newsletter /> */}
    </main>

  )
}
