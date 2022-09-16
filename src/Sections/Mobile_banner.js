import React from 'react'
import TextScrambler from 'react-scramble-text'
import constants from '../constants.js'
import Images from '../Images.js'

export default function Mobile_Banner() {
    return (
        <section className="site-banner" id="home">
            <div className="banner-area text-center ">
                <video className="colored_vid_bg" autoPlay muted loop id="myVideo">
                    <source src={Images.bg_video} type="video/mp4" />
                </video>
                <div className="author mobile_author text-center ">
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
            </div>
        </section>
    )
}