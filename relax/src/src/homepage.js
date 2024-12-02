import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import ThemeProvider from "react-bootstrap/ThemeProvider";
import Carousel from "react-bootstrap/Carousel";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import "@fortawesome/fontawesome-free/css/all.min.css";

import "../css/reset.css";
import "../css/homepage.css";

const HomepageScreen = () => {
    const [openup, setOpenup] = useState(false);

    const [homecontent, updatedHomecontent] = useState({
        fieldName: "",
        fieldNumber: [],
        fieldEmail: "",
        fieldAddress:""
    })

    const getHomepageValue = (event) => {
        updatedHomecontent({...homecontent,[event.target.id]: event.target.value})
    }

    const submitHomevalue = () => {
        console.log(homecontent)
    }

    const showNavbar = () => {
        setOpenup(true);
    };

    const hideNavbar = () => {
        setOpenup(false);
    };

    return (
        <ThemeProvider
            breakpoints={["xxxl", "xxl", "xl", "lg", "md", "sm", "xs", "xxs"]}
            minBreakpoint="xxs"
        >
            <div>
                <div className="home-header">
                    <div className="header">
                        <h1>
                            <i
                                className="fa-regular fa-star fa-bounce"
                                style={{ color: "#fafafa" }}
                            ></i>
                            RELAX CAFE
                        </h1>
                    </div>
                    <div className="header-nav">
                        <p className="nav-container">
                            <NavLink to="/home">HOME</NavLink>
                        </p>
                        <p className="nav-container">
                            <NavLink to="/">MENU</NavLink>
                        </p>
                        <p className="nav-container">
                            <NavLink to="/">ABOUT</NavLink>
                        </p>
                        <p className="nav-container">
                            <a href="#location">LOCATION</a>
                        </p>

                        <p className="nav-container">
                            <a href="#fieldName">CONTACT</a>
                        </p>
                        <p className="nav-container">
                            <a href="">LOGOUT</a>
                        </p>
                    </div>
                    <div className="header-menu">
                        <i className="fa-solid fa-bars" onClick={showNavbar}></i>
                    </div>
                </div>
                <div className="home-container">

                    <div className={`side-nav ${openup ? "show" : ""}`}>
                        <div className="side-nav-header">
                            <h1>
                                <i
                                    className="fa-regular fa-star fa-bounce"
                                    style={{ color: "#fafafa" }}
                                ></i>
                                RELAX CAFE
                            </h1>
                            <i className="fa-solid fa-xmark" onClick={hideNavbar}></i>
                        </div>
                        <div className="side-nav-links">
                            <p className="nav-container">
                                <NavLink to="/home">HOME</NavLink>
                            </p>
                            <p className="nav-container">
                                <NavLink to="/">MENU</NavLink>
                            </p>
                            <p className="nav-container">
                                <NavLink to="/">ABOUT</NavLink>
                            </p>
                            <p className="nav-container">
                                <a href="">LOCATION</a>
                            </p>
                            <p className="nav-container">
                                <a href="">LOGOUT</a>
                            </p>
                        </div>
                    </div>

                    <div className="carousel-container" style={{ width: "50vw", height: "50vh" }}>
                        <div className="carousel-section">
                            <Carousel>
                                <Carousel.Item>
                                    <img
                                        className="d-block w-100"
                                        src="https://www.adivedanatural.com/cdn/shop/articles/smeeling-coffee-beans_900x_5148e663-e441-4642-af81-ade43296e6b5_800x.jpg?v=1615107959"
                                        alt="First slide"
                                    />
                                    <Carousel.Caption>
                                        <h3>Welcome to Relax Cafe</h3>
                                        <p>Enjoy the best coffee and snacks in town.</p>
                                    </Carousel.Caption>
                                </Carousel.Item>
                                <Carousel.Item>
                                    <img
                                        className="d-block w-100"
                                        src="https://cdn.cnn.com/cnnnext/dam/assets/150929101049-black-coffee-stock-super-tease.jpg"
                                        alt="Second slide"
                                    />
                                    <Carousel.Caption>
                                        <h3>Freshly Brewed Coffee</h3>
                                        <p>Savor the taste of freshly brewed perfection.</p>
                                    </Carousel.Caption>
                                </Carousel.Item>
                                <Carousel.Item>
                                    <img
                                        className="d-block w-100"
                                        src="https://www.datocms-assets.com/20941/1663775498-best-coffee-drinks-red-eye-coffee.png?auto=compress&fm=jpg&w=850"
                                        alt="Third slide"
                                    />
                                    <Carousel.Caption>
                                        <h3>Relax and Unwind</h3>
                                        <p>Your perfect spot for a relaxing break.</p>
                                    </Carousel.Caption>
                                </Carousel.Item>
                            </Carousel>
                        </div>
                    </div>

                    <div className="banner-content">
                        <p>
                            A café is a type of restaurant which typically serves coffee and tea, in addition to light
                            refreshments such as baked goods or snacks.
                            <br></br>
                            <br></br>
                            casual social environment where you can find people reading newspapers and magazines, <br></br>
                            playing board games, studying or chatting with others about current events. <br></br> It is also
                            regarded as a place where information can be exchanged
                        </p>
                    </div>
                </div>

                <div className="cards-container">

                    <Card style={{ width: '18rem' }}>
                        <Card.Img variant="top" src={require("../images/icons-1.jpg")} />
                        <Card.Body>
                            <Card.Title>COFFEE</Card.Title>
                            <Card.Text>
                                Coffee is more than just a beverage—it’s a global ritual, an art, and a passion.
                                Made from roasted coffee beans & become one of the most consumed drinks worldwide
                            </Card.Text>
                            <Button variant="primary">Order now <i class="fa-solid fa-hand-point-left"></i></Button>
                        </Card.Body>
                    </Card>

                    <Card className="margin-cards" style={{ width: '18rem' }}>
                        <Card.Img variant="top" src={require("../images/icons-2.jpg")} />
                        <Card.Body>
                            <Card.Title>NON_COFFEE</Card.Title>
                            <Card.Text>
                                Not a coffee lover? No problem! At [Your Brand Name], we believe in offering
                                something for everyone. Our non-coffee selections are crafted to provide the same warmth.
                            </Card.Text>
                            <Button variant="primary">Order now <i class="fa-solid fa-hand-point-left"></i></Button>
                        </Card.Body>
                    </Card>

                    <Card className="margin-cards" style={{ width: '18rem' }}>
                        <Card.Img variant="top" src={require("../images/icons-3.jpg")} />
                        <Card.Body>
                            <Card.Title>TEA</Card.Title>
                            <Card.Text>
                                At Relax Cafe, tea is more than just a drink—it's an experience that brings warmth, calm, and joy
                                with each sip. Whether you seek energy, relaxation, or simply something delicious.
                            </Card.Text>
                            <Button variant="primary">Order now <i class="fa-solid fa-hand-point-left"></i></Button>
                        </Card.Body>
                    </Card>

                    <Card className="margin-cards" style={{ width: '18rem' }}>
                        <Card.Img variant="top" src={require("../images/icons-4.jpg")} />
                        <Card.Body>
                            <Card.Title>DESSERT</Card.Title>
                            <Card.Text>
                                Complete your coffee or tea moment with a taste of sweetness from our dessert
                                collection. Each treat is crafted with care, using premium ingredients and a touch of creativity to
                                bring you classic favorites.
                            </Card.Text>
                            <Button variant="primary">Order now <i class="fa-solid fa-hand-point-left"></i></Button>
                        </Card.Body>
                    </Card>
                </div>

                <div className="event-container">
                    <div class="footer-event">
                        <h1>
                            Events & Specials
                        </h1>

                        <p>
                            Stay tuned for our special events! From live music nights to weekend brunch specials, we bring
                            something fresh to the table every month.
                            <br></br>
                            Keep an eye on our calendar for updates or follow us on social media to stay connected with our
                            latest offerings.
                        </p>
                    </div>

                    <div class="footer-visit">
                        <h1>
                            Visit Us
                        </h1>

                        <p>
                            Come unwind with us! Located at [insert address], Relax Café is your go-to spot for a peaceful break
                            in the middle of the city.
                            <br></br>
                            Drop by anytime - we can't wait to welcome you.
                        </p>
                    </div>

                </div>

                <div class="footer-gmap" id="location">
                    <iframe
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d31110.216207617497!2d80.09235619554957!3d12.922047721777842!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a525f14844aad0f%3A0xe16d3a66c4ce38d4!2sTambaram%2C%20Chennai%2C%20Tamil%20Nadu!5e0!3m2!1sen!2sin!4v1731324404510!5m2!1sen!2sin"
                        style={{ width: "100%", height: "450px", border: "2px solid", borderRadius: "border-radius: 20px" }} allowfullscreen=""
                        loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                </div>




                <div class="footer-contact-form">
                    <div class="contact-location">
                        <div class="contact-box">
                            <div>
                                <h3> <i class="fa-solid fa-location-dot"></i> Location : </h3>
                                <p>
                                    Siva, Bus stop, No.29, near Attai Company, Vishnu Nagar,
                                    <br></br>
                                    Mudichur, Chennai, Tamil Nadu 600048
                                </p>
                            </div>
                            <div>
                                <h3> <i class="fa-solid fa-envelope"></i> Email : </h3>
                                <p>
                                    example : hello123@gmail.com
                                </p>
                            </div>

                            <div>
                                <h3> <i class="fa-solid fa-phone"></i> Call : </h3>
                                <p>
                                    +91 234-567-3485
                                </p>
                            </div>

                        </div>

                        <div class="forms-containers">
                            <div class="form-box-1">
                                <input id="fieldName" type="text" placeholder="Name" class="contact-input-box" onChange={getHomepageValue} />

                                <input id="fieldNumber" type="number" placeholder="Number" maxlength="10" class="contact-input-box"onChange={getHomepageValue} />
                            </div>

                            <div>
                                <input id="fieldEmail" type="text" placeholder="email" class="email-containers" onChange={getHomepageValue}/>
                            </div>

                            <div>
                                <textarea id="fieldAddress" name="Message" class="form-text-area" onChange={getHomepageValue}></textarea>
                            </div>
<button onClick={() => submitHomevalue()}>
    Submit
</button>

                        </div>
                    </div>
                </div>

                <div class="final-footer">
                    <div class="footer-contents">
                        <div>
                            <h4> Relax Café</h4>
                            <p>
                                <b>Address : </b> Siva, Bus stop, No.29, near Attai Company,
                                <br></br>
                                Vishnu Nagar,Mudichur, Chennai, Tamil Nadu 600048
                                <br></br>
                                <br></br>
                                <b>Phone : </b> +91 234 758 9803
                                <br></br>
                                <br></br>
                                <b>Email : </b> contact@relaxcafe.com
                            </p>
                        </div>

                        <div>
                            <h4>
                                Hours of Operation
                            </h4>
                            <p>
                                Monday - Friday: 8 AM - 10 PM
                                <br></br>
                                Saturday - Sunday: 9 AM - 11 PM
                            </p>
                        </div>

                        <div class="footer-quicklinks">
                            <h4>
                                Quick Links
                            </h4>
                            <ul>
                                <li><a href="./home.html">H O M E</a></li>
                                <li><a href="">M E N U</a></li>
                                <li><a href="">A B O U T</a></li>
                                <li><a href="">P R I V A C Y - P O L I C Y </a></li>
                                <li><a href="">T E R M S & C O N D I T I O N S</a></li>
                            </ul>
                        </div>
                        <div>
                            <h4>Follow Us</h4>
                            <p>
                                <div class="footer-icons">
                                    <i class="fa-brands fa-facebook"></i>
                                    <i class="fa-brands fa-instagram"></i>
                                    <i class="fa-brands fa-twitter"></i>
                                    <i class="fa-brands fa-linkedin"></i>
                                </div>

                                Stay connected for the latest updates, events, and specials!
                            </p>
                        </div>

                    </div>


                    <h4>
                        © [Current Year] Relax Café. All Rights Reserved.
                    </h4>
                </div>




            </div>



        </ThemeProvider>
    );
};

export default HomepageScreen;