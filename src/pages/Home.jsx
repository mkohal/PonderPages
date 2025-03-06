import { useState } from "react";
import img1 from "../assets/1.png";
import img2 from "../assets/2.png";
import img3 from "../assets/3.png";
import toast from "react-hot-toast";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

export default function Home() {
  const navigate = useNavigate();
  const [expandedPost, setExpandedPost] = useState(null);
  const [email, setEmail] = useState("");
  const authStatus = useSelector((state) => state.auth.status);

  const handleExploreBlogs = () => {
    if (authStatus) {
      navigate("/my-feed");
    } else {
      navigate("/login");
    }
  };


  const handleSubscribe = () => {
    if (!email) {
      toast.error("Please enter a valid email!");
      return;
    }
    toast.success("Subscribed to Newsletter!");
    setEmail("");
  };

  const toggleReadMore = (postId) => {
    setExpandedPost(expandedPost === postId ? null : postId);
  };

return (
  <div className="w-full min-h-screen bg-gray-100 text-black">
    {/* Hero Section */}
    <section className="relative flex flex-col items-center justify-center h-[28vh] bg-cover bg-center bg-[url('/path-to-hero-image.jpg')] text-black text-center px-6">
      <h1 className="mt-16 text-4xl md:text-6xl font-bold drop-shadow-lg">
        Welcome to Ponder Pages
      </h1>
      <p className="mt-4 text-lg md:text-xl drop-shadow-md">
        Discover, Read, and Share Stories That Inspire
      </p>
      <button
        className="mt-6 px-6 py-3 text-lg rounded-md bg-gray-300 hover:bg-gray-400 text-gray-900 font-semibold"
        onClick={handleExploreBlogs}
      >
        Explore Blogs
      </button>
    </section>

    {/* Trending Posts - Wrapped in a White Bar */}
    <section className="max-w-6xl mx-auto px-4 py-12">
      {/* White Bar for Trending Posts Title */}
      <div className="bg-white py-2 px-6 rounded-md shadow-md text-center">
        <h2 className="text-3xl font-semibold">Trending Posts</h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-6">
        {[
          {
            id: 1,
            title: "The Future of AI",
            img: img1,
            content:
              "AI is evolving rapidly, transforming industries with automation, predictive analytics, and intelligent decision-making. The ethical considerations surrounding AI development...",
          },
          {
            id: 2,
            title: "Healthy Living Habits",
            img: img2,
            content:
              "A healthy lifestyle is essential for physical and mental well-being. Eating a balanced diet, regular exercise, and mindfulness can significantly improve overall health...",
          },
          {
            id: 3,
            title: "Exploring the Himalayas",
            img: img3,
            content:
              "Trekking through the Himalayas offers breathtaking views and an unforgettable adventure. From snow-capped peaks to rich cultural experiences, this journey is both challenging and rewarding...",
          },
        ].map((post) => (
          <div key={post.id} className="bg-white shadow-md rounded-lg p-5">
            <img
              src={post.img}
              alt={post.title}
              className="w-full h-40 object-cover rounded-md"
            />
            <h3 className="text-xl font-semibold mt-4">{post.title}</h3>
            <p className="text-gray-600 mt-2">
              {expandedPost === post.id
                ? post.content
                : post.content.slice(0, 60) + "..."}
            </p>
            <button
              className="mt-4 px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700"
              onClick={() => toggleReadMore(post.id)}
            >
              {expandedPost === post.id ? "Read Less" : "Read More"}
            </button>
          </div>
        ))}
      </div>
    </section>

    {/* Categories */}
    <section className="bg-gray-100">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-3xl font-semibold mb-6 text-center">
          Explore Categories
        </h2>
        <div className="flex flex-wrap justify-center gap-4">
          {["Technology", "Lifestyle", "Travel", "Education", "Health"].map(
            (category) => (
              <button
                key={category}
                className="px-6 py-2 bg-gray-300 rounded-md"
              >
                {category}
              </button>
            )
          )}
        </div>
      </div>
    </section>

    {/* Newsletter Signup */}
    <section className="max-w-4xl mx-auto px-6 py-12 text-center">
      <h2 className="text-3xl font-semibold">Join Our Newsletter</h2>
      <p className="text-gray-600 mt-2">
        Stay updated with the latest blogs and insights.
      </p>
      <div className="mt-6 flex flex-col md:flex-row items-center justify-center gap-4">
        <input
          type="email"
          placeholder="Enter your email"
          className="w-full md:w-80 px-4 py-2 border rounded-md"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <button
          className="px-6 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700"
          onClick={handleSubscribe}
        >
          Subscribe
        </button>
      </div>
    </section>
  </div>
);
}
