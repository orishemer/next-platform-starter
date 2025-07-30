// src/app/about/page.js
import Image from 'next/image';

export const metadata = {
  title: 'about me - ori shemer',
  description: 'מידע על [השם שלך], כישוריו וניסיונו.',
};

export default function AboutPage() {
  return (
    <section id="about" className="about-section">
      <div className="container">
        <h2>about</h2>
        <div className="about-content">
          <Image
            src="/images/your-photo.jpg" // וודא שהתמונה נמצאת בתיקיית public/images
            alt="התמונה שלך"
            width={250}
            height={250}
            className="profile-photo"
            priority
          />
          <p>
            כאן תוכל לכתוב על עצמך - מי אתה, מהם תחומי העניין שלך, מה מניע אותך, ומהם
            הכישורים העיקריים שלך. לדוגמה: "אני [שם], [תפקיד] עם ניסיון ב[תחומים ספציפיים].
            אני מתמחה ב[כישורי מפתח] ואוהב לפתור בעיות מורכבות תוך יצירת חוויות משתמש מרשימות.
            בפורטפוליו זה תוכלו להתרשם ממגוון הפרויקטים שלי."
          </p>
          <p>
            **כישורים:** HTML5, CSS3, JavaScript, React, Next.js, Node.js, Photoshop, Figma, וכו'.
          </p>
        </div>
      </div>
    </section>
  );
}