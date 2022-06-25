import React from 'react'

export default function WriteUps() {
    return (
        <section className="news py-5 px-4 bg-light" id="publications">
            <div className="py-3">
                <h5 className="text-uppercase font-os font-size-16 text-muted">Blogs &</h5>
                <h1 className="text-uppercase font-staat font-size-34">Publications</h1>
            </div>
            <div className="row">
                <div className="col-sm-4 my-3">
                    <div className="card border-0">
                        <a href="https://medium.com/analytics-vidhya/generate-certificates-using-python-a7685985ed77"
                            rel="noreferrer" target="_blank">
                            <img src="./assets/news/04.jpg" alt="news1" className="card-img-top" />
                        </a>
                        <div className="card-body">
                            <p className="font-ram font-size-16 text-black-50">Technical Blog</p>
                            <b className="text-uppercase text-dark">Generate Certificates using Python</b>
                            <p className="cart-text text-black-50 text-secondary">
                                Being a Microsoft Student Partner (MSP) means we have to deal with our developer
                                community every day. And every day, we are trying to teach and learn ...
                            </p>

                        </div>
                    </div>
                </div>
                <div className="col-sm-4 my-3">
                    <div className="card border-0">
                        <a href="https://ieeexplore.ieee.org/document/8673426" rel="noreferrer" target="_blank">
                            <img src="./assets/news/01.jpg" alt="news1" className="card-img-top" />
                        </a>
                        <div className="card-body">
                            <p className="font-ram font-size-16 text-black-50">Research Paper</p>
                            <b className="text-uppercase text-dark">Industrial Robotic Claw for Cottage
                                Industries</b>
                            <p className="cart-text text-black-50 text-secondary">
                                International Conference of Mathematics, Engineeering and Technology (iCoMET)
                                2019 <br />
                                <i>Sukkur IBA University, Sukkur, Pakistan</i>
                            </p>
                        </div>
                    </div>
                </div>
                <div className="col-sm-4 my-3">
                    <div className="card border-0">
                        <a href="https://medium.com/@mursalfurqan/send-automated-emails-with-python-a3890c456e94"
                            rel="noreferrer" target="_blank">
                            <img src="./assets/news/02.jpg" alt="news1" className="card-img-top" />
                        </a>
                        <div className="card-body">
                            <p className="font-ram font-size-16 text-black-50">Technical Blog</p>
                            <b className="text-uppercase text-dark">Send Automated Emails with Python</b>
                            <p className="cart-text text-black-50 text-secondary">
                                21st Century is the age of digitization, and the world is changing is so fast,
                                that if you learn to stay updated with everyone, you would be far left ...
                            </p>
                        </div>
                    </div>
                </div>
                <div className="col-sm-4 my-3">
                    <div className="card border-0">
                        <a href="https://www.theticblog.com/top-10-disadvantages-of-the-internet/"
                            rel="noreferrer" target="_blank">
                            <img src="./assets/news/03.jpg" alt="news1" className="card-img-top" /></a>
                        <div className="card-body">
                            <p className="font-ram font-size-16 text-black-50">Technical Blog</p>
                            <b className="text-uppercase text-dark">Top 10 Disadvantages of Internet</b>
                            <p className="cart-text text-black-50 text-secondary">
                                In this article, we are going to discuss one of the biggest issue/crises of the
                                decade: Disadvantages of the Intern...
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
