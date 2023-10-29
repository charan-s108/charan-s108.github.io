import React from 'react';
import Webdev from './Webdev';
import Cloud from './Cloud';
import Pentesting from './Pentesting';
import Misc from './Misc';
import "./skills.css";

const Skills = () => {

  return (
    <section className="skills section" id="skills">
        <h2 className="section__title">Skills</h2>
        <span className="section__subtitle">Unleashing Technical Expertise</span>

        <div className="skills__container container grid">
            <div data-aos="fade-up" data-aos-duration="1500">
                <Webdev />
            </div>
            <div data-aos="fade-up" data-aos-duration="1500">
                <Cloud />
            </div>
            <div data-aos="fade-up" data-aos-duration="1500">
                <Pentesting />
            </div>
            <div data-aos="fade-up" data-aos-duration="1500">
                <Misc />
            </div>
        </div>
    </section>
  )
}

export default Skills