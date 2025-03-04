import React from "react";

const images = [
  "/src/assets/1.png",
  "/src/assets/2.png",
  "/src/assets/3.png",
  "/src/assets/4.png",

];

const Home = () => {
  return (
    <div className="w-screen h-screen flex items-center justify-center bg-white">
      <div className="relative w-full h-full overflow-x-auto flex items-center scrollbar-hide">
        <div className="flex w-full h-full">
          {images.map((img, index) => (
            <div key={index} className="flex-shrink-0 w-1/7 h-full">
              <img
                src={img}
                alt={`Slide ${index + 1}`}
                className="w-full h-full object-cover"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Home;

