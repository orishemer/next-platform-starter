// src/app/layout.js
import './globals.css';
import Link from 'next/link';

export const metadata = {
  title: 'My Portfolio - Ori Shemer',
  description: 'A personal portfolio showcasing my work and skills.',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en"> {/* Changed language to English */}
      <body>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}

function Header() {
  return (
    <header className="main-header">
      <div className="container">
        <Link href="/" className="site-title">
          Ori Shemer
        </Link>
        <nav className="main-nav">
          <ul>
            <li>
              <Link href="/">Home</Link>
            </li>
            <li>
              <Link href="/about">About</Link>
            </li>
            <li>
              <Link href="/projects">Projects</Link>
            </li>
            <li>
              <Link href="/contact">Contact</Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}

function Footer() {
  return (
    <footer className="main-footer">
      <div className="container">
        <p>&copy; {new Date().getFullYear()} Ori Shemer. All rights reserved.</p>
      </div>
    </footer>
  );
}