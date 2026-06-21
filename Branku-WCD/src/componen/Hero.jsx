import { useState } from 'react';

function Hero() {
  const [counter, setCounter] = useState(0);

  const handleClick = () => {
    const newCount = counter + 1;
    setCounter(newCount);
  };

  return (
    <section className="bg-[#f8faff] py-24 px-6 text-center">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-6 tracking-tight">
          Solusi Terbaik untuk Bisnismu
        </h1>
        <p className="text-lg text-gray-500 mb-10 max-w-xl mx-auto leading-relaxed">
          Platform all-in-one untuk manajemen, pemasaran, dan pertumbuhan bisnis kecil.
        </p>
        <button
          onClick={handleClick}
          className={`bg-[#3b82f6] hover:bg-blue-700 text-white font-semibold py-3 px-8 rounded-full transition duration-300 ${
            counter >= 2 ? 'hidden' : ''
          }`}
        >
          Mulai Gratis
        </button>
        {counter >= 1 && (
          <p className="mt-6 text-blue-600 font-semibold text-lg">
            clicked
          </p>
        )}
      </div>
    </section>
  );
}

export default Hero;
