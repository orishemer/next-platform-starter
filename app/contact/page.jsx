// src/app/contact/page.js
export const metadata = {
  title: 'Contact - Ori Shemer',
  description: 'Ways to get in touch with Ori Shemer.',
};

export default function ContactPage() {
  return (
    <section id="contact" className="contact-section">
      <div className="container">
        <h2>Contact Me</h2>
        <p>I'd love to hear from you! You can reach me through the following:</p>
        <div className="contact-info">
          <p>
            <strong>Email:</strong>{' '}
            <a href="mailto:your.email@example.com">your.email@example.com</a>
          </p>
          <p>
            <strong>LinkedIn:</strong>{' '}
            <a href="https://linkedin.com/in/yourprofile" target="_blank" rel="noopener noreferrer">
              linkedin.com/in/[your-profile]
            </a>
          </p>
          <p>
            <strong>GitHub:</strong>{' '}
            <a href="https://github.com/yourusername" target="_blank" rel="noopener noreferrer">
              github.com/[your-username]
            </a>
          </p>
        </div>
        {/* You can add a basic contact form here, or a link to an external form like Google Forms */}
      </div>
    </section>
  );
}