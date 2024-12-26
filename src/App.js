import React, { useState, useEffect } from 'react';
import './App.css'; // Make sure to style it
import { FaLinkedin, FaInstagram, FaGithub } from 'react-icons/fa';
import photo1 from "./asserts/Photo1.jpg"; // Corrected file path
import photo2 from "./asserts/Photo2.jpg"; // Corrected file path
import photo3 from "./asserts/Photo3.jpg"; // Corrected file path
import PackUrBags from "./asserts/World-Travel-PNG-Image.png";
import { FaReact, FaHtml5, FaCss3Alt, FaNodeJs, FaJsSquare } from 'react-icons/fa';
import { FaCogs, FaCode, FaPython, FaJava } from 'react-icons/fa';
import cookingLogo from './asserts/29561-1-cooking.png'; // Path to cooking logo
import clockLogo from './asserts/clock.png'; // Path to clock logo
import wordpressLogo from './asserts/wordpress.png'; // Path to wordpress logo
function App() {
  const images = [photo1, photo2, photo3]; // Array of images
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 10000); // Change image every 10 seconds

    return () => clearInterval(interval); // Clean up the interval on component unmount
  }, [images.length]);

  return (
    <div className="App">
      <Header />
      <div class="white-line"></div>
      <About currentImage={images[currentImageIndex]} /> {/* Pass currentImage */}
      <div class="white-line"></div>
      <Skills />
      <div class="white-line"></div>
      <ProgrammingLanguages />
      <div class="white-line"></div>
      <Certifications />
      <div class="white-line"></div>
      <Projects />
      <div class="white-line"></div>
      <Contact />
      <div class="white-line"></div>
      <Footer />
    </div>
  );
}
export default App;
function ProgrammingLanguages() {
  return (
    <section className="programming-languages">
      <h2>Programming Languages</h2>
      <div className="programming-languages-container">
        {/* C Language */}
        <div className="language-item">
          <FaCogs size={50} />
          <p>C</p>
        </div>
        
        {/* C++ Language */}
        <div className="language-item">
          <FaCode size={50} />
          <p>C++</p>
        </div>
        
        {/* Java Language */}
        <div className="language-item">
          <FaJava size={50} />
          <p>Java</p>
        </div>
        
        {/* Python Language */}
        <div className="language-item">
          <FaPython size={50} />
          <p>Python</p>
        </div>
      </div>
    </section>
  );
}

function Header() {
  return (
    <header className="header">
      <h1>
        <span className="large-s">S</span>
        <span className="full-name">ANDEEP</span>
        <span className="large-s">A</span>
        <span className="full-name">MALAPURAPU</span>
        <span className='small-s'>S</span>
        <span className="small-screen-name">andeep</span>
        <span className='small-A'>A</span>
      </h1>
      <p>Frontend Developer | React Enthusiast</p>
    </header>
  );
}

function About({ currentImage }) {
  return (
    <section className="about">
      <h2 className="about-heading">About Me</h2>
      <div className="about-content">
        <div className="image-container">
          <img src={currentImage} alt="Current" />
        </div>
        <div className="text-container">
          <h3>I'm Amalapurapu Sandeep</h3>
          <p>
            I'm a passionate Computer Science Engineering student with a strong foundation in programming and a deep commitment to continuous learning. Proficient in C, C++, Python, and Java, I bring technical expertise to every project I undertake. My skills extend to frontend development, where I excel at crafting intuitive, dynamic user interfaces with React.
          </p>
          <p>
            In addition to my proficiency in full-stack development, I am an AWS Cloud Practitioner, which helps me leverage cloud technologies to build scalable solutions. I thrive on problem-solving, having solved numerous challenges on platforms like LeetCode and GeeksforGeeks. I’m always striving to expand my skill set and contribute to innovative projects.
          </p>
          <p>
            With a keen interest in joining a forward-thinking company, I am eager to apply my technical abilities and passion for development to real-world challenges.
          </p>
        </div>
      </div>
    </section>
  );
}

function Skills() {
  return (
    <section className="skills">
      <h2>Skills</h2>
      <div className="skills-container">
        <div className="skill-item">
          <FaReact className="logos" size={50} />
          <p>React</p>
        </div>
        <div className="skill-item">
          <FaHtml5 className="logos" size={50} />
          <p>HTML5</p>
        </div>
        <div className="skill-item">
          <FaCss3Alt className="logos" size={50} />
          <p>CSS3</p>
        </div>
        <div className="skill-item">
          <FaNodeJs className="logos" size={50} />
          <p>Node.js</p>
        </div>
        <div className="skill-item">
          <FaGithub className="logos" size={50} />
          <p>GitHub</p>
        </div>
        <div className="skill-item">
          <FaJsSquare className="logos" size={50} />
          <p>JavaScript</p>
        </div>
        {/* SQL Skill */}
        <div className="skill-item">
          <img
            src="https://cdn-icons-png.flaticon.com/512/2772/2772128.png"
            alt="SQL Logo"
            style={{ width: "50px", height: "50px" }}
          />
          <p>SQL</p>
        </div>
        {/* MongoDB Skill */}
        <div className="skill-item">
          <img
            src="https://cdn-icons-png.flaticon.com/512/919/919836.png"
            alt="MongoDB Logo"
            style={{ width: "50px", height: "50px" }}
          />
          <p>MongoDB</p>
        </div>
      </div>
    </section>
  );
}
function Certifications() {
  return (
    <section className="certifications">
      <h2>Certifications</h2>
      <div className="certifications-container">
        {/* AWS Cloud Practitioner Certificate */}
        <div className="certification-item">
          <img
            src="https://cdn-icons-png.flaticon.com/512/732/732229.png"
            alt="AWS Logo"
            style={{ width: "50px", height: "50px" }}
          />
          <div>
            <h3>AWS Cloud Practitioner</h3>
            <p>Achieved foundational cloud expertise as a certified AWS Cloud Practitioner.</p>
          </div>
        </div>
        {/* Java IT Specialist Certificate */}
        <div className="certification-item">
          <img
            src="https://cdn-icons-png.flaticon.com/512/226/226777.png"
            alt="Java Logo"
            style={{ width: "50px", height: "50px" }}
          />
          <div>
            <h3>Java IT Specialist</h3>
            <p>Certified in Java programming, demonstrating strong skills in building scalable applications.</p>
          </div>
        </div>
        {/* Python Essential Certificate */}
        <div className="certification-item">
          <img
            src="https://cdn-icons-png.flaticon.com/512/5968/5968350.png"
            alt="Python Logo"
            style={{ width: "50px", height: "50px" }}
          />
          <div>
            <h3>Python Essentials By Cisco</h3>
            <p>Certified in Python programming, showcasing proficiency in core programming concepts.</p>
          </div>
        </div>
      </div>
    </section>
  );
}
function Projects() {
  return (
    <section className="projects" id="projects">
      <h2>Projects</h2>
      <MajorProject />
      <MinorProjects />
    </section>
  );
}


function Contact() {
  return (
    <section className="contact">
      <h2>Contact</h2>
      <div className="contact-buttons">
        <a
          href="https://www.linkedin.com/in/sandeep-amalapurapu-525a95229?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaLinkedin size={30} />
        </a>
        <a
          href="https://www.instagram.com/im_sandeep30/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaInstagram size={30} />
        </a>
        <a
          href="https://github.com/imsandeep30"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaGithub size={30} />
        </a>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer>
      <p>Email: imsandeepamalapurapu@gmail.com</p>
      <p>Phone: 7093454577</p>
    </footer>
  );
}

function MajorProject() {
  return (
    <div className="major-project">
      <h2>Major Project: Pack Ur Bags</h2>
      <div className="project-info">
        <img src={PackUrBags} alt="Pack Ur Bags Project" className="project-image" />
        <div className="project-description">
          <p>
            {/* Add the description of the project here */}
            PackUrBags, and it’s designed to help travelers easily find accommodations nearby
             With PackUrBags, travelers can search for a range of accommodations, including homestays, 
             which is great if hotels are fully booked. Homeowners can list their properties and set their own prices, creating a mutually beneficial situation for both travelers and hosts.
             it addresses a real need for travelers while offering a simple and effective solution
            {/* Example, change this to your own description */}
          </p>
        </div>
      </div>
    </div>
  );
}
// MinorProjects Component
function MinorProjects() {
  return (
    <div className="minor-projects">
      <h2>Minor Projects</h2>
      <div className="project-list1">
        <div className="project-item">
          <img src={cookingLogo} alt="Recipe Project" className="project-logo" />
          <h3>Recipe</h3>
        </div>
        <div className="project-item">
          <img src={clockLogo} alt="Reminder Project" className="project-logo" />
          <h3>Reminder</h3>
        </div>
        <div className="project-item">
          <img src={wordpressLogo} alt="WordPress Deployment" className="project-logo" />
          <h3>WordPress Deployment</h3>
        </div>
      </div>
    </div>
  );
}