import Link from "next/link";
import Image from "next/image";
// import Logo from "/assets/logo_ganga_arti.png";

interface ProductType {
  id: number;
  section: string;
  link: string[];
  navigationLink: string[];
}

interface socialLinks {
  imgSrc: string;
  link: string;
  width: number;
}

const socialLinks: socialLinks[] = [
  {
    imgSrc: "/images/Footer/facebook.svg",
    link: "https://www.facebook.com/profile.php?id=61561410114750",
    width: 10,
  },
  {
    imgSrc: "/images/Footer/insta.svg",
    link: "https://www.instagram.com/shreenarayan_ganga_arti?igsh=NnN3azFsZzI5dTh2",
    width: 14,
  },
  {
    imgSrc: "/images/Footer/twitter.svg",
    link: "https://x.com/thegangaarti?t=pcdO-QOZUIq982OK9p56yw&s=09",
    width: 14,
  },
  {
    imgSrc: "/images/Footer/youtube.svg",
    link: "https://youtube.com/@narayantiwari1747?si=WbEV__NXstYwLmrG",
    width: 14,
  },
];

const products: ProductType[] = [
  {
    id: 1,
    section: "Company",
    link: ["Home", "About us", "Gallery", "Services"],
    navigationLink: ["/", "/about", "/gallery", "/service"],
  },
  {
    id: 2,
    section: "Contact",
    link: ["Help/FAQ", "Contact Us"],
    navigationLink: ["/faqs", "/contact"],
  },
  {
    id: 3,
    section: "Contact info",
    link: [
      "केदारेश्वर मंदिर,",
      "केदारघाट, सोनारपुर (वाराणसी)",
      "thegangaarti05@gmail.com",
    ],
    navigationLink: [],
  },
];

const footer = () => {
  return (
    <div className="mx-auto max-w-2xl pt-24 px-4 sm:px-6 lg:max-w-7xl lg:px-8">
      <div className="my-12 grid grid-cols-1 gap-y-10 sm:grid-cols-6 lg:grid-cols-12">
        {/* COLUMN-1 */}

        <div className="sm:col-span-6 lg:col-span-5">
          <div className="flex flex-shrink-0 items-center border-right">
            <Link key="logoNav" href="/">
              <Image
                src="/assets/logo_ganga_arti.png"
                alt="shree narayan ganga aarti"
                width={148}
                height={148}
              />
            </Link>
            {/* <Link href="/" className="text-2xl font-semibold text-black ml-4">
              Shree Narayan Ganga Aarti
            </Link> */}
          </div>
          <h3 className="text-textbl text-xs font-medium mt-5 mb-4 lg:mb-16">
            The spiritual atmosphere during the aarti by <br />
            <strong> shree narayan ganga aarti</strong> is enhanced by the
            <br /> glow of oil lamps and the fragrance of incens
          </h3>
          <div className="flex gap-4">
            {socialLinks.map((items, i) => (
              <Link href={items.link} key={i}>
                <div className="bg-white h-10 w-10 shadow-xl text-base rounded-full flex items-center justify-center footer-icons hover:bg-pink">
                  <Image
                    src={items.imgSrc}
                    alt={items.imgSrc}
                    width={items.width}
                    height={2}
                    className="sepiaa"
                  />
                </div>
              </Link>
            ))}
          </div>
        </div>

        {/* CLOUMN-2/3/4 */}

        {products.map((product) => (
          <div key={product.id} className="sm:col-span-2">
            <p className="text-black text-xl font-semibold mb-9">
              {product.section}
            </p>
            <ul>
              {product.link.map((link: string, index: number) => (
                <li key={index} className="mb-5">
                  <Link
                    href={product.navigationLink[index] || "#"}
                    className="text-footerlinks text-base font-normal mb-6 space-links"
                  >
                    {link}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      {/* All Rights Reserved */}

      <div className="py-10 md:flex items-center justify-between border-t border-t-bordertop">
        <h4 className="text-darkgrey text-sm text-center md:text-start font-normal">
          @2025 - All Rights Reserved by Shree narayan ganga aarti{" "}
        </h4>
        <div className="flex gap-5 mt-5 md:mt-0 justify-center md:justify-start">
          <h4 className="text-darkgrey text-sm font-normal">
            <Link href="/privacy">Privacy policy</Link>
          </h4>
          <div className="h-5 bg-bordertop w-0.5"></div>
          <h4 className="text-darkgrey text-sm font-normal">
            <Link href="/termcondn">Terms & conditions</Link>
          </h4>
          <div className="h-5 bg-bordertop w-0.5"></div>
          <h4 className="text-darkgrey text-sm font-normal">
            <Link href="/cancellation">Cancellation and Refund</Link>
          </h4>
          <div className="h-5 bg-bordertop w-0.5"></div>
          <h4 className="text-darkgrey text-sm font-normal">
            <Link href="/shippingdelivery">Shipping and Delivery</Link>
          </h4>
        </div>
      </div>
    </div>
  );
};

export default footer;
