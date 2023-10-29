import React, { useState } from 'react';
import "./qualification.css";

const Qualification = () => {
    const [toggleState, setToggleState] = useState(1);

    const toggleTab = (index) => {
        setToggleState(index);
    }
  return (
    <section className="qualification section" id="qualifications" data-id="qualifications">
        <h2 className="section__title">Qualifications</h2>
        <span className="section__subtitle">Academic and Professional Career</span>

        <div className="qualification__container container">
            <div className="qualification__tabs" data-aos="flip-down" data-aos-duration="1500">
                <div className={toggleState === 1 ? "qualification__button qualification__active button--flex" : "qualification__button button--flex"} onClick={() => toggleTab(1)}>
                    <i className="uil uil-graduation-cap qualification__icon"></i> Education
                </div>

                <div className={toggleState === 2 ? "qualification__button qualification__active button--flex" : "qualification__button button--flex"} onClick={() => toggleTab(2)}>
                    <i className="uil uil-briefcase-alt qualification__icon"></i> Experience
                </div>
            </div>

            <div className="qualification__sections">
                {/*--==================== QUALIFICATION CONTENT 1 ====================--*/}
                <div className={toggleState === 1 ? "qualification__content qualification__content-active" : "qualification__content"}>
                    {/*--==================== QUALIFICATION  1 ====================--*/}  
                    <div className="qualification__data">
                        <div data-aos="fade-left" data-aos-duration="1500">
                            <span className="qualification__degree">Under Graduation</span>
                            <h3 className="qualification__title">BCA</h3>
                            <span className="qualification__subtitle">Kristu Jayanti College, <br /> Bengaluru</span>
                            <div className="qualification__calender">
                                <i class="uil uil-calendar-alt"></i> 2019 - 2022
                            </div>
                        </div>

                        <div>
                            <span className="qualification__rounder"></span>
                            <span className="qualification__line"></span>
                        </div>
                    </div>
                    
                    {/*--==================== QUALIFICATION  2 ====================--*/}  
                    <div className="qualification__data">
                        <div></div>
                       
                        <div>
                            <span className="qualification__rounder"></span>
                        </div>
                        <div data-aos="fade-right" data-aos-duration="1500">
                            <span className="qualification__degree">Post Graduation</span>
                            <h3 className="qualification__title">MCA</h3>
                            <span className="qualification__subtitle">PES University, <br /> Bengaluru</span>
                            <div className="qualification__calender">
                                <i class="uil uil-calendar-alt"></i> 2023 - Present
                            </div>
                        </div>

                    </div>
                </div>

                {/*--==================== QUALIFICATION CONTENT 2 ====================--*/}
                <div className={toggleState === 2 ? "qualification__content qualification__content-active" : "qualification__content"}>
                    {/*--==================== QUALIFICATION  1 ====================--*/} 
                    <div className="qualification__data">
                        <div data-aos="fade-left" data-aos-duration="1500">
                            <h3 className="qualification__title">System Administrator</h3>
                            <span className="qualification__subtitle">TCS <br /> Bengaluru</span>
                            <div className="qualification__calender">
                                <i class="uil uil-calendar-alt"></i> Aug 2022 - Jan 2023
                            </div>
                        </div>

                        <div>
                            <span className="qualification__rounder"></span>
                            <span className="qualification__line"></span>
                        </div>
                    </div>

                    {/*--==================== QUALIFICATION  2 ====================--*/}  
                    <div className="qualification__data">
                        <div></div>
                       
                        <div>
                            <span className="qualification__rounder"></span>
                            <span className="qualification__line"></span>
                        </div>
                        <div data-aos="fade-right" data-aos-duration="1500">
                            <h3 className="qualification__title">Red Team Engineer</h3>
                            <span className="qualification__subtitle">VTF <br /> Los Angeles, CA</span>
                            <div className="qualification__calender">
                                <i class="uil uil-calendar-alt"></i> July 2023 - Sep 2023
                            </div>
                        </div>
                    </div>

                    {/* --==================== QUALIFICATION  3 ====================-- */}
                    <div className="qualification__data">
                        <div data-aos="fade-left" data-aos-duration="1500">
                            <h3 className="qualification__title">Cloud Security Engineer</h3>
                            <span className="qualification__subtitle">VTF <br /> Los Angeles, CA</span>
                            <div className="qualification__calender">
                                <i className="uil uil-calendar-alt"></i> Oct 2023 - Present
                            </div>
                        </div>               
                        <div>
                            <span className="qualification__rounder"></span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Qualification