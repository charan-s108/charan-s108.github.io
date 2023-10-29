import React, { useState, useEffect } from 'react';
import "./header.css";
import Logo from "../../assets/logo.png";

const Header = () => {
    /*=============== Change Background Header ===============*/
    window.addEventListener("scroll", function () {
        const header = document.querySelector(".header");
        // when the scroll is higher than 200 viewport height, add the scroll-header class to a tag with the header tag
        if(this.scrollY >= 80) header.classList.add("scroll-header");
        else header.classList.remove("scroll-header");
    })
  /*=============== Toggle Menu ===============*/
  const[Toggle, showMenu] = useState(false);
  const [activeNav, setActiveNav] =useState("#home");

  useEffect(() => {
    const sections = document.querySelectorAll('section');

    const handleScroll = () => {
      const scrollY = window.scrollY;

      sections.forEach((section) => {
        const top = section.offsetTop - 100;
        const bottom = top + section.clientHeight;

        if (scrollY >= top && scrollY <= bottom) {
          setActiveNav(`#${section.id}`);
        }
      });
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <header className={`header${Toggle ? ' scroll-header' : ''}`}>
        <nav className="nav container">
            <a href="index.html" className="nav__logo"> 
                <img src={Logo} alt="Logo" />Charan
            </a>
            <div className={`nav__menu${Toggle ? ' show-menu' : ''}`}>
                <ul className="nav__list grid">
                    <li className="nav__item">
                        <a href="#home" onClick={() => setActiveNav('#home')} className={activeNav === "#home" ? "nav__link active-link" : "nav__link"}>
                            <i className="uil uil-estate nav__icon"></i> Home
                        </a>
                    </li>

                    <li className="nav__item">
                        <a href="#about" onClick={() => setActiveNav('#about')} className={activeNav === "#about" ? "nav__link active-link" : "nav__link"}>
                            <i className="uil uil-user nav__icon"></i> About
                        </a>
                    </li>

                    <li className="nav__item">
                        <a href="#skills" onClick={() => setActiveNav('#skills')} className={activeNav === "#skills" ? "nav__link active-link" : "nav__link"}>
                            <i className="uil uil-file-alt nav__icon"></i> Skills
                        </a>
                    </li>

                    <li className="nav__item">
                        <a href="#qualifications" onClick={() => setActiveNav('#qualifications')} className={activeNav === "#qualifications" ? "nav__link active-link" : "nav__link"}>
                            <i className="uil uil-briefcase-alt nav__icon"></i> Qualifications
                        </a>
                    </li>

                    <li className="nav__item">
                        <a href="#certification" onClick={() => setActiveNav('#certification')} className={activeNav === "#certification" ? "nav__link active-link" : "nav__link"}>
                        <i class="uil uil-award nav__icon"></i> Certifications
                        </a>
                    </li>

                    <li className="nav__item">
                        <a href="#contact" onClick={() => setActiveNav('#contact')} className={activeNav === "#contact" ? "nav__link active-link" : "nav__link"}>
                            <i className="uil uil-message nav__icon"></i> Contact
                        </a>
                    </li>
                </ul>
                <i class="uil uil-times nav__close" onClick={() => showMenu(!Toggle)}></i>
            </div>
            <div className="nav__toggle" onClick={() => showMenu(!Toggle)}>
                <i class="uil uil-apps"></i>
            </div>
        </nav>
    </header>
  )
}

export default Header