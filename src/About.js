import Nav from "./Nav";
import Header from "./Header";
import './App.css';
import about_image from "../src/assets/about_image.jpg";
import Footer from "./Footer";
function About () {
    return (
<>
<div className="container-1">
<Header></Header>
<Nav></Nav>
</div>
<div className="main">
<div className="container-3">
<p className="little_lemon">Little Lemon</p>
<p className="chicago">Chicago</p>
<p>Little Lemon Restaurant in Chicago is a delightful culinary spot celebrated for its vibrant fusion of flavors and inviting atmosphere. This cozy eatery specializes in a mouthwatering selection of dishes, each infused with a bright, citrusy twist. From tangy lemon-inspired entrées to irresistible desserts, Little Lemon delivers a fresh take on classic favorites. Enjoy a unique dining experience where zesty flavors meet savory perfection making it a must-visit destination for food lovers in Chicago.</p>
</div>
<div className="image-2">
    <img src={about_image}></img>
</div>
</div>
<br></br>
<br></br>
<br></br>
<br></br>
<Footer/>
</>
);
}
export default About;