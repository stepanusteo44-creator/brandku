import { useState } from 'react'
import './App.css'

export default function App() {
  const [counter, setCounter] = useState(0)

  const handleClick = () => {
    const next = counter + 1
    setCounter(next)
  }

  return (
    <>
      <header className="header">
        <div className="wrapper nav">
          <h1 className="logo">BrandKu</h1>
          <nav className="menu">
            <a href="#">Beranda</a>
            <a href="#">Fitur</a>
            <a href="#">Harga</a>
          </nav>
        </div>
      </header>

      <main>
        <section className="hero">
          <div className="wrapper hero-box">
            <h1>Solusi Terbaik untuk Bisnismu</h1>
            <p>Platform all-in-one untuk manajemen, pemasaran, dan pertumbuhan bisnis kecil.</p>

            {counter < 2 && (
              <button onClick={handleClick}>Mulai Gratis</button>
            )}

            {counter >= 1 && <p className="info">clicked</p>}
          </div>
        </section>

        <section className="why">
          <div className="wrapper">
            <h2>Mengapa BrandKu?</h2>

            <div className="grid">
              <article className="card"><div>⚡</div><h3>Mudah Digunakan</h3><p>Tidak perlu keahlian teknis. Setup dalam 5 menit.</p></article>
              <article className="card"><div>🤖</div><h3>Serba Otomatis</h3><p>Otomatiskan tugas berulang dan fokus pada hal yang penting.</p></article>
              <article className="card"><div>📊</div><h3>Laporan Real-time</h3><p>Pantau performa bisnismu kapan saja dan di mana saja.</p></article>
            </div>
          </div>
        </section>
      </main>

      <footer><p>© 2025 BrandKu. All rights reserved.</p></footer>
    </>
  )
}
