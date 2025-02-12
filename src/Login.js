import Header from "./Header";
import Nav from "./Nav";
import './App.css';
import { useState } from "react";
function Login() {
const [form, setForm] = useState({
    email:"",
    password:""
});
const handleChange = (e) => {
    setForm(prevForm => ({
        ...prevForm,
        [e.target.name]:e.target.value
    }))
}
const handleSubmit = (e) => {
    e.preventDefault();
    //handle form submission
    console.log(form);
}
    return(
<>
<div className="container-1">
<Header></Header>
<Nav></Nav>
</div>
<h1 className="book">Login</h1>
<div className="container-4">
<form className="form" onSubmit={handleSubmit}>
<div className="options-2">
<label htmlFor="email">Email</label>
<input type="email" value={form.email} onChange={handleChange} id="email" name="email" required/>
</div>
<div className="options-2">
<label htmlFor="password">Password</label>
<input type="password" value={form.password} onChange={handleChange} id="password" name="password" required/>
</div>
<input type="submit" className="submit" aria-label="On Click" value="Login"/>
</form>
</div>
</>
    );
}
export default Login;