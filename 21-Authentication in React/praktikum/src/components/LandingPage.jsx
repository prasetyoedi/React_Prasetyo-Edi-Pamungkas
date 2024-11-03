import React from 'react'

export default function LandingPage() {
    return (
        <>
            <section id="hero">
                <div className="hero-content">
                    <div className="row">
                        <div className="col col1">
                            <h1>Better Solutions For Your Business</h1>
                            <p>
                                We are team of talented designers making websites with Bootstrap
                            </p>
                            <div style={{ display: "flex", marginTop: 48 }}>
                                <a href="#" style={{ textDecoration: "none" }}>
                                    <button className="btn-get-started">Get Started</button>
                                </a>
                                <a href="#" style={{ textDecoration: "none" }}>
                                    <div className="btn-watch-video">Watch Video</div>
                                </a>
                            </div>
                        </div>
                        <div className="col">
                            <img
                                src="/hero-img.png"
                                alt="gambar hero"
                                className="hero-img"
                            />
                        </div>
                    </div>
                </div>
            </section>
            <section id="newsletter">
                <div className="title">Join Our Newsletter</div>
                <div className="subtitle">
                    Tamen quem nulla quae legam multos aute sint culpa legam noster magna
                </div>
                <div className="subscribe-container">
                    <input
                        type="email"
                        className="subscribe-input"
                        placeholder="Enter your email"
                    />
                    <button className="subscribe-button">Subscribe</button>
                </div>
            </section>
        </>
    )
}
