import Hero from './componen/Hero';
import CardGrid from './componen/CardGrid';

function App() {
  return (
    <>
      <header className="w-full bg-white px-8 md:px-16 py-5">
        <div className="w-full flex justify-between items-center">
          <h1 className="text-[#2563eb] text-2xl font-bold tracking-tight">BrandKu</h1>

          <nav className="hidden md:flex space-x-8 text-sm font-medium text-gray-600">
            <a href="#" className="hover:text-gray-900 transition-colors">Beranda</a>
            <a href="#" className="hover:text-gray-900 transition-colors">Fitur</a>
            <a href="#" className="hover:text-gray-900 transition-colors">Harga</a>
          </nav>
        </div>
      </header>

      <main>
        <Hero />
        <CardGrid />
      </main>

      <footer className="py-8 text-center text-gray-400 text-sm border-t border-gray-100 bg-gray-900">
        <p>&copy; 2025 BrandKu. All rights reserved.</p>
      </footer>
    </>
  );
}

export default App;
