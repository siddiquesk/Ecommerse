import React from "react";

function Footer() {
  return (
    <footer className="bg-emerald-700 text-white py-8">
      <div className="container mx-auto px-6 flex flex-col md:flex-row justify-between gap-6 items-center text-center md:text-left">

        {/* Organization Info */}
        <div className="md:w-1/2">
          <h2 className="text-lg font-semibold mb-2">Sufiyan Web Foundation</h2>
          <p className="text-sm">
            Empowering lives through technology and education. We are committed to building a brighter, more inclusive digital future for everyone.
          </p>
        </div>

        {/* Footer Links */}
        <nav className="md:w-1/2 flex flex-col sm:flex-row gap-4 justify-center md:justify-end text-sm">
          <a href="/" className="hover:text-yellow-300 transition">Home</a>
          <a href="/about" className="hover:text-yellow-300 transition">About Us</a>
          <a href="/services" className="hover:text-yellow-300 transition">Our Work</a>
          <a href="/contact" className="hover:text-yellow-300 transition">Get Involved</a>
        </nav>
      </div>

      {/* Bottom Copyright */}
      <div className="mt-6 text-center text-xs text-white/80">
        &copy; {new Date().getFullYear()} Sufiyan Web Foundation. All rights reserved.
      </div>
    </footer>
  );
}

export default Footer;



