import './App.css';
import Header from './Header';
import Nav from './Nav';
import Footer from './Footer';
import food from '../src/assets/restauranfood.jpg';
import { Link } from 'react-router-dom';
import greeksalad from '../src/assets/greek salad.jpg';
import bruchetta from '../src/assets/bruchetta.svg';
import lemon from '../src/assets/lemon dessert.jpg';
function Homepage() {
return (
<>
<div className="container-1">
<Header></Header>
<Nav></Nav>
</div>
<div className="container-2">
<div className="pres">
<p className='little_lemon'>Little Lemon</p>
<p className='chicago'>Chicago</p>
<p>We are a family owned Mediterranean restaurant focused on traditional recipes served with a modern twist.</p>
<button><Link to="/booking"><b>Reserve a Table</b></Link></button>
 </div>
<div className='image'>
<img src={food}></img>
</div>
</div>
<h1 className='specials'>This Week Specials!</h1>
<div className="main-content">
<div className="cl">
<img src={greeksalad}></img>
<div className='temp'>
<div className='price'>
<h3>Greek Salad</h3>
<h4>$12.99</h4>
</div>
<p>The famous greek salad of crispy lettuce, peppers, olives and our Chicago style feta cheese, garnished with crunchy garlic and rosemary croutons.</p>
<button><Link to="/booking"><b>Order a delivery!</b></Link></button>
</div>
</div>
<div className="cl">
<img src={bruchetta}></img>
<div className='temp'>
<div className='price'>
<h3>Bruchetta</h3>
<h4>$5.99</h4>
</div>
<p>Our Bruchetta is made from grilled bread that has been smeared with garlic and seasoned with salt and olive oil. It tastes so good!</p>
<button><Link to="/booking"><b>Order a delivery!</b></Link></button>
</div>
</div>
<div className="cl">
<img src={lemon}></img>
<div className='temp'>
<div className='price'>
<h3>Lemon Dessert</h3>
<h4>$5.00</h4>
</div>
<p>This comes straight from grandma's recipe book, every last ingredient has been sourced and is as authentic as can be imagined,you have to taste it!</p>
<button><Link to="/booking"><b>Order a delivery!</b></Link></button>
</div>
</div>
</div>
<Footer></Footer>
</>
);
}
export default Homepage;