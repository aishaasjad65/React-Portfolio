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
                                                <i>
                                                    {experience.duration}
                                                </i>
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
                        {constants.experience.map((experience, index) => (
                            <div className="col-md-4 col-sm-6 mb-4 text-center experience_box">
                                <div className="panel border p-4">
                                    <span className="icon text-secondary"><i className={experience.className}></i></span>
                                    <h4 className="font-ram py-4">{experience.title}</h4>
                                    <p className="font-ram font-size-16 text-black-50">
                                        {experience.location}
                                        {experience.details}
                                        <br />
                                        <i>
                                            {experience.duration}
                                        </i>
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>
                </>)}

        </section >
    )
}
