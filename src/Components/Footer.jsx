import React from "react";
import { FaGithub, FaLinkedin, FaEnvelope, FaPhoneAlt, FaMapMarkerAlt } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-base-200 text-base-content border-t border-base-300">
      <div className="footer container mx-auto px-6 py-16 grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
        <aside className="space-y-4">
          <div className="text-3xl font-black tracking-tighter">
            <span className="text-primary italic">Fresh</span>Up
          </div>
          <p className="text-gray-500 leading-relaxed">
            FreshUp is your trusted partner for organic and farm-fresh groceries. 
            We deliver quality produce straight from local farms to your kitchen.
          </p>
          <div className="flex gap-4 pt-2">
            <a href="https://github.com/MernStackExpert" target="_blank" className="btn btn-circle btn-sm btn-primary shadow-lg shadow-primary/20">
              <FaGithub />
            </a>
            <a href="https://www.linkedin.com/in/mdnirobsarkar/" target="_blank" className="btn btn-circle btn-sm btn-primary shadow-lg shadow-primary/20">
              <FaLinkedin />
            </a>
          </div>
        </aside>

        <nav>
          <h6 className="footer-title text-primary opacity-100 font-bold mb-4">Services</h6>
          <a className="link link-hover mb-2 text-gray-500">Organic Vegetables</a>
          <a className="link link-hover mb-2 text-gray-500">Fresh Fruits</a>
          <a className="link link-hover mb-2 text-gray-500">Dairy & Bakery</a>
          <a className="link link-hover mb-2 text-gray-500">Fast Delivery</a>
        </nav>

        <nav>
          <h6 className="footer-title text-primary opacity-100 font-bold mb-4">Company</h6>
          <a href="/about" className="link link-hover mb-2 text-gray-500">About Us</a>
          <a href="/contact" className="link link-hover mb-2 text-gray-500">Contact Us</a>
          <a className="link link-hover mb-2 text-gray-500">Terms & Conditions</a>
          <a className="link link-hover mb-2 text-gray-500">Privacy Policy</a>
        </nav>

        <nav>
          <h6 className="footer-title text-primary opacity-100 font-bold mb-4">Contact Info</h6>
          <div className="flex items-center gap-3 mb-3 text-gray-500">
            <FaPhoneAlt className="text-primary" />
            <span>01908716502</span>
          </div>
          <div className="flex items-center gap-3 mb-3 text-gray-500">
            <FaEnvelope className="text-primary" />
            <span className="break-all">mdnirob30k@gmail.com</span>
          </div>
          <div className="flex items-center gap-3 mb-3 text-gray-500">
            <FaMapMarkerAlt className="text-primary" />
            <span>Rajshahi, Bangladesh</span>
          </div>
        </nav>
      </div>

      <div className="footer footer-center p-6 bg-base-300 text-base-content border-t border-base-300">
        <aside>
          <p className="font-medium">
            Copyright © {new Date().getFullYear()} - Developed by <span className="text-primary font-bold">MD NIROB SARKAR</span>
          </p>
        </aside>
      </div>
    </footer>
  );
}