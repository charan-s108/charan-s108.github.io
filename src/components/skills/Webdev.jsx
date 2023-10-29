import React from 'react'

const Webdev = () => {
  return (
    <div className="skills__content">
        <h3 className="skills__title">Web Development</h3>

            <div className="skills__box">

                <div className="skills__group">

                    <div className="skills__data">
                        <i class="fa-brands fa-html5 skills__icon"></i>

                        <div>
                            <h3 className="skills__name">HTML</h3>
                            <span className="skills__level">Advanced</span>
                        </div>
                    </div>

                    <div className="skills__data">
                    <i class="fa-brands fa-css3-alt skills__icon"></i>

                        <div>
                            <h3 className="skills__name">CSS</h3>
                            <span className="skills__level">Intermediate</span>
                        </div>
                    </div>

                    <div className="skills__data">
                    <i class="fa-brands fa-square-js skills__icon"></i>

                        <div>
                            <h3 className="skills__name">JavaScript</h3>
                            <span className="skills__level">Basic</span>
                        </div>
                    </div>
                </div>

                <div className="skills__group">
                    
                    <div className="skills__data">
                    <i class="fa-brands fa-react skills__icon"></i>

                        <div>
                            <h3 className="skills__name">React JS</h3>
                            <span className="skills__level">Intermediate</span>
                        </div>
                    </div>
                    
                    <div className="skills__data">
                    <i class="fa-brands fa-php skills__icon"></i>

                        <div>
                            <h3 className="skills__name">PHP</h3>
                            <span className="skills__level">Intermediate</span>
                        </div>
                    </div>

                    <div className="skills__data">
                    <i class="fa-brands fa-java skills__icon"></i>

                        <div>
                            <h3 className="skills__name">Java</h3>
                            <span className="skills__level">Basic</span>
                        </div>
                    </div>

                </div>
            </div>
    </div>
  )
}

export default Webdev