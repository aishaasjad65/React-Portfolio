import React from 'react'
import TextScrambler from 'react-scramble-text'
import constants from '../constants.js'
import Images from '../Images.js'

export default function Desktop_Banner() {
    return (
        <section className="site-banner" id="home">
            <div className="banner-area text-center ">
                <video className="grayScale_vid_bg" autoPlay muted loop id="myVideo">
                    <source src={Images.bg_video} type="video/mp4" />
                </video>
                <div className="author  text-center ">
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
                    <div className="author-img text-center">
                        <img className="normal_img grayscaleFilter" src={Images.about_me1}></img>
                    </div>
                </div>
            </div>
        </section>
    )
}