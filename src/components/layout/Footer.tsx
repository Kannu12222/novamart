import {
  FaFacebookF,
  FaInstagram,
  FaTwitter,
  FaYoutube,
} from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-black text-white px-16 py-20 border-t border-gray-800">

      <div className="grid grid-cols-1 md:grid-cols-4 gap-12">

        {/* BRAND */}
        <div>

          <h1 className="text-4xl font-extrabold bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500 text-transparent bg-clip-text">
            NovaMart
          </h1>

          <p className="text-gray-400 mt-6 leading-7">
            Futuristic AI-powered shopping experience built for modern lifestyles.
          </p>

        </div>

        {/* LINKS */}
        <div>

          <h2 className="text-2xl font-bold mb-6">
            Quick Links
          </h2>

          <div className="flex flex-col gap-4 text-gray-400">

            <a href="#">Home</a>
            <a href="#">Products</a>
            <a href="#">Deals</a>
            <a href="#">Categories</a>

          </div>

        </div>

        {/* SUPPORT */}
        <div>

          <h2 className="text-2xl font-bold mb-6">
            Support
          </h2>

          <div className="flex flex-col gap-4 text-gray-400">

            <a href="#">Help Center</a>
            <a href="#">Privacy Policy</a>
            <a href="#">Terms & Conditions</a>
            <a href="#">Contact Us</a>

          </div>

        </div>

        {/* SOCIALS */}
        <div>

          <h2 className="text-2xl font-bold mb-6">
            Follow Us
          </h2>

          <div className="flex gap-5">

            <button className="bg-gray-900 p-4 rounded-full hover:bg-pink-500 transition">
              <FaFacebookF />
            </button>

            <button className="bg-gray-900 p-4 rounded-full hover:bg-pink-500 transition">
              <FaInstagram />
            </button>

            <button className="bg-gray-900 p-4 rounded-full hover:bg-pink-500 transition">
              <FaTwitter />
            </button>

            <button className="bg-gray-900 p-4 rounded-full hover:bg-pink-500 transition">
              <FaYoutube />
            </button>

          </div>

        </div>

      </div>

      <div className="border-t border-gray-800 mt-16 pt-8 text-center text-gray-500">
        © 2026 NovaMart. All rights reserved.
      </div>

    </footer>
  );
}