import React from 'react'
import TextScrambler from 'react-scramble-text'
import constants from '../constants.js'
import Images from '../Images.js'

export default function Banner() {
    return (
        <section className="site-banner" id="home">
            <div className="banner-area text-center ">
                {window.innerWidth < 768 ? (
                    <>
                        <video className="colored_vid_bg" autoPlay muted loop id="myVideo">
                            <source src={Images.bg_video} type="video/mp4" />
                        </video>
                        <div className="author  text-center ">
                            <div className="mobile-width author-img  text-center">
                                <div className="title_loader-mobile">
                                    <span className='font-size-15'>
                                        &lt; Hello World /&gt;
                                    </span>
                                    <h1>I am Mursal Furqan</h1>
                                </div>
                                <img className="mobile_img" src={Images.about_me1}></img>
                                <h5 className="scramble_text-mobile font-size-15 text-center">
                                    <TextScrambler
                                        phrases={constants.scrambled_phrases}
                                        speed={50}
                                        pauseTime={1000}
                                        delay={0}
                                        scramble={true}
                                    />
                                </h5>
                            </div>
                        </div>
                    </>
                ) : (
                    <>
                        <video className="grayScale_vid_bg" autoPlay muted loop id="myVideo">
                            <source src={Images.bg_video} type="video/mp4" />
                        </video>
                        <div className="author  text-center ">
                            {window.innerWidth >= 768 &&
                                <div className='nomobile-text'>
                                    <p className='hello'>
                                        &lt; Hello World /&gt;
                                    </p>
                                    <p className='iam'>
                                        I am
                                    </p>
                                    <p className='name'>
                                        Mursal Furqan Kumbhar
                                    </p>
                                    <span className='designation'>
                                        <TextScrambler
                                            phrases={constants.scrambled_phrases}
                                            speed={50}
                                            pauseTime={1000}
                                            delay={0}
                                            scramble={true}
                                        />
                                    </span>
                                </div>
                            }
                            <div className="author-img  text-center">
                                <img className={`${window.innerWidth < 768 ? "mobile_img" : "normal_img"}`} src={Images.about_me1}></img>
                            </div>
                        </div>
                    </>
                )}
            </div>
        </section>
    )
}