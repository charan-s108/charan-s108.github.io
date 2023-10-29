import React from 'react'

const Info = () => {
  return (
    <div className="about__info grid" data-aos="fade-down" data-aos-duration="1500">
        <div className="about__box">
            <i class='bx bx-briefcase-alt about__icon'></i>
            <h3 className="about__title">Experience</h3>
            <span className="about__subtitle">1+ Year Working</span>
        </div>

        <div className="about__box">
            <i class='bx bx-code-alt about__icon' ></i>
            <h3 className="about__title">Projects</h3>
            <span className="about__subtitle">5+ Completed</span>
        </div>

        <div className="about__box">
            <i class='bx bx-badge-check about__icon'></i>
            <h3 className="about__title">Certifications</h3>
            <span className="about__subtitle">6+  Achieved</span>
        </div>
    </div>
  )
}

export default Info