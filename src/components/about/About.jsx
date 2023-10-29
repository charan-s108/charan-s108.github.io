import React from "react";
import Info from "./Info";
import "./about.css";
import AboutImg from "../../assets/about.png";

const About = () => {
  return (
    <section className="about section" id="about">
      <h2 className="section__title">About Me</h2>
      <span className="section__subtitle">My introduction</span>

      <div className="about__container container grid">
        <img src={AboutImg} alt="" className="about__img"  data-aos="fade-right" data-aos-duration="1500" />

        <div className="about__data">
        <Info />

          <div className="about__description" data-aos="fade-up" data-aos-duration="1500">

              <p> I'm a master's student🎓, who's all about embracing life's adventures. </p>
                
              <p> 📚Academics provide me with a strong foundation, but my heart truly lights up when I dive into the practical aspects of tech world. </p>

              <p> 🏫Apart Academics, I'm deeply immersed into 💻Web development, ☁️ Cloud computing, 🤖Machine learning, 🔐Pentesting and an adrenaline excitement for CTF challenges.🔍 </p>

              <p> 🌳Beyond Tech, you'll often find me amidst the beauty of nature, seeking tranquility. </p>
                
              <p> 🚘Additionally, my fascination with automobiles adds a dash of excitement to my life.🏍️ </p>

              <p> 🖤My insatiable curiosity knows no bounds, making me a passionate explorer of tech, the great outdoors and the marvels of the automotive world.🚗 </p>
              
              <p> 🌟Let's embark on this exciting journey together!🚀🌿💡 </p>
              
          </div>

          
        </div>
      </div>
    </section>
  );
};

export default About;
