// src/app/projects/page.js
import Image from 'next/image';
import Link from 'next/link';

export const metadata = {
  title: 'Projects - Ori Shemer',
  description: 'A collection of projects developed by Ori Shemer.',
};

function ProjectCard({ title, description, imageUrl, projectUrl }) {
  return (
    <div className="project-item">
      <Image src={imageUrl} alt={title} width={400} height={250} />
      <h3>{title}</h3>
      <p>{description}</p>
      <Link href={projectUrl} target="_blank" rel="noopener noreferrer" className="btn">
        View Project
      </Link>
    </div>
  );
}

export default function ProjectsPage() {
  const projects = [
    {
      id: 1,
      title: 'Project Name 1',
      description: 'A brief description of Project 1, technologies used, and challenges solved.',
      imageUrl: '/images/project1.jpg', // Path to image in public/images
      projectUrl: 'https://example.com/project1',
    },
    {
      id: 2,
      title: 'Project Name 2',
      description: 'A brief description of Project 2, technologies used, and challenges solved.',
      imageUrl: '/images/project2.jpg',
      projectUrl: 'https://example.com/project2',
    },
    // Add more projects here
  ];

  return (
    <section id="projects" className="projects-section">
      <div className="container">
        <h2>My Projects</h2>
        <div className="project-grid">
          {projects.map((project) => (
            <ProjectCard key={project.id} {...project} />
          ))}
        </div>
      </div>
    </section>
  );
}