// src/app/about/page.jsx
import Image from 'next/image';

export const metadata = {
  title: 'About - Ori Shemer',
  description: 'Information about Ori Shemer, their skills, and experience.',
};

export default function AboutPage() {
  return (
    <section id="about" className="about-section">
      <div className="container">
        <h2>About Me</h2>
        <div className="about-content">
          <Image
            src="/images/your-photo.jpg" // Ensure this image is in public/images folder
            alt="Your Photo"
            width={250}
            height={250}
            className="profile-photo"
            priority
          />
          <p>
            Here you can write about yourself - who you are, what your interests are,
            what drives you, and what your core skills are. For example: &quot;I&apos;m Ori Shemer,
            a [Your Profession] with experience in [specific fields]. I specialize in
            [key skills] and love solving complex problems while creating impressive user experiences.
            In this portfolio, you can explore a variety of my projects.&quot;
          </p>
          <p>
            **Skills:** HTML5, CSS3, JavaScript, React, Next.js, Node.js, Photoshop, Figma, etc.
          </p>
        </div>
      </div>
    </section>
  );
}