import Header from "./Header";
import Nav from "./Nav";
import Footer from "./Footer";
import './App.css';
import bruchetta from '../src/assets/bruchetta.svg';
import tomato_soup from '../src/assets/tomato_soup.webp';
import medite_platter from '../src/assets/mediteranee_platter.webp';
import kebab from '../src/assets/joojeh-kebab.jpg';
import grilled_wings from '../src/assets/grilled-chicken-wings.jpg';
import shawarma from '../src/assets/beef-shawarma-recipe.jpg';
import gnocchi from '../src/assets/Gnocchi-Chicken-Soup-cropped.jpg';
import chicken_salad from '../src/assets/chicken-salad.jpg';
import pork from '../src/assets/porkdinner.webp';
import lemon from '../src/assets/lemon dessert.jpg';
import truffles from '../src/assets/truffledes.webp';
import caramel from '../src/assets/icecreamdes.webp';
function Menu() {
    return (
<>
<div className="container-1">
    <Header></Header>
    <Nav></Nav>
    </div>
        <h1 className="our_menu">Our Menu</h1>
        <h2 className="menu_markers">Appetizers</h2>
    <div className="main-content-2">
        <div className="cl">
        <img src={bruchetta}></img>
        <div className="temp">
            <div className="price">
            <h3>Bruchetta</h3>
            <h4>$5.99</h4>
            </div>
            <p>Our Bruschetta is made from grilled bread that has been smeared with garlic and seasoned with salt and olive oil. It's a great appetizer to start with!</p>
        </div>
        </div>
        <div className="cl">
        <img src={tomato_soup}></img>
        <div className="temp">
            <div className="price">
            <h3>Tomato Soup</h3>
            <h4>$7.99</h4>
            </div>
            <p>Our Tomato soup is a vibrant and comforting dish that captures the essence of Mediterranean flavors. This exquisite creation is crafted with a blend of sun-kissed tomatoes & aromatic herbs.</p>
        </div>
        </div>
        <div className="cl">
        <img src={medite_platter}></img>
        <div className="temp">
            <div className="price">
            <h3>Mediterranean Platter</h3>
            <h4>$13.99</h4>
            </div>
            <p>Our Mediterranean Platter combines a tantalizing blend of fresh grapes, crisp crackers, velvety hummus, succulent sausage, and juicy apples to create a harmonious culinary experience.</p>
        </div>
        </div>

        </div>
        <h2 className="menu_markers">Main Dishes</h2>
        <div className="main-content-2">
        <div className="cl">
        <img src={kebab}></img>
        <div className="temp">
            <div className="price">
            <h3>Joojeh Kabob</h3>
            <h4>$12.99</h4>
            </div>
            <p>Joojeh Kabob, also spelled Jujeh Kabab, is the Persian version of the chicken kabob and one of Iran’s most delicious and popular dishes. A flavorful chicken marinade with saffron, turmeric, Greek yogurt, and lemon creates juicy, tender chicken loaded with flavor.</p>
        </div>
        </div>
        <div className="cl">
        <img src={grilled_wings}></img>
        <div className="temp">
            <div className="price">
            <h3>Grilled Chicken Wings</h3>
            <h4>$9.99</h4>
            </div>
            <p>The secret Mediterranean-style marinade + grilling tips guarantee maximum flavor in each bite! Serve them with cool tzatziki sauce or your favorite dip.</p>
        </div>
        </div>
        <div className="cl">
        <img src={shawarma}></img>
        <div className="temp">
            <div className="price">
            <h3>Beef Shawarma</h3>
            <h4>$16.99</h4>
            </div>
            <p>Middle Eastern street food is basically heavily-marinated meat (or chicken), layered on a vertical rotisserie or spit where it is slow-roasted for days until perfectly tender and extra flavorful!</p>
        </div>
        </div>

        </div>
        <div className="main-content-2">
        <div className="cl">
        <img src={gnocchi}></img>
        <div className="temp">
            <div className="price">
            <h3>Chicken Gnocchi Soup</h3>
            <h4>$8.99</h4>
            </div>
            <p>Bite-sized, pillowy dumplings simmered gently in chicken stock are the epitome of comfort food. Throw in mushrooms, carrots, celery, onions, and a hint of thyme and rosemary for a nourishing, and delicious dinner.</p>
        </div>
        </div>
        <div className="cl">
        <img src={chicken_salad}></img>
        <div className="temp">
            <div className="price">
            <h3>Chicken Salad</h3>
            <h4>$10.49</h4>
            </div>
            <p>This healthy chicken salad recipe is hearty, flavorful, and packs a nice fresh crunch. Thanks to rotisserie chicken it's so easy to make and just as easy to enjoy no matter what the day holds.</p>
        </div>
        </div>
        <div className="cl">
        <img src={pork}></img>
        <div className="temp">
            <div className="price">
            <h3>Pork & Veg</h3>
            <h4>$13.99</h4>
            </div>
            <p>This delightful dish showcases the flavors of pork infused with the vibrant Mediterranean trio of tomatoes, onions, and cilantro.</p>
        </div>
        </div>

        </div>
        <h2 className="menu_markers">Desserts</h2>
        <div className="main-content-2">
        <div className="cl">
        <img src={lemon}></img>
        <div className="temp">
            <div className="price">
            <h3>Lemon Dessert</h3>
            <h4>$5.00</h4>
            </div>
            <p>This comes straight from grandma's recipe book, every last ingredient has been sourced and is as authentic as can be imagined. This is perfect for a light dessert!</p>
        </div>
        </div>
        <div className="cl">
        <img src={truffles}></img>
        <div className="temp">
            <div className="price">
            <h3>Chocolate Truffles</h3>
            <h4>$8.99</h4>
            </div>
            <p>Indulge in a decadent journey of chocolate bliss with our exquisite Chocolate Truffles dessert, a heavenly creation that adds a touch of Mediterranean flair to this classic confection.</p>
        </div>
        </div>
        <div className="cl">
        <img src={caramel}></img>
        <div className="temp">
            <div className="price">
            <h3>Caramel Ice Cream</h3>
            <h4>$6.99</h4>
            </div>
            <p>Crafted with utmost care and attention, our Caramel Ice Cream begins with a luscious, creamy base that is made using the finest ingredients. We start by simmering sweetened milk and cream until they reach the perfect consistency.</p>
        </div>
        </div>

        </div>
        <Footer/>
</>
    );
}
export default Menu;
