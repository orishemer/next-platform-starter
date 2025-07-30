// src/app/layout.js
import './globals.css';
import Link from 'next/link';

export const metadata = {
  title: 'הפורטפוליו של אורי',
  description: 'פורטפוליו אישי המציג את עבודותיי וכישורי',
};

export default function RootLayout({ children }) {
  return (
    <html lang="he">
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
          [השם שלך]
        </Link>
        <nav className="main-nav">
          <ul>
            <li>
              <Link href="/">בית</Link>
            </li>
            <li>
              <Link href="/about">אודותיי</Link>
            </li>
            <li>
              <Link href="/projects">פרויקטים</Link>
            </li>
            <li>
              <Link href="/contact">צור קשר</Link>
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
        <p>&copy; {new Date().getFullYear()} [השם שלך]. כל הזכויות שמורות.</p>
      </div>
    </footer>
  );
}