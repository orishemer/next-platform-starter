// src/app/page.js
import Image from 'next/image';
import Link from 'next/link';

export default function HomePage() {
  return (
    <section id="home" className="hero-section">
      <div className="container">
        <h2>ברוכים הבאים לפורטפוליו שלי</h2>
        <p className="tagline">
          אני [התפקיד שלך, לדוגמה: מפתח ווב | מעצב גרפי | אמן דיגיטלי]
        </p>
        <Link href="/projects" className="btn">
          צפה בעבודות שלי
        </Link>
        <Link href="/contact" className="btn filled" style={{ marginRight: '15px' }}> {/* רווח בין כפתורים */}
          צור קשר
        </Link>
      </div>
    </section>
  );
}