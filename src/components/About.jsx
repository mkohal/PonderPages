import React from "react";

export const About = () => {
  return (
    <div className=" bg-gray-100 text-black p-6 rounded-lg shadow-lg max-w-3xl mx-auto my-8">
      <h2 className="text-3xl font-bold mb-4 text-center">
        About Ponder Pages
      </h2>
      <p className="text-lg leading-relaxed">
        Welcome to <span className="font-semibold">Ponder Pages</span>, the
        place where your thoughts take shape! Whether you're a seasoned writer
        or just starting out, Ponder Pages gives you the platform to{" "}
        <span className="text-blue-400">Publish Your Passions</span>.
      </p>
      <p className="mt-4 text-lg leading-relaxed">
        Explore a world of ideas, read engaging blogs by others, and share your
        own insights with a community that values creativity and expression.
        Start writing today and be part of a space where words truly matter!
      </p>
    </div>
  );
};

export default About;
