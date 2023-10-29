import React from 'react';
import Terrafrom from "../../assets/terraform_logo.png";
import Kubernetes from "../../assets/kubernetes_logo.png";
import Jenkins from "../../assets/jenkins_logo.png";
import CircleCI from "../../assets/CircleCI.png";

const Cloud = () => {
  return (
    <div className="skills__content">
        <h3 className="skills__title">Cloud Technologies</h3>

            <div className="skills__box">

                <div className="skills__group">
                    <div className="skills__data">
                        <i class="fa-brands fa-docker skills__icon"></i>

                        <div>
                            <h3 className="skills__name">Docker</h3>
                            <span className="skills__level">Basic</span>
                        </div>
                    </div>

                    <div className="skills__data">
                    <img src={Terrafrom} alt="" className='skills__icon external' />

                        <div>
                            <h3 className="skills__name">Terraform</h3>
                            <span className="skills__level">Basic</span>
                        </div>
                    </div>

                    <div className="skills__data">
                    <img src={Kubernetes} alt="" className='skills__icon external' />

                        <div>
                            <h3 className="skills__name">Kubernetes</h3>
                            <span className="skills__level">Basic</span>
                        </div>
                    </div>
                </div>

                <div className="skills__group">
                    <div className="skills__data">
                    <img src={Jenkins} alt="" className='skills__icon external' />

                        <div>
                            <h3 className="skills__name">Jenkins</h3>
                            <span className="skills__level">Basic</span>
                        </div>
                    </div>

                    <div className="skills__data">
                    <img src={CircleCI} alt="" className='skills__icon external' />

                        <div>
                            <h3 className="skills__name">CircleCI</h3>
                            <span className="skills__level">Basic</span>
                        </div>
                    </div>

                    <div className="skills__data">
                    <i class="fa-brands fa-gitlab skills__icon"></i>

                        <div>
                            <h3 className="skills__name">Gitlab</h3>
                            <span className="skills__level">Basic</span>
                        </div>
                    </div>
                </div>    
            </div>
    </div>
  )
}

export default Cloud