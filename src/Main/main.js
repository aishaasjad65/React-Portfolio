import React from 'react'
import 'react-scramble-text/dist/index.css'

import Sidebar from '../Sidebar/Sidebar.js'
import Skills from '../Sections/Skills.js'
import Education from '../Sections/Education.js'
import Experience from '../Sections/Experience.js'
import Achievements from '../Sections/Achievements.js'
import WriteUps from '../Sections/WriteUps.js'
import Footer from '../Sections/Footer.js'
import AboutMe from '../Sections/AboutMe.js'
import Banner from '../Sections/Banner.js'



export default function Main() {
  const [isMobile, setIsMobile] = React.useState(false)
  document.onreadystatechange = function () {
    if (document.readyState !== "complete") {
      document.querySelector(
        "body").style.visibility = "hidden";
      document.querySelector(
        "#loader").style.visibility = "visible";
    } else {
      document.querySelector(
        "#loader").style.display = "none";
      document.querySelector(
        "body").style.visibility = "visible";
    }
  };
  const toggleMenu = () => {
    console.log('toggleMenu')
    setIsMobile(!isMobile)
    // document.querySelector('.primary-nav').classList.toggle('show');
  }


  return (
    <>
      <div id="loader" className="center"></div>
      {/* <div className="scrollTop" onClick={scrollToTop()}></div> */}
      {/* Show sidebar only when windows size is more than 768 */}
      {/* {window.innerWidth > 768 ?
        <Sidebar />
        :
        <header id="header">
          {!isMobile &&
            <button onClick={() => toggleMenu()} className="toggle-button">
              <span className="fas fa-bars fa-2x"></span>
            </button>
          }
        </header>
      } */}

      {isMobile && <Sidebar setIsMobile={setIsMobile} />}

      <main id="site-main">
        <div className="row m-0">
          <div className=" px-0">
            {/* NPM RUN DEPLOY */}
            {/* Banner */}
            <Banner />

            {/* About Me */}
            <AboutMe />

            {/* Skills */}
            <Skills />

            {/* Education */}
            <Education />

            {/* Experience */}
            <Experience />

            {/* Achievements, Certifications etc. */}
            <Achievements />

            {/* Articles, Papers and Blogs */}
            <WriteUps />

            {/* Footer */}
            <Footer />
          </div >
        </div >
      </main >
    </>
  )
}
