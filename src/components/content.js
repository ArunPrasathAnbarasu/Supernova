import React from "react";
import './content.css';
import experience1 from '../Images/experience1.jpeg';
import experience2 from '../Images/experience2.jpeg';
import one from '../Images/1.png';
import two from '../Images/1.png';
import phones from '../Images/phones.png';



function Content() {
    return (
        <React.Fragment>
            <div>
                {/* <!-- Navbar --> */}
                <nav class="navbar navbar-expand-lg navbar-dark" style={{background: "black"}}>
                    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo03"
                        aria-controls="navbarTogglerDemo03" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <a class="navbar-brand" href="#"><img
                        src="https://res.cloudinary.com/urbanclap/image/upload/q_auto,f_auto,fl_progressive:steep/t_high_res_template,q_auto:low,f_auto/categories/category_v2/category_425cd8c0.png"
                        alt="UrbanClap" style={{width: "200px"}}></img></a>
                    <div class="collapse navbar-collapse" id="navbarTogglerDemo03">
                        <ul class="navbar-nav mr-auto mt-2 mt-lg-0">
                            <li class="nav-item active">
                                <a class="nav-link" href="#">Home <span class="sr-only">(current)</span></a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="#experience">Experience</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="#appliances">Appliances</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="#reviews">Reviews</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="#cleaning">Cleaning</a>
                            </li>
                        </ul>
                    </div>
                </nav>

                {/* <!-- Carousel --> */}
                <div id="carouselExampleControls" class="carousel slide" data-ride="carousel">
                    <div class="carousel-inner">
                        <div class="carousel-item active">
                            <img class="d-block w-100" src={experience1} alt="First slide"></img>
                        </div>
                        <div class="carousel-item">
                            <img class="d-block w-100" src={experience2} alt="Second slide"></img>
                        </div>
                    </div>
                    <a class="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev">
                        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span class="sr-only">Previous</span>
                    </a>
                    <a class="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next">
                        <span class="carousel-control-next-icon" aria-hidden="true"></span>
                        <span class="sr-only">Next</span>
                    </a>
                </div>

                {/* <!-- Experiences Section --> */}
                <section id="experience">
                    <div class="container p-5">
                        <div class="row justify-content-center">
                            <h3 class="text-center font-weight-bolder">Experiences in the Spotlight</h3>
                        </div>
                        <div class="row justify-content-center">
                            <h6 class="text-center light-text font-weight-normal">Hygienic & single-use products | low-contact
                                services</h6>
                        </div>
                        <div class="row justify-content-center mt-4">
                            <div class="col-12 col-md-6">
                                <img src={experience1} alt="Image" class="img-fluid"></img>
                                    <h5 class="text-center mt-3 font-weight-bold">Salon at Home</h5>
                                    <p class="text-center lighter-text">Single-use tools & products</p>
                            </div>
                            <div class="col-12 col-md-6">
                                <img src={experience2} alt="Image" class="img-fluid"></img>
                                    <h5 class="text-center mt-3 font-weight-bold">Salon at Home</h5>
                                    <p class="text-center lighter-text">Single-use cape & towels</p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* <!-- Section Separate --> */}
                <section style={{background: "#F1F4F6",height: "20px"}}></section>

                {/* <!-- Appliances Section --> */}
                <section id="appliances">
                    <div class="container p-5">
                        <div class="row justify-content-center">
                            <h3 class="text-center font-weight-bolder">Appliances: Service &amp; Repair</h3>
                        </div>
                        <div class="row justify-content-center">
                            <h6 class="text-center light-text font-weight-normal">Expert technicians at your doorstep in 2 hours
                            </h6>
                        </div>
                        <div class="row justify-content-center mt-4">
                            <div class="col-12 col-md-3">
                                <img src="https://res.cloudinary.com/urbanclap/image/upload/q_auto,f_auto,fl_progressive:steep,w_532/t_high_res_category/categories/category_v2/category_ef2b79d0.png"
                                    alt="Image" class="img-fluid"></img>
                                    <p class="text-center mt-3">AC Service and Repair</p>
                                    <p class="text-center lighter-text">30% off on Second AC onwards</p>
                            </div>
                            <div class="col-12 col-md-3">
                                <img src="https://res.cloudinary.com/urbanclap/image/upload/q_auto,f_auto,fl_progressive:steep,w_532/t_high_res_category/categories/category_v2/category_c0667020.png"
                                    alt="Image" class="img-fluid"></img>
                                    <p class="text-center mt-3">Geyser Service and Repair</p>
                            </div>
                            <div class="col-12 col-md-3">
                                <img src="https://res.cloudinary.com/urbanclap/image/upload/q_auto,f_auto,fl_progressive:steep,w_532/t_high_res_category/categories/category_v2/category_bbb8c690.png"
                                    alt="Image" class="img-fluid"></img>
                                    <p class="text-center mt-3">RO or Water Purifier Repair</p>
                            </div>
                            <div class="col-12 col-md-3">
                                <img src="https://res.cloudinary.com/urbanclap/image/upload/q_auto,f_auto,fl_progressive:steep,w_532/t_high_res_category/categories/category_v2/category_b78221c0.png"
                                    alt="Image" class="img-fluid"></img>
                                    <p class="text-center mt-3">Washing Machine Service & Repair</p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* <!-- Section Separate --> */}
                <section style={{background: "#F1F4F6",height: "20px"}}></section>

                {/* <!-- Reviews Section --> */}
                <section id="reviews">
                    <div class="container p-5">
                        <div class="row justify-content-center">
                            <h3 class="text-center font-weight-bolder">Customer safety is our priority</h3>
                        </div>
                        <div class="row justify-content-center">
                            <h6 class="text-center light-text font-weight-normal">What customers are saying about our safety
                                standards
                            </h6>
                        </div>
                        <div class="row justify-content-center mt-4">
                            <div class="col-12 col-md-3">
                                <img src="https://res.cloudinary.com/urbanclap/image/upload/q_auto,f_auto,fl_progressive:steep,w_568/t_high_res_template/categories/category_v2/category_3782c0d0.png"
                                    alt="Image" class="img-fluid"></img>
                            </div>
                            <div class="col-12 col-md-3">
                                <img src="https://res.cloudinary.com/urbanclap/image/upload/q_auto,f_auto,fl_progressive:steep,w_568/t_high_res_template/categories/category_v2/category_38337330.png"
                                    alt="Image" class="img-fluid"></img>
                            </div>
                            <div class="col-12 col-md-3">
                                <img src="https://res.cloudinary.com/urbanclap/image/upload/q_auto,f_auto,fl_progressive:steep,w_568/t_high_res_template/categories/category_v2/category_387cb130.png"
                                    alt="Image" class="img-fluid"></img>
                            </div>
                            <div class="col-12 col-md-3">
                                <img src="https://res.cloudinary.com/urbanclap/image/upload/q_auto,f_auto,fl_progressive:steep,w_568/t_high_res_template/categories/category_v2/category_3bbf0af0.png"
                                    alt="Image" class="img-fluid"></img>
                            </div>
                        </div>
                    </div>
                </section>

                {/* <!-- Section Separate --> */}
                <section style={{background: "#F1F4F6",height: "20px"}}></section>

                {/* <!-- Cleaning Section --> */}
                <section id="cleaning">
                    <div class="container p-5">
                        <div class="row justify-content-center">
                            <h3 class="text-center font-weight-bolder">Cleaning & Pest Control </h3>
                        </div>
                        <div class="row justify-content-center">
                            <h6 class="text-center light-text font-weight-normal"> Removes hard stains & more
                            </h6>
                        </div>
                        <div class="row justify-content-center mt-4">
                            <div class="col-12 col-md-3">
                                <img src="https://res.cloudinary.com/urbanclap/image/upload/q_auto,f_auto,fl_progressive:steep,w_532/t_high_res_category/categories/category_v2/category_165bfd50.png"
                                    alt="Image" class="img-fluid" style={{height:"150px"}}></img>
                                    <p class="text-center mt-3">Professional Bathroom Cleaning</p>
                            </div>
                            <div class="col-12 col-md-3">
                                <img src="https://res.cloudinary.com/urbanclap/image/upload/q_auto,f_auto,fl_progressive:steep,w_532/t_high_res_category/categories/category_v2/category_e06f0000.jpeg"
                                    alt="Image" class="img-fluid" style={{height:"150px"}}></img>
                                    <p class="text-center mt-3">Car Cleaning</p>
                            </div>
                            <div class="col-12 col-md-3">
                                <img src="https://res.cloudinary.com/urbanclap/image/upload/q_auto,f_auto,fl_progressive:steep,w_532/t_high_res_category/categories/category_v2/category_2effaaf0.png"
                                    alt="Image" class="img-fluid" style={{height:"150px"}}></img>
                                    <p class="text-center mt-3">Professional Sofa Cleaning</p>
                            </div>
                            <div class="col-12 col-md-3">
                                <img src="https://res.cloudinary.com/urbanclap/image/upload/q_auto,f_auto,fl_progressive:steep,w_532/t_high_res_category/categories/category_v2/category_5cadb240.jpeg"
                                    alt="Image" class="img-fluid" style={{height:"150px"}}></img>
                                    <p class="text-center mt-3">Pest Control</p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* <!-- Section Separate --> */}
                <section style={{background: "#F1F4F6",height: "20px"}}></section>

                {/* <!-- Insurance Section --> */}
                <section id="insurance">
                    <div class="container-fluid p-2">
                        <div class="row justify-content-center">
                            <img src={one} alt="Image" class="img-fluid" style={{width: "100%"}}></img>
                        </div>
                    </div>
                </section>

                {/* <!-- Section Separate --> */}
                <section style={{background: "#F1F4F6",height: "20px"}}></section>

                {/* <!-- Government Section --> */}
                <section id="government">
                    <div class="container-fluid p-2">
                        <div class="row justify-content-center">
                            <img src={two} alt="Image" class="img-fluid" style={{width: "100%"}}></img>
                        </div>
                    </div>
                </section>

                {/* <!-- Section Separate --> */}
                <section style={{background: "#F1F4F6",height: "20px"}}></section>

                {/* <!-- Refer Section --> */}
                <section id="refer">
                    <div class="container p-5">
                        <div class="row justify-content-center">
                            <div class="col-12 col-md-6">
                                <div class="row justify-content-start mt-md-2">
                                    <h2 class="text-left font-weight-bolder mt-md-5">Refer and get free services </h2>
                                </div>
                                <div class="row justify-content-start">
                                    <h6 class="text-left light-text font-weight-normal">Invite your friends to Urban Company
                                        services. They get Rs. 100 off. You win upto Rs. 5000
                                    </h6>
                                </div>
                                <div class="row justify-content-start">
                                    <div class="buttonIn">
                                        <input type="number" id="referralForm" class="form-control" placeholder="9876543210"></input>
                                            <button id="submitRefer" class="btn btn-black">Send</button>
                                    </div>
                                </div>
                                <div class="row justify-content-start mt-5">
                                    <div class="col-12 col-md-4">
                                        <a
                                            href="https://app.appsflyer.com/com.urbanclap.urbanclap?pid=MobileWeb&c=home_app_buttons"><img
                                                src="https://images.urbanclap.com/image/upload/categories/category_v2/category_7f907eb0.png"
                                                alt="Image" class="img-fluid" style={{height: "50px"}}></img></a>
                                    </div>
                                    <div class="col-12 col-md-4">
                                        <a href="https://app.appsflyer.com/id1032480595?pid=MobileWeb&c=home_app_buttons"><img
                                            src="https://images.urbanclap.com/image/upload/categories/category_v2/category_7f741d10.png"
                                            alt="Image" class="img-fluid" style={{height: "50px"}}></img></a>
                                    </div>
                                </div>
                            </div>
                            <div class="col-12 col-md-6">
                                <img src={phones} alt="Image" class="img-fluid"></img>
                            </div>
                        </div>
                    </div>
                </section>

                {/* <!-- Footer --> */}
                <footer class="site-footer">
                    <div class="container" style={{overflowX: "hidden"}}>
                        <div class="row">
                            <div class="col-12 col-md-12">
                                <img src="https://res.cloudinary.com/urbanclap/image/upload/q_auto,f_auto,fl_progressive:steep/t_high_res_template,q_auto:low,f_auto/categories/category_v2/category_425cd8c0.png"
                                    class="img-fluid" alt="UrbanClap" style={{width: "250px"}}></img>
                                    <p class="text-justify mt-3">Lorem Ipsum. Proin gravida
                                        nibh vel velit auctor aliquet. Aenean
                                        sollicitudin, lorem quis bibendum nisi elit consequat ipsum, nec sagittis sem nibh id elit. Duis
                                        sed odio sit amet nibh vulputate cursus a sit amet mauris orbi accumsan.Lorem Ipsum. Proin
                                        gravida nibh vel velit auctor aliquet. Aenean sollicitudin, lorem quis bibendum nisi elit
                                        consequat ipsum, nec sagittis sem nibh id elit. Duis sed odio sit amet nibh vulputate cursus a
                                        sit amet mauris orbi accumsan.</p>
                            </div>
                            <div class="col-12 col-md-3">
                                <h6>Candidates</h6>
                                <ul class="footer-links">
                                    <li><a href="#">Lorem Ipsum</a></li>
                                    <li><a href="#">Lorem Ipsum</a></li>
                                    <li><a href="#">Lorem Ipsum</a></li>
                                    <li><a href="#">Lorem Ipsum</a></li>
                                </ul>
                            </div>
                            <div class="col-12 col-md-3">
                                <h6>Employees</h6>
                                <ul class="footer-links">
                                    <li><a href="#">Lorem Ipsum</a></li>
                                    <li><a href="#">Lorem Ipsum</a></li>
                                    <li><a href="#">Lorem Ipsum</a></li>
                                    <li><a href="#">Lorem Ipsum</a></li>
                                </ul>
                            </div>
                            <div class="col-12 col-md-3">
                                <h6>Quick Links</h6>
                                <ul class="footer-links">
                                    <li><a href="index.html">Lorem Ipsum</a></li>
                                    <li><a href="about.html">Lorem Ipsum</a></li>
                                    <li><a href="features.html">Lorem Ipsum</a></li>
                                    <li><a href="jobs.html">Lorem Ipsum</a></li>
                                    <li><a href="contact.html">Lorem Ipsum</a></li>
                                </ul>
                            </div>
                            <div class="col-12 col-md-3">
                                <h6>Workspace</h6>
                                <ul class="footer-links">
                                    <li>Lorem Ipsum. Proin gravida
                                        nibh vel velit auctor aliquet. cheyyar-604407.</li>
                                    <li><b>Phone: </b><a href="tel:9994708434">9994708434</a></li>
                                    <li><b>Email: </b><a href="mailto:support@arun.com">support@arun.com</a></li>
                                </ul>
                            </div>
                        </div>
                        <hr></hr>
                    </div>
                    <div class="container">
                        <div class="row">
                            <div class="col-md-8 col-sm-6 col-xs-12">
                                <p class="copyright-text">© Copyright 2020 | UrbanClap | All right reserved.
                                </p>
                            </div>

                            <div class="col-md-4 col-sm-6 col-xs-12">
                                <ul class="social-icons">
                                    <li><a class="facebook" href="#"><i class="fa fa-facebook"></i></a></li>
                                    <li><a class="twitter" href="#"><i class="fa fa-twitter"></i></a></li>
                                    <li><a class="linkedin" href="#"><i class="fa fa-linkedin"></i></a></li>
                                    <li><a class="youtube" href="#"><i class="fa fa-youtube"></i></a></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </footer>
            </div>
        </React.Fragment>
    )
}

export default Content;