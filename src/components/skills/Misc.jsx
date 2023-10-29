import React from 'react'

const Misc = () => {
  return (
    <div className="skills__content">
        <h3 className="skills__title">Miscellaneous</h3>

            <div className="skills__box">

                <div className="skills__group">
                    <div className="skills__data">
                    <i class="fa-brands fa-aws skills__icon"></i>

                        <div>
                            <h3 className="skills__name">AWS</h3>
                            <span className="skills__level">Intermediate</span>
                        </div>
                    </div>

                    <div className="skills__data">
                    <i class="fa-brands fa-salesforce skills__icon"></i>

                        <div>
                            <h3 className="skills__name">Salesforce</h3>
                            <span className="skills__level">Intermediate</span>
                        </div>
                    </div>

                    <div className="skills__data">
                    <i class="fa-sharp fa-solid fa-circle-chevron-right skills__icon"></i>

                        <div>
                            <h3 className="skills__name">Splunk</h3>
                            <span className="skills__level">Intermediate</span>
                        </div>
                    </div>
                </div>

                <div className="skills__group">
                    <div className="skills__data">
                    <i class="fa-brands fa-linux skills__icon"></i>

                        <div>
                            <h3 className="skills__name">Linux</h3>
                            <span className="skills__level">Intermediate</span>
                        </div>
                    </div>
                    
                    <div className="skills__data">
                    <i class="fa-brands fa-python skills__icon"></i>

                        <div>
                            <h3 className="skills__name">Python</h3>
                            <span className="skills__level">Intermediate</span>
                        </div>
                    </div>

                    <div className="skills__data">
                    <i class="fa-brands fa-github skills__icon"></i>

                        <div>
                            <h3 className="skills__name">Github</h3>
                            <span className="skills__level">Advanced</span>
                        </div>
                    </div>
                </div>    
            </div>           
    </div>
  )
}

export default Misc