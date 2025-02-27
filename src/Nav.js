import { Link, useLocation } from "react-router-dom";
import './App.css';
function Nav() {
    const location = useLocation();
    return (
    <div className="nav">
    <ul>
        <li><Link to="/" className={location.pathname==="/" ? "active" : ""}><b>Home</b></Link></li>
        <li><Link to="/about" className={location.pathname==="/about" ? "active" : ""}><b>About</b></Link></li>
        <li><Link to="/menu" className={location.pathname==="/menu" ? "active" : ""}><b>Menu</b></Link></li>
        <li><Link to="/booking" className={location.pathname==="/booking" ? "active" : ""}><b>Reservations</b></Link></li>
        <li><Link to="/login" className={location.pathname==="/login" ? "active" : ""}><b>Login</b></Link></li>
    </ul>
    </div>
    );
}
export default Nav;