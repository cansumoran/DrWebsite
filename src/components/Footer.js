import {Link, animateScroll as scroll} from 'react-scroll'

function Footer() {


    return (
        <footer>
            <div className="container">
                <div className="row">
                    <div className="side1">
                        <div className="row">
                            <div className="col-md-3">
                                <h1 className="logo">Prof. Dr.<br></br>Münevver Moran</h1>
                            </div>
                        </div>
                    </div>
                    <div className="side2">
                        <div className="row">
                            <div className="col-md-3">
                                <p className="footer-title">Menü</p>
                                <ul>
                                    <li>
                                        <Link
                                            spy={true}
                                            smooth={true}
                                            duration={1000}
                                            to="headerbg"
                                        > Anasayfa </Link>
                                    </li>
                                    <li>
                                        <Link to="services" spy={true} smooth={true} duration={1000}> Uzmanlık Alanlarımız </Link>
                                    </li>
                                    <li>
                                        <Link to="about-scroll" spy={true} smooth={true} duration={1000}> Hakkımızda </Link>
                                    </li>
                                    <li>
                                        <Link to="contact" spy={true} smooth={true} duration={1000}> İletişim </Link>
                                    </li>
                                </ul>
                            </div>
                            <div className="col-md-3">
                                <p className="footer-title">İletişim</p>
                                <ul>
                                    <li>
                                        <a href="tel:+90 312 418 31 18"> +90 312 418 31 18 </a>
                                    </li>
                                    <li>
                                        <a href="mailto:munevvermoran@gmail.com"> munevvermoran@gmail.com </a>
                                    </li>
                                </ul>
                            </div>
                            <div className="col-md-3">
                                <p className="footer-title">Sosyal Medya</p>
                                <ul>
                                    <li>
                                        <a target="_blank" rel="noreferrer"
                                           href="https://instagram.com/dr.munevvermoran"> Instagram </a>
                                    </li>
                                    <li>
                                        <a target="_blank" rel="noreferrer"
                                           href="https://twitter.com/burhankocadag0"> Facebook </a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <button onClick={() => scroll.scrollToTop(2500)} src="" className="gotop"><i
                className="fas fa-level-up-alt"></i></button>

        </footer>
    );
}

export default Footer;
