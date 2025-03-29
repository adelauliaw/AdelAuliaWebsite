import React, { useState, useEffect } from 'react';

export default function FancySplash() {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    // Setelah 3 detik, splash hilang (fade out)
    const timer = setTimeout(() => {
      setVisible(false);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div
      className={`
        fixed inset-0 z-50
        flex items-center justify-center
        transition-opacity duration-700
        ${visible ? 'opacity-100' : 'opacity-0 pointer-events-none'}

        // Inilah background gradient multi-stop
        bg-[linear-gradient(180deg,#000000_0%,#222222_30%,#0c0c59_60%,#81d4fa_100%)]
      `}
    >
      <div className="relative text-white text-4xl font-bold uppercase tracking-widest">
        Adel Aulia

        {/* Coretan di belakang teks (bisa animasi jika Anda mau) */}
        <div className="absolute inset-0 flex items-center justify-center scribble-animation">
          <svg
            className="w-64 h-16 text-white"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            viewBox="0 0 200 50"
          >
            {/* Path pertama (coretan) */}
            <path d="M10 20c30-10 70 10 90 0 20-10 60-20 90 0" />
            {/* Path kedua (coretan) */}
            <path d="M10 30c30-10 70 10 90 0 20-10 60-20 90 0" />
          </svg>
        </div>
      </div>
    </div>
  );
}
