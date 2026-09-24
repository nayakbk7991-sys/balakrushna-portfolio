import "./App.css";

const baseUrl = import.meta.env.BASE_URL;

function App() {
  return (
    <div className="app">

      <nav className="navbar">

        <a href="#home" className="brand">
          <span className="brand-mark">BN</span>
          <span>Balakrushna Nayak</span>
        </a>

        <div className="nav-links">
          <a href="#home">Home</a>
          <a href="#about">About</a>
          <a href="#skills">Skills</a>
          <a href="#projects">Projects</a>
          <a href="#contact">Contact</a>
        </div>

      </nav>


      <main>

        <section id="home" className="hero-section">

          <div className="hero-content">

            <div className="hero-badge">
              <span className="status-dot"></span>
              Open to Entry-Level Opportunities
            </div>

            <p className="hero-welcome">
              FRONTEND DEVELOPER
            </p>

            <h1>
              Building clean and
              <span> responsive web experiences.</span>
            </h1>

            <p className="hero-description">
              I am Balakrushna Nayak, a Computer Science and Engineering
              graduate focused on building modern web applications with
              React, JavaScript, HTML and CSS.
            </p>

            <div className="hero-buttons">

              <a
                href="#projects"
                className="primary-button"
              >
                View My Work
                <i className="fa-solid fa-arrow-right"></i>
              </a>

              <a
                href="#contact"
                className="secondary-button"
              >
                Let's Connect
              </a>

            </div>

            <div className="social-links">

              <a
                href="https://github.com/nayakbk7991-sys"
                target="_blank"
                rel="noreferrer"
                aria-label="GitHub"
              >
                <i className="fa-brands fa-github"></i>
              </a>

              <a
                href="https://www.linkedin.com/in/balakrushna-nayak-a50b90319/"
                target="_blank"
                rel="noreferrer"
                aria-label="LinkedIn"
              >
                <i className="fa-brands fa-linkedin"></i>
              </a>

              <a
                href="https://mail.google.com/mail/?view=cm&fs=1&to=nayakbk7991@gmail.com"
                target="_blank"
                rel="noreferrer"
                aria-label="Email"
              >
                <i className="fa-solid fa-envelope"></i>
              </a>

            </div>

          </div>


          <div className="hero-visual">

            <div className="hero-glow"></div>

            <div className="hero-image-wrapper">

              <div className="image-ring"></div>

              <img
                src={`${baseUrl}my-portfolio.jpg`}
                alt="Balakrushna Nayak"
                className="profile-image"
              />

            </div>

            <div className="floating-card floating-card-top">
              <i className="fa-brands fa-react"></i>
              <div>
                <strong>React</strong>
                <span>Frontend</span>
              </div>
            </div>

            <div className="floating-card floating-card-bottom">
              <i className="fa-solid fa-code"></i>
              <div>
                <strong>Developer</strong>
                <span>Always Learning</span>
              </div>
            </div>

          </div>

        </section>


        <section id="about" className="about-section">

          <div className="section-heading">

            <p className="section-label">
              ABOUT ME
            </p>

            <h2>
              Turning ideas into
              <span> useful interfaces.</span>
            </h2>

          </div>


          <div className="about-grid">

            <div className="about-text">

              <p>
                I am a Computer Science and Engineering graduate and
                an aspiring Frontend Developer with a strong interest
                in creating responsive and user-friendly web applications.
              </p>

              <p>
                My primary focus is frontend development using React,
                JavaScript, HTML, CSS and Bootstrap. I also have basic
                knowledge of Node.js, Express.js and REST APIs.
              </p>

              <p>
                I enjoy learning by building projects and improving
                my understanding of real-world web development practices.
              </p>

            </div>


            <div className="about-highlights">

              <div className="highlight-card">

                <div className="highlight-icon">
                  <i className="fa-solid fa-laptop-code"></i>
                </div>

                <div>
                  <h3>Frontend Focus</h3>
                  <p>React, JavaScript, HTML & CSS</p>
                </div>

              </div>


              <div className="highlight-card">

                <div className="highlight-icon">
                  <i className="fa-solid fa-mobile-screen-button"></i>
                </div>

                <div>
                  <h3>Responsive Design</h3>
                  <p>Interfaces for different screen sizes</p>
                </div>

              </div>


              <div className="highlight-card">

                <div className="highlight-icon">
                  <i className="fa-solid fa-graduation-cap"></i>
                </div>

                <div>
                  <h3>Continuous Learning</h3>
                  <p>Always improving development skills</p>
                </div>

              </div>

            </div>

          </div>

        </section>


        <section id="skills" className="skills-section">

          <div className="section-heading">

            <p className="section-label">
              MY TECHNOLOGIES
            </p>

            <h2>
              Skills & Tools
            </h2>

            <p className="section-description">
              Technologies and tools I use while developing
              web applications and learning modern development.
            </p>

          </div>


          <div className="skills-category-container">


            <div className="skills-category">

              <div className="category-heading">
                <span className="category-number">01</span>

                <div>
                  <h3>Frontend Development</h3>
                  <p>Building responsive user interfaces</p>
                </div>
              </div>


              <div className="skills-container">

                <div className="skill-card">
                  <i className="fa-brands fa-html5"></i>
                  <h4>HTML</h4>
                </div>

                <div className="skill-card">
                  <i className="fa-brands fa-css3-alt"></i>
                  <h4>CSS</h4>
                </div>

                <div className="skill-card">
                  <i className="fa-brands fa-js"></i>
                  <h4>JavaScript</h4>
                </div>

                <div className="skill-card">
                  <i className="fa-brands fa-react"></i>
                  <h4>React.js</h4>
                </div>

                <div className="skill-card">
                  <i className="fa-brands fa-bootstrap"></i>
                  <h4>Bootstrap</h4>
                </div>

              </div>

            </div>


            <div className="skills-category">

              <div className="category-heading">
                <span className="category-number">02</span>

                <div>
                  <h3>Development Tools</h3>
                  <p>Tools I use during development</p>
                </div>
              </div>


              <div className="skills-container">

                <div className="skill-card">
                  <i className="fa-brands fa-git-alt"></i>
                  <h4>Git</h4>
                </div>

                <div className="skill-card">
                  <i className="fa-brands fa-github"></i>
                  <h4>GitHub</h4>
                </div>

                <div className="skill-card">
                  <i className="fa-solid fa-bolt"></i>
                  <h4>Vite</h4>
                </div>

                <div className="skill-card">
                  <i className="fa-brands fa-npm"></i>
                  <h4>npm</h4>
                </div>

                <div className="skill-card">
                  <i className="fa-solid fa-code"></i>
                  <h4>VS Code</h4>
                </div>

              </div>

            </div>


            <div className="skills-category">

              <div className="category-heading">
                <span className="category-number">03</span>

                <div>
                  <h3>Backend Basics</h3>
                  <p>Foundational backend knowledge</p>
                </div>
              </div>


              <div className="skills-container">

                <div className="skill-card">
                  <i className="fa-solid fa-cloud-arrow-down"></i>
                  <h4>REST API</h4>
                </div>

                <div className="skill-card">
                  <i className="fa-brands fa-node-js"></i>
                  <h4>Node.js</h4>
                </div>

                <div className="skill-card">
                  <i className="fa-solid fa-server"></i>
                  <h4>Express.js</h4>
                </div>

              </div>

            </div>

          </div>

        </section>


        <section id="projects" className="projects-section">

          <div className="section-heading">

            <p className="section-label">
              WHAT I HAVE BUILT
            </p>

            <h2>
              Featured Projects
            </h2>

            <p className="section-description">
              A selection of projects that demonstrate my experience
              with frontend development and modern web technologies.
            </p>

          </div>


          <div className="projects-container">


            <article className="project-card featured-project">

              <div className="project-top">

                <div className="project-icon">
                  <i className="fa-solid fa-briefcase"></i>
                </div>

                <span className="featured-badge">
                  Major Project
                </span>

              </div>


              <div className="project-content">

                <p className="project-category">
                  JOB PLATFORM
                </p>

                <h3>
                  JobSeek
                </h3>

                <p className="project-description">
                  A job portal frontend application designed for
                  job seekers and recruiters. It includes job search,
                  authentication, applications, saved jobs, recruiter
                  features and application tracking.
                </p>


                <div className="project-tech-list">

                  <span>React</span>
                  <span>JavaScript</span>
                  <span>CSS</span>
                  <span>React Router</span>
                  <span>Vite</span>

                </div>


                <div className="project-features">

                  <span>
                    <i className="fa-solid fa-magnifying-glass"></i>
                    Job Search
                  </span>

                  <span>
                    <i className="fa-solid fa-user-lock"></i>
                    Authentication
                  </span>

                  <span>
                    <i className="fa-solid fa-file-circle-check"></i>
                    Applications
                  </span>

                  <span>
                    <i className="fa-solid fa-bookmark"></i>
                    Saved Jobs
                  </span>

                  <span>
                    <i className="fa-solid fa-chart-line"></i>
                    Application Tracking
                  </span>

                  <span>
                    <i className="fa-solid fa-users"></i>
                    Recruiter Dashboard
                  </span>

                </div>

              </div>


              <div className="project-buttons">

                <a
                  href="https://nayakbk7991-sys.github.io/JobSeek/"
                  target="_blank"
                  rel="noreferrer"
                  className="project-link primary-project-link"
                >
                  Live Demo
                  <i className="fa-solid fa-arrow-up-right-from-square"></i>
                </a>

                <a
                  href="https://github.com/nayakbk7991-sys/JobSeek"
                  target="_blank"
                  rel="noreferrer"
                  className="project-link"
                >
                  GitHub
                  <i className="fa-brands fa-github"></i>
                </a>

              </div>

            </article>


            <article className="project-card">

              <div className="project-top">

                <div className="project-icon">
                  <i className="fa-solid fa-cart-shopping"></i>
                </div>

                <span className="project-number">
                  02
                </span>

              </div>


              <div className="project-content">

                <p className="project-category">
                  E-COMMERCE
                </p>

                <h3>
                  ShopSphere
                </h3>

                <p className="project-description">
                  A responsive e-commerce frontend application with
                  product browsing, search, filtering, sorting,
                  shopping cart and wishlist functionality.
                </p>


                <div className="project-tech-list">

                  <span>React</span>
                  <span>JavaScript</span>
                  <span>CSS</span>
                  <span>Vite</span>

                </div>

              </div>


              <div className="project-buttons">

                <a
                  href="https://nayakbk7991-sys.github.io/ShopSphere/"
                  target="_blank"
                  rel="noreferrer"
                  className="project-link primary-project-link"
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

            </article>


            <article className="project-card">

              <div className="project-top">

                <div className="project-icon">
                  <i className="fa-solid fa-user-lock"></i>
                </div>

                <span className="project-number">
                  03
                </span>

              </div>


              <div className="project-content">

                <p className="project-category">
                  JAVASCRIPT
                </p>

                <h3>
                  Login Manager
                </h3>

                <p className="project-description">
                  A frontend login management project created to
                  practice form handling, validation, user input
                  and JavaScript-based interface functionality.
                </p>


                <div className="project-tech-list">

                  <span>HTML</span>
                  <span>CSS</span>
                  <span>JavaScript</span>

                </div>

              </div>


              <div className="project-buttons">

                <a
                  href="https://github.com/nayakbk7991-sys/Login-manager_js"
                  target="_blank"
                  rel="noreferrer"
                  className="project-link primary-project-link"
                >
                  GitHub
                  <i className="fa-brands fa-github"></i>
                </a>

              </div>

            </article>

          </div>

        </section>


        <section id="contact" className="contact-section">

          <div className="contact-inner">

            <div className="section-heading">

              <p className="section-label">
                GET IN TOUCH
              </p>

              <h2>
                Let's build something
                <span> together.</span>
              </h2>

              <p className="section-description">
                I am currently open to entry-level frontend
                development opportunities and professional connections.
              </p>

            </div>


            <div className="contact-container">


              <a
                href="https://mail.google.com/mail/?view=cm&fs=1&to=nayakbk7991@gmail.com"
                target="_blank"
                rel="noreferrer"
                className="contact-item"
              >

                <div className="contact-icon">
                  <i className="fa-solid fa-envelope"></i>
                </div>

                <div>
                  <span>Email</span>
                  <h3>nayakbk7991@gmail.com</h3>
                </div>

                <i className="fa-solid fa-arrow-up-right-from-square contact-arrow"></i>

              </a>


              <a
                href="https://github.com/nayakbk7991-sys"
                target="_blank"
                rel="noreferrer"
                className="contact-item"
              >

                <div className="contact-icon">
                  <i className="fa-brands fa-github"></i>
                </div>

                <div>
                  <span>GitHub</span>
                  <h3>nayakbk7991-sys</h3>
                </div>

                <i className="fa-solid fa-arrow-up-right-from-square contact-arrow"></i>

              </a>


              <a
                href="https://www.linkedin.com/in/balakrushna-nayak-a50b90319/"
                target="_blank"
                rel="noreferrer"
                className="contact-item"
              >

                <div className="contact-icon">
                  <i className="fa-brands fa-linkedin"></i>
                </div>

                <div>
                  <span>LinkedIn</span>
                  <h3>Balakrushna Nayak</h3>
                </div>

                <i className="fa-solid fa-arrow-up-right-from-square contact-arrow"></i>

              </a>

            </div>

          </div>

        </section>

      </main>


      <footer className="footer">

        <div className="footer-content">

          <div>
            <a href="#home" className="footer-brand">
              BN
            </a>
          </div>

          <div className="footer-center">

            <h3>
              Balakrushna Nayak
            </h3>

            <p>
              Frontend Developer | React | JavaScript
            </p>

            <p className="footer-status">
              Open to Entry-Level Opportunities
            </p>

          </div>


          <div className="footer-socials">

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

            <a
              href="https://mail.google.com/mail/?view=cm&fs=1&to=nayakbk7991@gmail.com"
              target="_blank"
              rel="noreferrer"
            >
              <i className="fa-solid fa-envelope"></i>
            </a>

          </div>

        </div>


        <div className="footer-bottom">
          <p>
            © 2026 Balakrushna Nayak. All rights reserved.
          </p>
        </div>

      </footer>

    </div>
  );
}

export default App;