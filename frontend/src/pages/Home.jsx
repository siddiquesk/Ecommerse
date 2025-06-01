import React from 'react';
import { Link } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

function Home() {
  const { user } = useAuth();

  return (
    <>
      {/* Hero Section */}
      <section className="bg-emerald-50 py-12">
        <div className="container mx-auto px-6 md:px-16 flex flex-col-reverse md:flex-row items-center justify-between gap-12">
          {/* Left Content */}
          <div className="md:w-1/2 text-center md:text-left">
            <p className="text-lg text-red-400 font-semibold mb-2">
              Hi, I am {user?.username || "sufiayn siddique"},
            </p>
            <p className="text-lg text-emerald-600 font-semibold mb-2">
              We are the World Best IT Company
            </p>
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Welcome to <span className="text-emerald-700">Sufiyan Web</span>
            </h1>
            <p className="text-gray-700 mb-6">
              Are you ready to take your business to the next level with
              cutting-edge IT solutions? Look no further! At Sufiyan Web,
              we specialize in providing innovative IT services and solutions
              tailored to meet your unique needs.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
              <Link to="/contact">
                <button className="bg-emerald-700 text-white px-6 py-2 rounded-full hover:bg-emerald-800 transition">
                  Connect Now
                </button>
              </Link>
              <Link to="/services">
                <button className="border border-emerald-700 text-emerald-700 px-6 py-2 rounded-full hover:bg-emerald-700 hover:text-white transition">
                  Learn More
                </button>
              </Link>
            </div>
          </div>

          {/* Right Image */}
          <div className="md:w-1/2 flex justify-center">
            <img
              src="./home.png"
              alt="coding together"
              className="w-full max-w-xs sm:max-w-sm md:max-w-md h-auto object-contain"
            />
          </div>
        </div>
      </section>

      {/* Support Sections */}

      {/* Section 1 */}
      <section className="py-12 mb-4 bg-white">
        <div className="container mx-auto px-6 md:px-16 flex flex-col md:flex-row items-center justify-between gap-[13rem]">
          <div className="md:w-1/2 flex justify-center">
            <img
              src="./design.png"
              alt="coding together"
              className="w-full max-w-xs sm:max-w-sm md:max-w-md h-auto object-contain"
            />
          </div>
          <div className="md:w-1/2 text-center md:text-left">
            <p className="text-lg text-emerald-600 font-semibold mb-2">We are here to help you</p>
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Get Started <span className="text-emerald-700">Today</span>
            </h1>
            <p className="text-gray-700 mb-6">
              Ready to take the first step towards a more efficient and secure
              IT infrastructure? Contact us today for a free consultation and
              let's discuss how Sufiyan Web can help your business thrive in
              the digital age.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
              <Link to="/contact">
                <button className="bg-emerald-700 text-white px-6 py-2 rounded-full hover:bg-emerald-800 transition">
                  Connect Now
                </button>
              </Link>
              <Link to="/services">
                <button className="border border-emerald-700 text-emerald-700 px-6 py-2 rounded-full hover:bg-emerald-700 hover:text-white transition">
                  Learn More
                </button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Section 2 */}
      <section className="py-12 ml-12 mb-4 bg-white">
        <div className="container mx-auto px-6 md:px-16 flex flex-col md:flex-row items-center justify-between gap-12">
          <div className="md:w-1/2 text-center md:text-left">
            <p className="text-lg text-emerald-600 font-semibold mb-2">We’re always here to support you</p>
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Start Making a <span className="text-emerald-700">Difference Today</span>
            </h1>
            <p className="text-gray-700 mb-6">
              Our organization is committed to uplifting communities through education,
              healthcare, and empowerment. Whether it’s helping children go to school,
              supporting families in need, or empowering women through skill development —
              your contribution can create real change. Join us in building a better tomorrow.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
              <Link to="/contact">
                <button className="bg-emerald-700 text-white px-6 py-2 rounded-full hover:bg-emerald-800 transition">
                  Contact Us
                </button>
              </Link>
              <Link to="/services">
                <button className="border border-emerald-700 text-emerald-700 px-6 py-2 rounded-full hover:bg-emerald-700 hover:text-white transition">
                  Learn More
                </button>
              </Link>
            </div>
          </div>
          <div className="md:w-1/2 flex justify-center">
            <img
              src="./info.png"
              alt="help and support"
              className="w-full max-w-xs sm:max-w-sm md:max-w-md h-auto object-contain"
            />
          </div>
        </div>
      </section>

      {/* Section 3 */}
      <section className="py-12 mr-6 mb-4 bg-white">
        <div className="container mx-auto px-6 md:px-16 flex flex-col md:flex-row items-center justify-between gap-12">
          <div className="md:w-1/2 flex justify-center">
            <img
              src="./support.png"
              alt="help and support"
              className="w-full max-w-xs sm:max-w-sm md:max-w-md h-auto object-contain"
            />
          </div>
          <div className="md:w-1/2 text-center md:text-left">
            <p className="text-lg text-emerald-600 font-semibold mb-2">Together, we can uplift lives</p>
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Be the <span className="text-emerald-700">Support</span> Someone Needs
            </h1>
            <p className="text-gray-700 mb-6">
              At our foundation, we believe that no one should face challenges alone.
              Whether it's providing food, education, medical help, or emotional care—
              every small act of kindness makes a big impact. With your help, we can reach
              more lives and spread hope where it's needed the most. Join us in creating a
              more compassionate world.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
              <Link to="/contact">
                <button className="bg-emerald-700 text-white px-6 py-2 rounded-full hover:bg-emerald-800 transition">
                  Contact Us
                </button>
              </Link>
              <Link to="/services">
                <button className="border border-emerald-700 text-emerald-700 px-6 py-2 rounded-full hover:bg-emerald-700 hover:text-white transition">
                  Learn More
                </button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Section 4 */}
      <section className="py-12 ml-12 mb-4 bg-white">
        <div className="container mx-auto px-6 md:px-16 flex flex-col md:flex-row items-center justify-between gap-12">
          <div className="md:w-1/2 text-center md:text-left">
            <p className="text-lg text-emerald-600 font-semibold mb-2">Empowering Lives Through Technology</p>
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Tech for <span className="text-emerald-700">Good</span>
            </h1>
            <p className="text-gray-700 mb-6">
              We are a purpose-driven organization using the power of technology to uplift
              communities and individuals. From digital education and skill development
              to AI-powered solutions for health and support — our mission is to make a
              meaningful difference in people’s lives. Together, we can create a smarter,
              more inclusive future for all.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
              <Link to="/contact">
                <button className="bg-emerald-700 text-white px-6 py-2 rounded-full hover:bg-emerald-800 transition">
                  Get Involved
                </button>
              </Link>
              <Link to="/services">
                <button className="border border-emerald-700 text-emerald-700 px-6 py-2 rounded-full hover:bg-emerald-700 hover:text-white transition">
                  See Our Work
                </button>
              </Link>
            </div>
          </div>
          <div className="md:w-1/2 flex justify-center">
            <img
              src="./ai.png"
              alt="help and support"
              className="w-full max-w-xs sm:max-w-sm md:max-w-md h-auto object-contain"
            />
          </div>
        </div>
      </section>
    </>
  );
}

export default Home;

