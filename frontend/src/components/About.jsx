import React from "react";
import { Link } from "react-router-dom";
import { HiOutlineArrowRight } from "react-icons/hi";

const About = () => {
  return (
    <>
      <section className="about" id="about">
        <div className="container">
          <div className="banner">
            <div className="top">
              <h1 className="heading">ABOUT US</h1>
              <p>The only thing we're serious about is food.</p>
            </div>
            <p className="mid">
            Welcome to MUNCH A BUNCH , where culinary
             passion meets exceptional dining. We offer a
              warm and inviting atmosphere for food lovers
               to enjoy thoughtfully prepared dishes made 
               from the finest, locally-sourced ingredients.
                Our menu blends traditional and modern 
                flavors, catering to every palate with a 
                focus on quality, freshness, and creativity.
                 Whether you're here for a casual meal or a 
                 special occasion, we are dedicated to providing
                  an unforgettable dining experience.
            </p>
            <Link to={"/"}>
              Explore Menu{" "}
              <span>
                <HiOutlineArrowRight />
              </span>
            </Link>
          </div>
          <div className="banner">
            <img src="about.png" alt="about" />
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
