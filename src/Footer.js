import logo from '../src/assets/little_lemon_logo.png';
import './App.css';
import { Link } from 'react-router-dom';
function Footer() {
    return (
<div className="footer">
<div className='wtf'>
<img src={logo}></img>
</div>
<div className='map'>
    <div className='part'>
    <p><Link to="/">Home</Link></p>
    <p><Link to="/about">About</Link></p>
    <p><Link to="/menu">Menu</Link></p>
    </div>
    <div className='part'>
    <p><Link to="/booking">Reservations</Link></p>
    <p><Link to="/order-online">Order Online</Link></p>
    <p><Link to="/login">Login</Link></p>
    </div>
</div>
<div className='contact'>
    <h2>CONTACT US</h2>
    <p>123 Where Am I Street
    No Where, NW 00001</p>
    <p><a href="mailto:CSR@littlelemon.com">CSR@littlelemon.com</a></p>
</div>
</div>
    );
}
export default Footer;