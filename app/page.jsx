// src/app/page.js
import Image from 'next/image';
import Link from 'next/link';

export default function HomePage() {
  return (
    <section id="home" className="hero-section">
      <div className="container">
        <h2>Welcome to My Portfolio</h2>
        <p className="tagline">
          I'm a [Your Profession, e.g.: Web Developer | Graphic Designer | Digital Artist]
        </p>
        <Link href="/projects" className="btn">
          View My Work
        </Link>
        <Link href="/contact" className="btn filled" style={{ marginLeft: '15px' }}> {/* Adjusted for LTR margin */}
          Contact Me
        </Link>
      </div>
    </section>
  );
}