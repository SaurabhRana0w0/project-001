
import React from "react";
import { Heart } from "lucide-react";

const Footer = () => {
  return <footer className="w-full bg-white py-0">
      <div className="section-container">
        <p className="text-center text-gray-600 text-sm">
          This template takes inspiration from{" "}
          <a href="https://x.com/BrettFromDJ" target="_blank" rel="noopener noreferrer" className="text-pulse-500 hover:underline">
            DesignJoy's
          </a>{" "}
          BUILD WARS design, built entirely with Lovable by{" "}
          <a href="https://x.com/rezaul_arif" target="_blank" rel="noopener noreferrer" className="text-pulse-500 hover:underline">
            Rezaul Arif
          </a>
        </p>
        <p className="text-center text-gray-600 text-sm mt-2">
          Made by SaurabhRana0w0 with <Heart className="inline h-4 w-4 text-red-500" />
        </p>
      </div>
    </footer>;
};

export default Footer;
