import React from "react";
import { useNavigate } from "react-router-dom";

export default function Navbar() {
  const navigate = useNavigate();

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-xl border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-8 py-6 flex items-center justify-between">
        <div
          className="text-2xl font-black tracking-tighter cursor-pointer"
          onClick={() => navigate("/")}
        >
          Σ
        </div>

        <nav className="flex gap-8 text-sm font-medium">
          <button onClick={() => navigate("/")}>Home</button>
          <button onClick={() => navigate("/projects")}>Projects</button>
          <button onClick={() => navigate("/#contact")}>Contact</button>
        </nav>
      </div>
    </header>
  );
}
