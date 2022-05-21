import React from 'react';

const Footer = () => {
    return <>
        <footer>
            <div className="container">
                <div className="row">
                    <div className="col-12 col-lg-10 mx-auto">
                        <div className="row">
                            <div className="col-6 col-lg-3">
                                <h2>HypeFlix</h2>
                                <ul>
                                    <li>
                                        <a href="#">Final Year Project for MCA Second Year</a>
                                    </li>
                                    <li>
                                        <a href="#">Pranveer Singh Institute of Technology, Kanpur.</a>
                                    </li>
                                </ul>
                            </div>
                            <div className="col-6 col-lg-3">
                                <h2>Support</h2>
                                <ul>
                                    <li>
                                        <a href="#">+918318882934</a>
                                    </li>
                                    <li>
                                        <a href="#">sakshamg.782@gmail.com</a>
                                    </li>
                                </ul>
                            </div>
                            <div className="col-6 col-lg-3">
                                <h2>Services</h2>
                                <ul>
                                    <li>
                                        <a href="#">Streaming</a>
                                    </li>
                                    <li>
                                        <a href="#">Decade-wise Content</a>
                                    </li>
                                </ul>
                            </div>
                            <div className="col-6 col-lg-3">
                                <h2>Repositories</h2>
                                <div className="row">
                                    <div className="col-3 mx-auto">
                                        <a href="#">
                                            <i className="fab fa-github fontawesome-style"></i>
                                        </a>
                                    </div>
                                    <div className="col-3 mx-auto">
                                        <a href="#">
                                            <i className="fab fa-youtube fontawesome-style"></i>
                                        </a>
                                    </div>
                                    <div className="col-3 mx-auto">
                                        <a href="#">
                                            <i className="fas fa-television fontawesome-style"></i>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <hr></hr>
                        <div className="mt-5">
                            <p className="main-hero-para text-center">Copyright @ 2022 HypeFlix by Saksham(Team Leader), Abhijeet, Ashutosh, Garima and Vinay, MCA - Second Year</p>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    </>;
}

export default Footer