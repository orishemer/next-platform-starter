// src/app/page.js
import Image from 'next/image';
import Link from 'next/link';

export default function HomePage() {
  return (
    <section id="home" className="hero-section">
      <div className="container">
        <h2>Hi! Welcom to my portfolio</h2>
        <p className="tagline">
          im a designer and developer.
        </p>
        <Link href="/projects" className="btn">
          my projects
        </Link>
        <Link href="/contact" className="btn filled" style={{ marginRight: '15px' }}> {/* רווח בין כפתורים */}
          contact me 
        </Link>
      </div>
    </section>
  );
}