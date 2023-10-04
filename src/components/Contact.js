import email from '../images/icons/email.png';
import phone from '../images/icons/phone.png';
import location from '../images/icons/location.png';

function Contact() {
    return (
        <contact>
            <div className="container contact">
                <h2 className="main-title text-center">İLETİŞİM</h2>
                <div className="col-md-12">
                    <div className="row">
                        <div className="col-location">
                            <ul>
                                <li>
                                    <div className="row">
                                    <img src={location} className="img-icon"/>
                                    <p> Meşrutiyet Mahallesi Olgunlar Sokak 11/2 Bahçe Katı Bakanlıklar, 06420 Çankaya/Ankara </p>
                                    </div>
                                </li>
                                <br></br>
                                <li>
                                    <div className="row">
                                    <img src={phone}/>
                                    <a target="_blank" rel="noreferrer"
                                       href="tel:+90 312 418 31 18"> +90 312 418 31 18 </a>
                                    </div>
                                </li>
                                <br></br>
                                <li>
                                    <div className="row">
                                    <img src={phone}/>
                                    <a target="_blank" rel="noreferrer"
                                       href="tel:+90 533 374 59 59"> +90 533 374 59 59 </a>
                                    </div>
                                </li>
                                <br></br>
                                <li>
                                    <div className="row">
                                    <img src={email}/>
                                    <a target="_blank" rel="noreferrer"
                                       href="mailto:munevvermoran@gmail.com"> munevvermoran@gmail.com </a>
                                    </div>
                                </li>
                                <br></br>
                            </ul>
                        </div>
                        <div className="col-location">
                            <iframe
                                src="//www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3060.1692219325582!2d32.85530907603524!3d39.91522908600972!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14d34f62275806a3%3A0x320ab6758d9879c!2sProf.%20Dr.%20M%C3%BCnevver%20Moran!5e0!3m2!1str!2str!4v1694217387088!5m2!1str!2str"
                                width="600" height="450" style={{border: "0"}} allowFullScreen="" loading="lazy"
                                referrerPolicy="no-referrer-when-downgrade"></iframe>
                        </div>
                    </div>
                </div>
            </div>
        </contact>
    );
}

export default Contact;
