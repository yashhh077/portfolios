import React from "react";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer className="bg-black pt-20 text-gray-300 ">
      <div className="max-w-6xl mx-auto px-6 md:px-12 grid grid-cols-1 md:grid-cols-4 gap-10 pb-10 border-b border-gray-700">
        <div>
          <p className="text-lg font-medium leading-relaxed text-white">
            Transforming innovative ideas into seamless digital experiences.
            Specializing in crafting responsive, user-centric solutions.
          </p>
        </div>

        {/* Products */}
        <div>
          <h3 className="text-white font-semibold mb-4">Products</h3>
          <ul className="space-y-2">
            <li>
              <Link to="#">Web Apps</Link>
            </li>
            <li>
              <Link to="#">Features</Link>
            </li>
            <li>
              <Link to="#">Pricing</Link>
            </li>
            <li>
              <Link to="#">Integrations</Link>
            </li>
            <li>
              <Link to="#">Changing</Link>
            </li>
          </ul>
        </div>

        {/* Services */}
        <div>
          <h3 className="text-white font-semibold mb-4">Services</h3>
          <ul className="space-y-2">
            <li>
              <Link to="#">Web Development</Link>
            </li>
            <li>
              <Link to="#">Design</Link>
            </li>
            <li>
              <Link to="#">Support</Link>
            </li>
            <li>
              <Link to="#">Hosting</Link>
            </li>
          </ul>
        </div>

        {/* Company */}
        <div>
          <h3 className="text-white font-semibold mb-4">Company</h3>
          <ul className="space-y-2">
            <li>
              <Link to="/about">About Us</Link>
            </li>
            <li>
              <Link to="#">Careers</Link>
            </li>
            <li>
              <Link to="/contact">Contact Us</Link>
            </li>
          </ul>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="max-w-6xl mx-auto px-6 md:px-12 py-6 flex flex-col md:flex-row justify-between items-center text-sm border-t border-gray-700">
        <p className="mb-4 md:mb-0 text-gray-400">
          © 2025 yashmahulkar. All rights reserved.
        </p>
        <div className="flex gap-6">
          <Link to="#">Privacy Policy</Link>
          <Link to="#">Terms of Service</Link>
          <Link to="#">Cookies Settings</Link>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
