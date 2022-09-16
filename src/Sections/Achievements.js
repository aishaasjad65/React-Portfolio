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

export default function Achievements() {
    return (
        <section className="work py-5 px-4" id="certifications">
            <div className="py-3">
                <h5 className="text-uppercase font-os font-size-16 text-muted">certifications and</h5>
                <h1 className="text-uppercase font-staat font-size-34">Achievements</h1>
            </div>
            <div className="row text-center">
                {window.innerWidth < 768 ? (
                    <>
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
                                {constants.Achievements.map((Achievements, index) => (
                                    <div className="col-sm-2 pb-1">
                                        <img src={Achievements.image} width="200" height="200" alt={Achievements.title}
                                            className="img-fluid tilt" />
                                        <h4 className="text-uppercase font-os font-size-16 text-muted py-2">{Achievements.title}</h4>
                                    </div>
                                ))}
                            </Carousel>
                        </div>
                    </>
                ) : (
                    <>
                        {
                            constants.Achievements && constants.Achievements.map((item, index) => {
                                return (
                                    <>

                                    </>
                                )
                            })
                        }
                    </>
                )}

            </div>
        </section>
    )
}
