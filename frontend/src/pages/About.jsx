import React from "react";
import { NavLink } from "react-router-dom";

function About() {
  return (
    <main>
      <section className="py-12 bg-gradient-to-b from-blue-50 to-emerald-50">
        <div className="container mx-auto px-6 md:px-12 grid md:grid-cols-2 gap-10 items-center">
          {/* Text Content */}
          <div className="space-y-5">
            <h1 className="text-4xl font-extrabold text-emerald-700">Why Choose Us?</h1>
            <p className="text-gray-700 text-lg">
              Expertise: Our team consists of experienced IT professionals who
              are passionate about staying up-to-date with the latest industry
              trends.
            </p>
            <p className="text-gray-700 text-lg">
              Customization: We understand that every business is unique.
              That's why we create solutions that are tailored to your specific
              needs and goals.
            </p>
            <p className="text-gray-700 text-lg">
              Customer-Centric Approach: We prioritize your satisfaction and
              provide top-notch support to address your IT concerns.
            </p>
            <p className="text-gray-700 text-lg">
              Affordability: We offer competitive pricing without compromising
              on the quality of our services.
            </p>
            <p className="text-gray-700 text-lg">
              Reliability: Count on us to be there when you need us. We're
              committed to ensuring your IT environment is reliable and
              available 24/7.
            </p>

            <div className="flex space-x-4 mt-6">
              <NavLink to="/contact">
                <button className="bg-emerald-600 text-white px-6 py-2 rounded-md font-semibold hover:bg-emerald-700 transition">
                  Connect Now
                </button>
              </NavLink>
              <button className="bg-white text-emerald-600 border border-emerald-600 px-6 py-2 rounded-md font-semibold hover:bg-emerald-600 hover:text-white transition">
                Learn More
              </button>
            </div>
          </div>

          {/* Image */}
          <div className="flex justify-center">
            <img
              src="./about.png"
              alt="coding buddies"
              className="w-full max-w-md rounded-lg"
              width="400"
              height="500"
            />
          </div>
        </div>
      </section>
    </main>
  );
}

export default About;

