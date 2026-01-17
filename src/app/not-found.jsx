"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { FaHome, FaExclamationTriangle } from "react-icons/fa";

export default function NotFound() {
  return (
    <div className="min-h-screen bg-base-100 flex items-center justify-center p-6">
      <div className="text-center">
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ type: "spring", stiffness: 260, damping: 20 }}
          className="text-primary text-9xl font-black mb-4 relative inline-block"
        >
          404
          <motion.div 
            animate={{ rotate: [0, -10, 10, -10, 0] }}
            transition={{ repeat: Infinity, duration: 2 }}
            className="absolute -top-4 -right-8 text-4xl text-warning"
          >
            <FaExclamationTriangle />
          </motion.div>
        </motion.div>

        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="text-3xl md:text-5xl font-black text-base-content uppercase tracking-tight mb-4"
        >
          Oops! Page Not Found
        </motion.h1>

        <motion.p 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
          className="text-gray-500 font-medium mb-10 max-w-md mx-auto"
        >
          The page you are looking for might have been removed, had its name changed, or is temporarily unavailable.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
        >
          <Link 
            href="/" 
            className="btn btn-primary rounded-2xl px-10 h-14 font-black uppercase tracking-widest shadow-xl shadow-primary/20 border-none flex items-center gap-2 group mx-auto w-fit"
          >
            <FaHome className="group-hover:-translate-y-1 transition-transform" />
            Back to Home
          </Link>
        </motion.div>
      </div>
    </div>
  );
}