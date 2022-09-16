import React from 'react'
import Desktop_Banner from './Desktop_Banner.js'
import Mobile_Banner from './Mobile_banner.js'

export default function Banner() {
    return (
        <section className="site-banner" id="home">
            <div className="banner-area text-center ">
                {window.innerWidth < 768 ? (
                    <Mobile_Banner />
                ) : (
                    <Desktop_Banner />
                )}
            </div>
        </section>
    )
}