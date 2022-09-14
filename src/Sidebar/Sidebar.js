import React from 'react'
import Images from '../Images'

export default function Sidebar(props) {

    // If clicked outside thiese elements, then make isMobile false
    const handleClickOutside = (e) => {
        if (e.target.classList.contains('sidebar-container')) {
            props.setIsMobile(true)
        } else {
            props.setIsMobile(false)
        }
    }

    // Click Listener
    document.addEventListener('click', handleClickOutside, true)

    return (
        <>
            <header id="header">
                <div className="row m-0 toggle-left">
                    <div className="bgcolor-black">
                        <nav className="primary-nav navbar-expand-md ">
                            <div className="site-title text-center text-light py-5">
                                <span className="navbar-brand font-staat font-size-40">
                                    {/* MURSAL */}
                                    {/* <span className='header_title'>
                                        Neon Effect Text Goes here
                                    </span> */}
                                </span>
                            </div>
                            <div className="d-flex flex-column ">
                                <a href="#home"
                                    className="nav-item nav-link text-white-50 font-os font-size-16 active">
                                    <img src={Images.LogoWhite} height='40px' width='40px' alt="logo" className="logo-white" />
                                </a>
                                <a href="#about_me"
                                    className="nav-item nav-link text-white-50 font-os font-size-16 active">
                                    <i className="fas fa-info-circle"></i>
                                </a>
                                <a href="#skills"
                                    className="nav-item nav-link text-white-50 font-os font-size-16 active">
                                    <i class="fa-duotone fa-code"></i>
                                </a>
                                <a href="#education"
                                    className="nav-item nav-link text-white-50 font-os font-size-16 active">
                                    <i class="fa-duotone fa-building-columns"></i>
                                </a>
                                <a href="#experience"
                                    className="nav-item nav-link text-white-50 font-os font-size-16 active">
                                    <i class="fa-duotone fa-laptop-code"></i>
                                </a>
                                <a href="projects.html"
                                    className="nav-item nav-link text-white-50 font-os font-size-16 active">
                                    <i class="fa-duotone fa-diagram-project"></i>
                                </a>
                                <a href="#certifications"
                                    className="nav-item nav-link text-white-50 font-os font-size-16 active">
                                    <i class="fa-duotone fa-file-certificate"></i>
                                </a>
                                <a href="#publications"
                                    className="nav-item nav-link text-white-50 font-os font-size-16 active">
                                    <i class="fa-duotone fa-books"></i>
                                </a>
                                <a href="#footer" className="nav-item nav-link text-white-50 font-os font-size-16 active">

                                </a>
                            </div>
                        </nav>
                    </div>
                </div>
            </header>
        </>
    )
}
