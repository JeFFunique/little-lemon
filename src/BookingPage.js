import BookingForm from "./BookingForm";
import Nav from "./Nav";
import Header from "./Header";
import Footer from "./Footer";
import './App.css';
function BookingPage({form,available_times,handleChange}) {
return(
<>
<div className="container-1">
<Header></Header>
<Nav></Nav>
</div>
<BookingForm form={form} available_times={available_times} handleChange={handleChange}/>
<Footer/>
</>
);
}
export default BookingPage;