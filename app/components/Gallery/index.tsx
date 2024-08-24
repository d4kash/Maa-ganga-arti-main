"use client";
import React from "react";
// import { useNavigate } from 'react-router-dom';
import Image from "next/image";
import { Fade } from "react-awesome-reveal";
import { Button } from "@mui/material";
import { FC } from "react";
import { useRouter } from "next/navigation";

// import image1 from "/assets/gangamaa.jpg";
// import image2 from "/assets/maaGanga.jpg";
// import image3 from "/assets/arti_image.jpg";
// import image4 from "/assets/arti_deepak.jpg";

const Gallery: React.FC = () => {
  // const navigate = useNavigate();
  const router = useRouter();

  const handleRedirect = () => {
    router.push("/gallery");
  };

  const images = [
    {
      src: "/assets/gangamaa.jpg",
      alt: "image-one",
      width: 1000,
      height: 805,
    },
    {
      src: "/assets/maaGanga.jpg",
      alt: "image-two",
      width: 700,
      height: 405,
    },
    {
      src: "/assets/arti_image.jpg",
      alt: "image-three",
      width: 500,
      height: 405,
    },
    {
      src: "/assets/arti_deepak.jpg",
      alt: "image-four",
      width: 500,
      height: 405,
    },
  ];

  return (
    <div>
      <div className="mx-auto max-w-2xl lg:max-w-7xl sm:py-4 lg:px-8 mt-20 md:pt-20">
        <div className="text-center">
          <Fade
            direction={"up"}
            delay={400}
            cascade
            damping={0.1}
            triggerOnce={true}
          >
            <h2 className="text-pink text-lg font-normal mb-3 tracking-widest uppercase ls-51">
              Our Gallery
            </h2>
          </Fade>
          <Fade
            direction={"up"}
            delay={800}
            cascade
            damping={0.1}
            triggerOnce={true}
          >
            <h3 className="text-3xl lg:text-5xl font-semibold text-black">
              Gallery of our Event&apos;s.
            </h3>
          </Fade>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-12 my-16 sm:space-x-6 space-y-6 md:space-y-0 px-6">
          <div className="col-span-6 flex justify-center overflow-hidden rounded-3xl">
            <Image
              src={images[0].src}
              alt={images[0].alt}
              width={images[0].width}
              height={images[0].height}
              className="inner-img"
            />
          </div>
          <div className="col-span-6 flex justify-center">
            <div className="grid grid-rows-1 grid-flow-row gap-4">
              <div className="row-span-1 overflow-hidden rounded-3xl">
                <Image
                  src={images[1].src}
                  alt={images[1].alt}
                  width={images[1].width}
                  height={images[1].height}
                  className="inner-img"
                />
              </div>
              <div className="grid grid-cols-2 gap-2">
                <div className="overflow-hidden rounded-3xl">
                  <Image
                    src={images[2].src}
                    alt={images[2].alt}
                    width={images[2].width}
                    height={images[2].height}
                    className="inner-img"
                  />
                </div>
                <div className="overflow-hidden rounded-3xl">
                  <Image
                    src={images[3].src}
                    alt={images[3].alt}
                    width={images[3].width}
                    height={images[3].height}
                    className="inner-img"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="text-center mt-8">
          <Button
            onClick={handleRedirect}
            variant="contained"
            sx={{
              backgroundColor: "green !important",
              "&:hover": {
                backgroundColor: "darkgreen !important",
              },
            }}
          >
            View More
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Gallery;
