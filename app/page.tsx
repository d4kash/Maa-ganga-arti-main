import Banner from "./components/Banner";
import Features from "./components/Work/index";
import Expert from "./components/Expert/index";
import Gallery from "./components/Gallery";
import Booking from "./components/Booking/Booking";
import Scrolling from "./components/Scrolling/scrollong";
import AartiSteps from "./components/Banner/aarti_steps";
import Service from "./components/services/services";
import PincodeSearch from "./components/pincodesearch/pincodesearch";
import ServiceAreas from "./components/serviceArea/pages";
import Link from "next/link";

export default function Home() {
  return (
    <main>
      <Banner />
      <Scrolling />
      <AartiSteps />
      <Features />
      <PincodeSearch />
      {/* <ServiceAreas /> */}
      {/* <Cook /> */}
      <Expert />
      <Service />
      {/* <Booking /> */}
      <Gallery />
      {/* <GalleryPage /> */}

      {/* <Client /> */}
      {/* <BookingCard /> */}
      {/* <BookEvent /> */}
      {/* <Newsletter /> */}
    </main>
  );
}
