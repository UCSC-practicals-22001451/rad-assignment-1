import React, { useState } from "react";
import "./AboutPage.css";

const slides = [
  {
    id: 1,
    title: "Our History",
    content:
      "Founded in 1990, our club has been dedicated to training individuals to become skilled emergency firefighters. Over the past three decades, we have grown from a small group of passionate volunteers to a comprehensive training organization, helping countless individuals prepare for and respond to emergencies.",
    img: "/images/1.jpg",
  },
  {
    id: 2,
    title: "Our Mission",
    content:
      "Our mission is to train and equip the next generation of emergency firefighters with the skills and knowledge they need to save lives and protect communities. We strive to foster a sense of duty, bravery, and excellence in every trainee.",
    img: "/images/2.jpeg",
  },
  {
    id: 3,
    title: "Our Values",
    content:
      "<ul><li><strong>Bravery:</strong> Encouraging courage in the face of danger.</li><li><strong>Excellence:</strong> Committing to the highest standards of training and performance.</li><li><strong>Community:</strong> Building strong bonds within our team and with the communities we serve.</li><li><strong>Integrity:</strong> Acting with honesty and accountability in all our actions.</li></ul>",
    img: "/images/original.jpg",
  },
];

function AboutPage() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  return (
    <div className="about">
      <h1 className="heading">About Our Club</h1>

      <div className="slideshow">
        <button className="arrow left-arrow" onClick={prevSlide}>
          &#8592;
        </button>
        <div className="slide">
          <img
            src={slides[currentSlide].img}
            alt={slides[currentSlide].title}
          />
          <div>
            <h2 className="heading">{slides[currentSlide].title}</h2>
            <p
              dangerouslySetInnerHTML={{ __html: slides[currentSlide].content }}
            />
          </div>
        </div>
        <button className="arrow right-arrow" onClick={nextSlide}>
          &#8594;
        </button>
      </div>

      <h2 className="heading">Meet Our Team</h2>
      <div className="team">
        <div className="team-member">
          <img src="images/head_1.jpg" alt="Member 1" />
          <div className="member-info">
            <p>John Doe - Chief Instructor</p>
          </div>
        </div>
        <div className="team-member">
          <img src="images/head_2.jpg" alt="Member 2" />
          <div className="member-info">
            <p>Jane Smith - Training Coordinator</p>
          </div>
        </div>
        <div className="team-member">
          <img src="images/head_3.jpg" alt="Member 3" />
          <div className="member-info">
            <p>Emily Johnson - Safety Officer</p>
          </div>
        </div>
      </div>

      <div className=" about-section">
        <div>
          <h2 className="sub-heading">Training Programs</h2>
          <p>
            Our training programs are designed to prepare individuals for the
            demanding and rewarding role of an emergency firefighter. We offer:
          </p>
          <ul>
            <li>Basic Firefighting Skills</li>
            <li>Advanced Rescue Techniques</li>
            <li>Fire Safety Education</li>
            <li>Physical Fitness Training</li>
            <li>Emergency Medical Response</li>
          </ul>
        </div>
      </div>

      <div className=" about-section">
        <div>
          <h2 className="sub-heading">Testimonials</h2>
          <p>
            "Joining this club was the best decision I ever made. The training
            was thorough and the instructors were incredibly supportive." - Alex
            Martinez
          </p>
          <p>
            "I feel fully prepared to face any emergency situation thanks to the
            skills I learned here." - Sarah Lee
          </p>
          <p>
            "The sense of community and teamwork is amazing. I'm proud to be
            part of this club." - Michael Brown
          </p>
        </div>
      </div>
    </div>
  );
}

export default AboutPage;
