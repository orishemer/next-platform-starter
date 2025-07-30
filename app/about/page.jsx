// src/app/about/page.jsx
import Image from 'next/image';
import ModelViewer from '../../components/ModelViewer'; // Import the new component

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
            src="/images/your-photo.jpg"
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
            **Skills:** HTML5, CSS3, JavaScript, React, Next.js, Node.js, Photoshop, Figma, 3D Modeling, etc.
          </p>

          {/* Add the ModelViewer component here */}
          <div style={{ marginTop: '50px', width: '100%', display: 'flex', justifyContent: 'center' }}>
            <h3>Interactive 3D Model of [Your Model's Name/Purpose]</h3>
          </div>
          <ModelViewer
            modelPath="/fullCurrent.glb" // Path to your GLB file in the public folder
            width="80%" // Example width
            height="600px" // Example height
          />

        </div>
      </div>
    </section>
  );
}