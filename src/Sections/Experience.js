import React from 'react'
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import constants from '../constants';

const responsive = {
    superLargeDesktop: {
        // the naming can be any, depends on you.
        breakpoint: { max: 4000, min: 3000 },
        items: 5
    },
    desktop: {
        breakpoint: { max: 3000, min: 1024 },
        items: 3
    },
    tablet: {
        breakpoint: { max: 1024, min: 464 },
        items: 2
    },
    mobile: {
        breakpoint: { max: 464, min: 0 },
        items: 1
    }
};

export default function Experience() {
    return (
        <section className="reference bg-light py-5 px-4" id="experience">

            {window.innerWidth < 768 ? (
                <>
                    <div className="refer py-3">
                        <h5 className="text-uppercase font-os font-size-16 text-muted">What is my</h5>
                        <h1 className="text-uppercase font-staat font-size-34">Experience ({constants.experience.length})</h1>
                    </div>
                    <div className="row">
                        <div className="carousal_education"
                            swipeable="true"
                            draggable="true"
                            ssr="true" // means to render carousel on server-side.
                            keyboardcontrol="true"
                            customdransition="all .5"
                            transitionduration={500}
                            containerclass="carousel-container"
                        >
                            <Carousel responsive={responsive}>
                                {constants.experience.map((experience, index) => (
                                    <div className="card mb-4 text-center education_box">
                                        <div className="panel border p-4">
                                            <span className="icon text-secondary"><i className={experience.className}></i></span>
                                            <h4 className="font-ram py-4">{experience.title}</h4>
                                            <p className="font-ram font-size-16 text-black-50">
                                                {experience.location}
                                                {experience.details}
                                                <br />
                                                {experience.duration}
                                            </p>
                                        </div>
                                    </div>
                                ))}
                            </Carousel>
                        </div>
                    </div>
                </>
            ) : (
                <>
                    <div className="refer py-3">
                        <h5 className="text-uppercase font-os font-size-16 text-muted">What is my</h5>
                        <h1 className="text-uppercase font-staat font-size-34">Experience</h1>
                    </div>
                    <div className="row mb-5">
                        <div className="col-md-4 col-sm-6 mb-4 text-center experience_box">
                            <div className="panel border p-4 ">
                                <span className="icon text-secondary"><i className="fab fa-react fa-3x sk"></i></span>
                                <h4 className="font-ram py-4">Associate Software Engineer</h4>
                                <p className="font-ram font-size-16 text-black-50">
                                    <b><i>Diya Interactive, Karachi</i></b>
                                    <br />
                                    <br />
                                    Worked with ReactJS & Django to develop web applications, such as <a
                                        href="http://qriositynet.com">QriosityNet</a> & Others.
                                </p>
                            </div>
                        </div>
                        <div className="col-md-4 col-sm-6 mb-4 text-center experience_box">
                            <div className="panel border p-4">
                                <span className="icon text-secondary"><i className="fas fa-cogs fa-3x sk"></i></span>
                                <h4 className="font-ram py-4">CIT Instructor</h4>
                                <p className="font-ram font-size-16 text-black-50">Kamyab Jawan Programme, ORIC,
                                    <b><i>MUET</i></b><br /> <br />
                                    Main reponsibilities include training the youth of Pakistan to empower the future.
                                </p>
                            </div>
                        </div>
                        <div className="col-md-4 col-sm-6 mb-4 text-center experience_box">
                            <div className="panel border p-4">
                                <span className="icon text-secondary"><i className="fas fa-cog fa-3x sk"></i></span>
                                <h4 className="font-ram py-4">STEAM Trainer for 4IR</h4>
                                <p className="font-ram font-size-16 text-black-50">
                                    <b><i>Int't Islamic Univ. Islamabad Schools, Latifabad, Hyderabad </i></b><br /> <br />
                                    Worked with IIUISL team to teach and instruct young students about STEAM w.r.t. 4th
                                    Industrial Revolution and its integration in their syllabus.
                                </p>
                            </div>
                        </div>
                        <div className="col-md-4 col-sm-6 mb-4 text-center experience_box">
                            <div className="panel border p-4">
                                <span className="icon text-secondary"><i className="fas fa-network-wired fa-3x sk"></i></span>
                                <h4 className="font-ram py-4">Network Analyst (Intern)</h4>
                                <p className="font-ram font-size-16 text-black-50">
                                    <b><i>Pakistan Telecommunication Limited, Hyderabad</i></b><br /> <br />
                                    Worked with PTCL’s customer relation and network analyst team to detect and solve
                                    customer complaints. Also worked on Nokia Motive to document faulty lines.
                                </p>
                            </div>
                        </div>
                        <div className="col-md-4 col-sm-6 mb-4 text-center experience_box">
                            <div className="panel border p-4">
                                <span className="icon text-secondary"><i className="fab fa-react fa-3x sk"></i></span>
                                <h4 className="font-ram py-4">React Native Developer (Intern)</h4>
                                <p className="font-ram font-size-16 text-black-50">
                                    <b><i>Codex Innovation Club (CIC) Hub, Hyderabad </i></b><br /> <br />
                                    Have an experience of 14 Weeks being an React Native Internee. Helped in different
                                    projects including: Smart Attendance System (With QR Code) etc.
                                </p>
                            </div>
                        </div>
                    </div>
                </>)}

        </section >
    )
}
