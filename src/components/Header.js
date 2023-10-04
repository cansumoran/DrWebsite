import logo from '../images/office.jpg'; // Tell Webpack this JS file uses this image

<img src={logo}/>
function Header() {
    return (
        <header>
            <img src={logo} alt="Logo"/>
            <h1>Prof. Dr. Münevver Moran</h1>
            <p> </p>
            <div className="headerbg"></div>
        </header>
    );
}

export default Header;


