import React from "react";
import Flower from "./flower";

const FlowerShower = ({ flowerImages }) => {
  const flowerCount = 20;

  return (
    <div
      style={{
        position: "relative",
        width: "100vw",
        height: "100vh",
        overflow: "hidden",
      }}
    >
      {[...Array(flowerCount)].map((_, index) => (
        <Flower
          key={index}
          image={flowerImages[Math.floor(Math.random() * flowerImages.length)]}
          delay={index * 0.5}
        />
      ))}
    </div>
  );
};

export default FlowerShower;
