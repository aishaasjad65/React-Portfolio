import React from 'react'
import Images from '../Images.js'

export default function AboutMe() {
    return (
        <section className="about px-4 my-5" id="about_me">
            <div className="row m-0">
                <div className="about_me_icon pl-0">
                    {window.innerWidth > 768 ?
                        <img
                            src={Images.self_png}
                            alt="Mursal Furqan"
                            className="img-fluid"
                        /> :
                        <></>
                    }

                </div>
                <div className="col-sm-8">
                    <h5 className="font-ram font-size-20 py-2 text-uppercase retro">I'm Mursal Furqan<div className="text">
                    </div>
                    </h5>
                    <p className="font-ram text-black-50 py-2 bio">
                        <tab>A recent CSE graduate with grave interest and
                            knowledge in programming and logic building. An
                            ML Engineer and DS with extensive hands-on experience
                            contributing to several open-source codes. A former
                            Microsoft Learn Student Ambassador, Amazon Web Services
                            Community Builder, Agora Student Ambassador, Hack Club
                            President, a web developer with a good grip on extensive
                            front-end development tools including React, Django,
                            HTML, CSS, and JavaScript along with Selenium for
                            Automation. Having a strong background in project
                            management and excellent communication skills.</tab>
                    </p>
                    <div className="d-flex flex-row flex-wrap justify-content-between py-1">
                        <div className="d-flex flex-column">
                            {/* Facebook Icon form fas*/}
                            {/* <a href="https://www.facebook.com/mursal.furqan" target="_blank" rel="noopener noreferrer">
                                <i className="fab fa-facebook-f fa-2x text-primary"></i>
                            </a> */}
                            {/* LinkedIn Icon form fab*/}
                            {/* <a href="https://www.linkedin.com/in/mursal-furqan-a8a8a817/" target="_blank" rel="noopener noreferrer">
                                <i className="fab fa-linkedin fa-2x text-primary"></i>
                            </a> */}
                            <p className="font-ram">
                                <i className="fas fa-phone"></i>
                                <span className="text-black-50"> &nbsp; +92 343-350-0305</span>
                            </p>
                            <p className="font-ram">
                                <i className="fas fa-envelope"></i>
                                <span className="text-black-50"> &nbsp; mursalfurqan@gmail.com</span>
                            </p>
                            <p className="font-ram">
                                <i className="devicon-github-plain"></i>
                                <span className="text-black-50"> &nbsp; @mursalfk</span>
                            </p>
                        </div>
                    </div>
                    <a href="https://www.fiverr.com/users/mursal_furqan/" rel="noreferrer" target="_blank">
                        <button className="btn btn-outline-dark text-uppercase mr-3">Hire Me</button></a>
                    <a href="https://drive.google.com/open?id=1MOq392jL4Kd0P5gRvPo6DpH1-WyfA47l"
                        rel="noreferrer" target="_blank">
                        <button className="btn btn-outline-dark text-uppercase mr-3">Download CV</button></a>
                </div>
            </div>
        </section>
    )
}
