import React, { useEffect } from 'react'
import { useState } from 'react';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

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


export default function WriteUps() {
    const [writeUps, setWriteUps] = useState([]);
    useEffect(() => {
        // Function to fetch all articles from Dev.to API
        async function fetchArticles() {
            const response = await fetch(
                'https://dev.to/api/articles?username=mursalfk'
            );
            const data = await response.json();
            data?.map((article) => {
                const needed_data = {
                    title: article.title,
                    description: article.description,
                    url: article.url,
                    image: article.social_image,
                    date: article.published_at,
                    tags: article.tag_list,
                }
                setWriteUps(prevState => [...prevState, needed_data])
            })
        }
        fetchArticles();
    }, [])
    return (
        <section className="news py-5 px-4 bg-light" id="publications">
            <div className="py-3">
                <h5 className="text-uppercase font-os font-size-16 text-muted">Blogs &</h5>
                <h1 className="text-uppercase font-staat font-size-34">Articles</h1>
            </div>
            <div className="row">
                <div className="carousal1"
                    swipeable="true"
                    draggable="true"
                    ssr="true" // means to render carousel on server-side.
                    keyboardcontrol="true"
                    customdransition="all .5"
                    transitionduration={500}
                    containerclass="carousel-container"
                >
                    <Carousel responsive={responsive}>
                        {writeUps.map((writeUp, index) => (
                            <div className="card mb-3" key={index}>
                                <div className="card-body">
                                    <img src={writeUp.image} alt="WriteUp" className="card-img-top" />
                                    <div className="card-text tags-section">
                                        {writeUp.tags.map((tag, index) => (
                                            <span className="tags-badge badge badge-pill badge-primary mr-2" key={'i' + index}>#{tag}</span>
                                        ))}
                                    </div>
                                    <h5 className="card-title">{writeUp.title}</h5>
                                    <p className="card-text">{writeUp.description}</p>
                                    <a href={writeUp.url} target="_balnk" rel="noopener" className="read_more_btn btn btn-primary">Read More</a>
                                </div>
                            </div>
                        ))}
                    </Carousel>
                </div>
            </div>
        </section>
    )
}
