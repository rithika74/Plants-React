import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch, faCircleUser, faCartShopping, faCircleArrowRight, faCircleChevronLeft, faCircleChevronRight, faStar } from '@fortawesome/free-solid-svg-icons';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faTwitter, faInstagram } from '@fortawesome/free-brands-svg-icons';


import './Plants.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Nav from 'react-bootstrap/Nav';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import ImageCarousel from './ImageCarousel';

import img1 from './p1.png'
import img2 from './p4.png'
import img3 from './p5.png'
import img4 from './p6.png'
import pl1 from './pl1.png'
import pl2 from './pl2.jpg'
import pl3 from './pl3.jpg'
import pl4 from './pl4.jpg'

const responsive = {
    superLargeDesktop: {
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

export const Plants = () => {
    return (
        <>

            <header>
                <Navbar collapseOnSelect expand="lg" className=' justify-content-between'>
                    <Container>
                        <Navbar.Brand href="#home">
                            <div className='d-flex'>
                                <div >
                                    <svg xmlns="http://www.w3.org/2000/svg" width="31" height="31" viewBox="0 0 31 31" fill="none">
                                        <path d="M29.1523 30.2045C10.5296 32.2909 -0.373246 11.6061 0.252769 0.322024C2.03987 0.621657 11.6194 4.32961 21.1609 13.7574C30.233 24.6069 32.9387 29.7804 29.1523 30.2045Z" fill="black" />
                                    </svg>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="9" height="20" viewBox="0 0 9 20" fill="none">
                                        <path d="M2.22333 0.286133C0.47942 3.57823 -1.18477 12.0309 6.10975 19.5049C8.75053 16.628 11.6703 8.75662 2.22333 0.286133Z" fill="black" />
                                    </svg>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="19" height="25" viewBox="0 0 19 25" fill="none">
                                        <path d="M1.08879 24.1922C-0.0741447 20.3687 1.95455 10.959 18.8559 0.53833C17.6068 8.70377 12.2013 24.1922 1.08879 24.1922Z" fill="black" />
                                    </svg>
                                </div>
                                <div className=' px-2 '>Planty'x</div>
                            </div>
                        </Navbar.Brand>
                        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                        <Navbar.Collapse id="responsive-navbar-nav">
                            <Nav className=" mx-auto gap-4 ">
                                <Nav.Link href="#features">Plants</Nav.Link>
                                <Nav.Link href="#pricing">For offices</Nav.Link>
                                <Nav.Link href="#plantscare">Plants care </Nav.Link>
                                <Nav.Link href="#about">About </Nav.Link>
                            </Nav>
                            <Nav className='gap-4 '>
                                <Nav.Link href="#deets" ><FontAwesomeIcon icon={faSearch} /></Nav.Link>
                                <Nav.Link href="#memes" ><FontAwesomeIcon icon={faCircleUser} /></Nav.Link>
                                <Nav.Link href="#memes" ><FontAwesomeIcon icon={faCartShopping} /></Nav.Link>
                            </Nav>
                        </Navbar.Collapse>
                    </Container>
                </Navbar>
            </header>
            <section>
                <Container>
                    <Row className='align-items-center'>
                        <Col lg={6} md={12} className='mt-5'>
                            <div>
                                <p className='head'>Best house <br /> plants varieties.</p>
                                <button className='btn'>Shop now</button>
                                <p className='fs-5 fw-medium mt-5 '>Beautiful living greenery for <br /> homes and offices</p>
                                <p className=' fw-light '>We've been mentioned in the press</p>
                                <p className='blk'>
                                    <span>Bloomberg</span>
                                    <span>Forbes</span>
                                </p>
                            </div>
                        </Col>
                        <Col lg={6} md={12}>
                            <div>
                                <img src={img1} alt="" style={{ width: '100%', margin: '0px' }} />
                            </div>
                        </Col>
                    </Row>
                </Container>
            </section>

            <section>
                <Container>
                    <Row className='mt-5'>
                        <Col lg={6} md={12}>
                            <div className='fs-5 fw-light'>
                                Each houseplant set is handled quickly and safely
                                <br />before being sent to your destination in specially
                                <br />designed insulated packaging.
                            </div>
                        </Col>
                        <Col lg={6} md={12}>
                            <div className='fs-2 fw-medium'>
                                Learn how we take care of your plant
                                at every stage of its journey from our
                                greenhouse to your home.
                            </div>
                            <div className='mt-5'>
                                <a href="" style={{ textDecoration: 'none', color: 'black' }}>LEARN MORE <FontAwesomeIcon icon={faCircleArrowRight} /></a>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </section>

            {/* <section>
                <div className=' position-relative '>
                    <div className='d-flex justify-content-center align-items-center m-5 position-absolute z-1 '>
                        <ImageCarousel />
                    </div>
                    <div className='background position-absolute z-0 d-flex align-items-end' style={{ marginTop: '300px' }}>
                        <div className='m-5 fw-medium '>
                            <span>STEP 1</span>
                            <span style={{ paddingLeft: '420px', paddingRight: '400px' }} className=' fs-2'>We put everything together</span>
                            <span style={{ fontSize: '40px', paddingRight: '20px' }}>
                                <svg xmlns="http://www.w3.org/2000/svg" width="37" height="37" viewBox="0 0 37 37" fill="none">
                                    <path d="M33.6471 18.353C33.6471 26.7997 26.7997 33.6471 18.353 33.6471C9.90625 33.6471 3.05884 26.7997 3.05884 18.353C3.05884 9.90625 9.90625 3.05884 18.353 3.05884C26.7997 3.05884 33.6471 9.90625 33.6471 18.353Z" stroke="black" stroke-width="3.05882" />
                                    <path d="M20.6471 12.2354L14.5294 18.353L20.6471 24.4706" stroke="black" stroke-width="3.05882" stroke-linecap="round" stroke-linejoin="round" />
                                </svg>
                            </span>
                            <span style={{ fontSize: '40px' }}>
                                <svg xmlns="http://www.w3.org/2000/svg" width="37" height="37" viewBox="0 0 37 37" fill="none">
                                    <path d="M3.35293 18.353C3.35293 26.7997 10.2003 33.6471 18.647 33.6471C27.0938 33.6471 33.9412 26.7997 33.9412 18.353C33.9412 9.90625 27.0938 3.05884 18.647 3.05884C10.2003 3.05884 3.35293 9.90625 3.35293 18.353Z" stroke="black" stroke-width="3.05882" />
                                    <path d="M16.3529 12.2354L22.4706 18.353L16.3529 24.4706" stroke="black" stroke-width="3.05882" stroke-linecap="round" stroke-linejoin="round" />
                                </svg>
                            </span>
                        </div>
                    </div>
                </div>
            </section> */}
            <section>
                <div >  {/*style={{ marginTop: '50rem' }} */}
                    <div className='m-5'>
                        <p>OUR SHOP</p>
                        <p className='fs-1 fw-medium '>Here are the best seller <br /> from our varieties</p>
                        <button className='btn'>See all</button>
                    </div>
                    <div className='m-5'>
                        <Carousel responsive={responsive} >
                            <div>
                                <img src={pl1} alt="" />
                                <div>
                                    <span>Fiddle-leaf fig</span>
                                    <span style={{ paddingLeft: '140px' }}>$110.99</span>
                                </div>
                            </div>
                            <div>
                                <img src={pl2} alt="" />
                                <div>
                                    <span>Strelitzia nicolai</span>
                                    <span style={{ paddingLeft: '140px' }}>$110.99</span>
                                </div>
                            </div>
                            <div>
                                <img src={pl3} alt="" />
                                <div>
                                    <span>Ficus microcarpa</span>
                                    <span style={{ paddingLeft: '140px' }}>$110.99</span>
                                </div>
                            </div>
                            <div>
                                <img src={pl4} alt="" />
                                <div>
                                    <span>Aloe vera</span>
                                    <span style={{ paddingLeft: '140px' }}>$110.99</span>
                                </div>
                            </div>
                        </Carousel>
                    </div>
                    <div className=''>
                        <Container>
                            <Row className='mt-5'>
                                <Col md={12} lg={4}>
                                    <div>
                                        <p className='fs-5 fw-medium'>REVIEWS</p>
                                        <p className='fw-lighter'> Shop with confidence by reading customer
                                            <br />reviews given by individuals who have used
                                            <br />Bloomey. Excellent quality and streamlined
                                            <br />service are both offered here.
                                        </p>
                                        <p className='fw-medium'>
                                            <svg xmlns="http://www.w3.org/2000/svg" width="149" height="25" viewBox="0 0 149 25" fill="none">
                                                <path d="M12.5 0L15.3064 8.63729H24.3882L17.0409 13.9754L19.8473 22.6127L12.5 17.2746L5.15268 22.6127L7.95911 13.9754L0.611794 8.63729H9.69357L12.5 0Z" fill="#DEEC3C" />
                                                <path d="M43.5 0L46.3064 8.63729H55.3882L48.0409 13.9754L50.8473 22.6127L43.5 17.2746L36.1527 22.6127L38.9591 13.9754L31.6118 8.63729H40.6936L43.5 0Z" fill="#DEEC3C" />
                                                <path d="M74.5 0L77.3064 8.63729H86.3882L79.0409 13.9754L81.8473 22.6127L74.5 17.2746L67.1527 22.6127L69.9591 13.9754L62.6118 8.63729H71.6936L74.5 0Z" fill="#DEEC3C" />
                                                <path d="M105.5 0L108.306 8.63729H117.388L110.041 13.9754L112.847 22.6127L105.5 17.2746L98.1527 22.6127L100.959 13.9754L93.6118 8.63729H102.694L105.5 0Z" fill="#DEEC3C" />
                                                <path d="M136.5 0L139.306 8.63729H148.388L141.041 13.9754L143.847 22.6127L136.5 17.2746L129.153 22.6127L131.959 13.9754L124.612 8.63729H133.694L136.5 0Z" fill="#DEEC3C" />
                                            </svg>
                                            <span className='px-3'>5/5</span>
                                        </p>
                                        <p className='fw-medium'>2.479 reviews</p>
                                    </div>
                                </Col>
                                <Col md={12} lg={4}>
                                    <p className='fs-3 fw-medium'>
                                        We adore all our friends at Bloomey, especially the beauties who have come to live with us! Great advice when needed, beautifully and safely packaged. Highly recommend, it's just the best place for healthy plants and great value!
                                    </p>
                                    <p className='fs-5'>Pamela S.</p>
                                    <p className='fw-lighter'>Lake Forest, CA</p>
                                </Col>
                                <Col md={12} lg={4} className='d-flex align-items-end justify-content-end '>
                                    <div>
                                        <span style={{ fontSize: '40px', paddingRight: '20px' }}>
                                            <svg xmlns="http://www.w3.org/2000/svg" width="37" height="37" viewBox="0 0 37 37" fill="none">
                                                <path d="M33.6471 18.353C33.6471 26.7997 26.7997 33.6471 18.353 33.6471C9.90625 33.6471 3.05884 26.7997 3.05884 18.353C3.05884 9.90625 9.90625 3.05884 18.353 3.05884C26.7997 3.05884 33.6471 9.90625 33.6471 18.353Z" stroke="black" stroke-width="3.05882" />
                                                <path d="M20.6471 12.2354L14.5294 18.353L20.6471 24.4706" stroke="black" stroke-width="3.05882" stroke-linecap="round" stroke-linejoin="round" />
                                            </svg>
                                        </span>
                                        <span style={{ fontSize: '40px' }}>
                                            <svg xmlns="http://www.w3.org/2000/svg" width="37" height="37" viewBox="0 0 37 37" fill="none">
                                                <path d="M3.35293 18.353C3.35293 26.7997 10.2003 33.6471 18.647 33.6471C27.0938 33.6471 33.9412 26.7997 33.9412 18.353C33.9412 9.90625 27.0938 3.05884 18.647 3.05884C10.2003 3.05884 3.35293 9.90625 3.35293 18.353Z" stroke="black" stroke-width="3.05882" />
                                                <path d="M16.3529 12.2354L22.4706 18.353L16.3529 24.4706" stroke="black" stroke-width="3.05882" stroke-linecap="round" stroke-linejoin="round" />
                                            </svg>
                                        </span>
                                    </div>
                                </Col>
                            </Row>
                        </Container>
                    </div>
                </div>
            </section>
            {/* <section>
                <div className='m-5 m-md-5 '>
                    <span ><img src={img2} alt="" /></span>
                    <span style={{ paddingLeft: '55px' }}><img src={img3} alt="" /></span>
                </div>
            </section> */}
            <section>
                <div>
                    <div className=' m-md-5'>
                        <Container>
                            <Row className='align-items-center'>
                                <Col sm={5} className='mt-3 mt-sm-0'>
                                    <img src={img2} alt="" className='img-fluid h-100 ' />
                                </Col>
                                <Col sm={7} className='mt-3 mt-sm-0'>
                                    <img src={img3} alt="" className='img-fluid h-100 ' />
                                </Col>
                            </Row>
                        </Container>
                    </div>
                </div>
            </section>

            <section>
                <div className='m-3 m-md-5 position-relative '>
                    <img src={img4} alt="" className='img-fluid' />
                    {/* <div className=' position-absolute ' style={{top:'50px',left:'100px'}} >
                        <div className='fs-1 fw-medium '>Get inspired from<br />our Instagram</div>
                        <div className=' fw-light '>If you use the hashtag #bioomey on Instagram,<br />well spotlight you.</div>
                        <div className='fw-medium'>Check it out <FontAwesomeIcon icon={faCircleArrowRight} /></div>
                    </div> */}
                </div>
            </section>

            <section>
                <div className=''>
                    <Container>
                        <Row className='flex-column-reverse flex-md-row '>
                            <Col md={6} className='order-md-2'>
                                <div className='d-flex align-items-end justify-content-end '>
                                    <div className=' position-relative '><input type="text" placeholder='Your email' className='input-box' /></div>
                                    <div className=' position-absolute pb-2'><button className='btn'>Subscribe</button></div>
                                </div>
                            </Col>
                            <Col md={6} className='order-md-1'>
                                <div>
                                    <p className='fs-1 fw-medium '>Stay updated with special offers,<br />plant-parenting tips, and more.</p>
                                </div>
                            </Col>
                        </Row>
                    </Container>
                </div>
            </section>

            <footer>
                <div className='' style={{ backgroundColor: '#ebe7e7', minHeight: '150px', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                    <Container>
                        <Navbar expand='sm' className="justify-content-center mt-sm-5 ">
                            <Navbar.Brand href="#home">
                                <div className='d-flex'>
                                    <div >
                                        <svg xmlns="http://www.w3.org/2000/svg" width="31" height="31" viewBox="0 0 31 31" fill="none">
                                            <path d="M29.1523 30.2045C10.5296 32.2909 -0.373246 11.6061 0.252769 0.322024C2.03987 0.621657 11.6194 4.32961 21.1609 13.7574C30.233 24.6069 32.9387 29.7804 29.1523 30.2045Z" fill="black" />
                                        </svg>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="9" height="20" viewBox="0 0 9 20" fill="none">
                                            <path d="M2.22333 0.286133C0.47942 3.57823 -1.18477 12.0309 6.10975 19.5049C8.75053 16.628 11.6703 8.75662 2.22333 0.286133Z" fill="black" />
                                        </svg>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="19" height="25" viewBox="0 0 19 25" fill="none">
                                            <path d="M1.08879 24.1922C-0.0741447 20.3687 1.95455 10.959 18.8559 0.53833C17.6068 8.70377 12.2013 24.1922 1.08879 24.1922Z" fill="black" />
                                        </svg>
                                    </div>
                                    <div className=' px-2 '>Planty'x</div>
                                </div>
                            </Navbar.Brand>
                            <Nav className="mx-auto ">
                                <Nav.Link href="#features">Help</Nav.Link>
                                <Nav.Link href="#pricing">Contact Us</Nav.Link>
                                <Nav.Link href="#plantscare">Privacy & Terms</Nav.Link>
                            </Nav>
                            <Nav className='gap-4  '>
                                <Nav.Link href="#deets" ><FontAwesomeIcon icon={faFacebookF} /></Nav.Link>
                                <Nav.Link href="#memes" ><FontAwesomeIcon icon={faTwitter} /></Nav.Link>
                                <Nav.Link href="#memes" ><FontAwesomeIcon icon={faInstagram} /></Nav.Link>
                            </Nav>
                        </Navbar>
                    </Container>
                </div>
            </footer>





        </>
    )
}
