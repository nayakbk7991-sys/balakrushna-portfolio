import "./App.css"

function App() {
  return (
    <div>
      <nav className="navbar">
        <h2>Balakrushna Nayak</h2>

        <div className="nav-links">
          <a href="#home">Home</a>
          <a href="#about">About</a>
          <a href="#skills">Skills</a>
          <a href="#projects">Projects</a>
          <a href="#contact">Contact</a>
        </div>
      </nav>

      <section id="home" className="hero-section">
        <div className="hero-content">
          <p className="welcome-text">WELCOME TO MY PORTFOLIO</p>

          <h1>Hi, I'm Balakrushna Nayak</h1>

          <h2>Frontend Developer</h2>

          <p>
            I build responsive, user-friendly and modern web applications
            using HTML, CSS, JavaScript, React and Bootstrap.
          </p>

          <div className="hero-buttons">
            <a href="#projects" className="primary-button">
              View My Projects
            </a>

            <a href="#contact" className="secondary-button">
              Contact Me
            </a>
          </div>

          <div className="social-links">
            <a
              href="https://github.com/nayakbk7991-sys"
              target="_blank"
              rel="noreferrer"
            >
              <i className="fa-brands fa-github"></i>
            </a>

            <a
              href="https://www.linkedin.com/in/balakrushna-nayak-a50b90319/"
              target="_blank"
              rel="noreferrer"
            >
              <i className="fa-brands fa-linkedin"></i>
            </a>

            <a href="mailto:nayakbk7991@gmail.com">
              <i className="fa-solid fa-envelope"></i>
            </a>
          </div>
        </div>

        <div className="hero-image">
          <img src="/my-portfolio.jpg" alt="Balakrushna Nayak" />
        </div>
      </section>

      <section id="about" className="about-section">
        <h2>About Me</h2>

        <div className="about-content">
          <p>
            I am a Frontend Developer with a background in Computer Science
            and hands-on experience building responsive and user-friendly web
            applications.
          </p>

          <p>
            I work with HTML, CSS, JavaScript, React, Bootstrap, Git and
            GitHub. I enjoy creating modern user interfaces, working with
            APIs, debugging applications, and turning ideas into functional
            web experiences.
          </p>

          <p>
            I have built projects including ShopSphere, KrishGooo Travel, and
            Login Manager. I am continuously improving my frontend development
            skills and currently looking for opportunities to start and grow
            my career as a Frontend Developer.
          </p>
        </div>
      </section>

      <section id="skills" className="skills-section">
        <h2>Skills</h2>

        <div className="skills-container">
          <div className="skill-card">
            <i className="fa-brands fa-html5"></i>
            <h3>HTML</h3>
          </div>

          <div className="skill-card">
            <i className="fa-brands fa-css3-alt"></i>
            <h3>CSS</h3>
          </div>

          <div className="skill-card">
            <i className="fa-brands fa-js"></i>
            <h3>JavaScript</h3>
          </div>

          <div className="skill-card">
            <i className="fa-brands fa-react"></i>
            <h3>React</h3>
          </div>

          <div className="skill-card">
            <i className="fa-brands fa-bootstrap"></i>
            <h3>Bootstrap</h3>
          </div>

          <div className="skill-card">
            <i className="fa-brands fa-git-alt"></i>
            <h3>Git</h3>
          </div>

          <div className="skill-card">
            <i className="fa-brands fa-github"></i>
            <h3>GitHub</h3>
          </div>

          <div className="skill-card">
            <i className="fa-brands fa-node-js"></i>
            <h3>Node.js</h3>
          </div>

          <div className="skill-card">
            <i className="fa-solid fa-server"></i>
            <h3>REST API</h3>
          </div>

          <div className="skill-card">
            <i className="fa-solid fa-mobile-screen"></i>
            <h3>Responsive Design</h3>
          </div>

          <div className="skill-card">
            <i className="fa-solid fa-bolt"></i>
            <h3>Vite</h3>
          </div>

          <div className="skill-card">
            <i className="fa-solid fa-font"></i>
            <h3>Font Awesome</h3>
          </div>
        </div>
      </section>

      <section id="projects" className="projects-section">
        <h2>My Projects</h2>

        <p className="section-description">
          A selection of frontend projects I have built using modern web
          technologies.
        </p>

        <div className="projects-container">
          <div className="project-card">
            <div className="project-icon">
              <i className="fa-solid fa-cart-shopping"></i>
            </div>

            <h3>ShopSphere</h3>

            <p className="project-tech">
              React | JavaScript | CSS | Vite
            </p>

            <p>
              A responsive e-commerce application featuring product listing,
              search, filtering, sorting, wishlist, shopping cart, checkout
              and localStorage functionality.
            </p>

            <div className="project-links">
              <a
                href="https://nayakbk7991-sys.github.io/ShopSphere/"
                target="_blank"
                rel="noreferrer"
                className="project-link"
              >
                Live Demo
                <i className="fa-solid fa-arrow-up-right-from-square"></i>
              </a>

              <a
                href="https://github.com/nayakbk7991-sys/ShopSphere"
                target="_blank"
                rel="noreferrer"
                className="project-link"
              >
                GitHub
                <i className="fa-brands fa-github"></i>
              </a>
            </div>
          </div>

          <div className="project-card">
            <div className="project-icon">
              <i className="fa-solid fa-bus"></i>
            </div>

            <h3>KrishGooo Travel</h3>

            <p className="project-tech">
              HTML | CSS | JavaScript
            </p>

            <p>
              A bus travel booking interface featuring route selection, bus
              listings, seat selection, passenger details and booking summary.
            </p>

            <div className="project-links">
              <a
                href="https://github.com/nayakbk7991-sys/KrishGooo-the-traveling-web-page"
                target="_blank"
                rel="noreferrer"
                className="project-link"
              >
                GitHub
                <i className="fa-brands fa-github"></i>
              </a>
            </div>
          </div>

          <div className="project-card">
            <div className="project-icon">
              <i className="fa-solid fa-right-to-bracket"></i>
            </div>

            <h3>Login Manager</h3>

            <p className="project-tech">
              HTML | CSS | JavaScript
            </p>

            <p>
              A login interface with email and password validation,
              show-password functionality and user-friendly success and error
              messages.
            </p>

            <div className="project-links">
              <a
                href="https://github.com/nayakbk7991-sys/Login-manager_js"
                target="_blank"
                rel="noreferrer"
                className="project-link"
              >
                GitHub
                <i className="fa-brands fa-github"></i>
              </a>
            </div>
          </div>
        </div>
      </section>

      <section id="contact" className="contact-section">
        <h2>Let's Connect</h2>

        <p>
          I'm currently open to frontend development opportunities,
          collaborations and professional connections.
        </p>

        <div className="contact-links">
          <a href="mailto:nayakbk7991@gmail.com">
            <i className="fa-solid fa-envelope"></i>
            <span>
              <strong>Email</strong>
              <small>nayakbk7991@gmail.com</small>
            </span>
          </a>

          <a
            href="https://github.com/nayakbk7991-sys"
            target="_blank"
            rel="noreferrer"
          >
            <i className="fa-brands fa-github"></i>
            <span>
              <strong>GitHub</strong>
              <small>View my projects</small>
            </span>
          </a>

          <a
            href="https://www.linkedin.com/in/balakrushna-nayak-a50b90319/"
            target="_blank"
            rel="noreferrer"
          >
            <i className="fa-brands fa-linkedin"></i>
            <span>
              <strong>LinkedIn</strong>
              <small>Connect with me</small>
            </span>
          </a>
        </div>
      </section>

      <footer className="footer">
        <h3>Balakrushna Nayak</h3>

        <p>Frontend Developer | Building modern web experiences</p>

        <div className="footer-social">
          <a
            href="https://github.com/nayakbk7991-sys"
            target="_blank"
            rel="noreferrer"
          >
            <i className="fa-brands fa-github"></i>
          </a>

          <a
            href="https://www.linkedin.com/in/balakrushna-nayak-a50b90319/"
            target="_blank"
            rel="noreferrer"
          >
            <i className="fa-brands fa-linkedin"></i>
          </a>

          <a href="mailto:nayakbk7991@gmail.com">
            <i className="fa-solid fa-envelope"></i>
          </a>
        </div>

        <p>© 2026 Balakrushna Nayak. All Rights Reserved.</p>
      </footer>
    </div>
  )
}

export default App