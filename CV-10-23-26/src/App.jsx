import React from "react";
import "./App.css";

const skills = [
  {
    category: "Core web",
    details: "HTML5, CSS3, JavaScript (ES6+), responsive design, Flexbox, CSS Grid",
  },
  {
    category: "React",
    details: "JSX, components, props, Hooks, Context API, React Router, controlled forms",
  },
  {
    category: "Data & logic",
    details: "REST APIs, fetch, Axios, async/await, DOM events, regex, OOP fundamentals",
  },
  {
    category: "Development tools",
    details: "Git, GitHub, Vite, VS Code, browser developer tools",
  },
];

const projects = [
  {
    title: "Space Travel / SpaceShipBuilder",
    status: "In progress",
    stack: "React · React Router · Context API",
    bullets: [
      "Built views for planets and spacecraft, client-side navigation, and a spacecraft creation form.",
      "Integrated asynchronous API operations with loading and error states; managed shared UI state with Context.",
    ],
  },
  {
    title: "Jeopardy Trivia Game",
    stack: "JavaScript · Axios · HTML/CSS",
    bullets: [
      "Created an API-powered trivia board with dynamic categories, clue popups, answer reveal, and scoring.",
      "Used asynchronous requests, DOM manipulation, and event delegation to drive interactive gameplay.",
    ],
  },
  {
    title: "React Calculator",
    stack: "React · JavaScript · CSS",
    bullets: [
      "Designed and implemented calculator behavior from scratch using React state, event handlers, and operator logic.",
      "Iteratively debugged user input, calculation flow, reset behavior, and result rendering.",
    ],
  },
];

const experience = [
  {
    role: "Tire Technician",
    company: "Sam’s Club",
    time: "2018–Present",
    description:
      "Deliver safety-focused technical service under time constraints; diagnose unexpected issues and coordinate work with teammates.",
  },
  {
    role: "Technical Support Advisor (Tier 1 / Tier 2)",
    company: "Apple",
    time: "2008–2010",
    description:
      "Troubleshot customer technology issues, explained solutions clearly, and applied structured diagnostic processes.",
  },
];

function SectionTitle({ children }) {
  return <h2 className="section-title">{children}</h2>;
}

export default function App() {
  return (
    <div className="site-shell">
      <div className="screen-toolbar">
        <span>Michael Lange / One-page résumé</span>
        <button type="button" onClick={() => window.print()}>
          Print / Save as PDF <span aria-hidden="true">↗</span>
        </button>
      </div>

      <main className="resume-sheet" aria-label="Michael Lange's résumé">
        <header className="resume-header">
          <div className="header-topline">
            <span className="eyebrow">Front-End Developer</span>
            <span className="location">Minnesota, USA</span>
          </div>
          <h1>Michael Lange</h1>
          <p className="personal-tagline">Responsive web experiences · JavaScript & React · Technical problem solving</p>
          <div className="contact-bar" aria-label="Contact information">
            <a href="mailto:mrlange892@gmail.com">mrlange892@gmail.com</a>
            <a href="tel:+16513475903">(651) 347-5903</a>
            <a href="https://github.com/mrmike525/MyLatestProjects_8_19_26/tree/Windows_11" target="_blank" rel="noreferrer">github.com/mrmike525</a>
            <a href="https://www.linkedin.com/in/michael-lange-sqa/" target="_blank" rel="noreferrer">LinkedIn profile</a>
          </div>
        </header>

        <section className="resume-section summary-section" aria-labelledby="about-title">
          <h2 id="about-title" className="section-title">Profile</h2>
          <p>
            Front-end developer building responsive, interactive applications with React and JavaScript.
            Completed formal software development training and developed hands-on projects involving routing,
            state management, forms, and API integration. Bring years of technical troubleshooting,
            customer support, and detail-oriented problem solving to software development.
          </p>
        </section>

        <section className="resume-section" aria-labelledby="skills-title">
          <h2 id="skills-title" className="section-title">Technical Skills</h2>
          <dl className="skills-list">
            {skills.map(({ category, details }) => (
              <div className="skill-line" key={category}>
                <dt>{category}</dt>
                <dd>{details}</dd>
              </div>
            ))}
          </dl>
        </section>

        <section className="resume-section" aria-labelledby="projects-title">
          <h2 id="projects-title" className="section-title">Selected Development Projects</h2>
          <div className="projects-list">
            {projects.map(({ title, status, stack, bullets }) => (
              <article className="project" key={title}>
                <div className="project-heading">
                  <h3>{title}{status && <span className="project-status"> · {status}</span>}</h3>
                  <span className="stack">{stack}</span>
                </div>
                <ul>
                  {bullets.map((bullet) => <li key={bullet}>{bullet}</li>)}
                </ul>
              </article>
            ))}
          </div>
        </section>

        <section className="resume-section" aria-labelledby="experience-title">
          <h2 id="experience-title" className="section-title">Professional Experience</h2>
          {experience.map(({ role, company, time, description }) => (
            <article className="experience-row" key={company}>
              <div>
                <div className="experience-heading">
                  <h3>{role} <span>· {company}</span></h3>
                  <span className="date">{time}</span>
                </div>
                <p>{description}</p>
              </div>
            </article>
          ))}
          <p className="prior-experience"><strong>Additional technical background:</strong> Senior electronics/device repair technician and U.S. Army mechanic.</p>
        </section>

        <section className="resume-section education-section" aria-labelledby="education-title">
          <h2 id="education-title" className="section-title">Education & Certificates</h2>
          <div className="education-row">
            <div><strong>Springboard</strong> · Enterprise Software Development Program</div>
            <span>Certificate, 2025</span>
          </div>
          <div className="education-row">
            <div><strong>Careerist</strong> · Software Quality Assurance</div>
            <span>Certificate, 2021</span>
          </div>
          <p className="ongoing-learning"><strong>Continuing study:</strong> TypeScript, modern CSS techniques, and JavaScript fundamentals.</p>
        </section>
      </main>
      <p className="screen-footnote">Designed for US Letter. Use “Print / Save as PDF” to produce a one-page résumé.</p>
    </div>
  );
}
