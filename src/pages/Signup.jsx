import React, { useState } from 'react'; 
import { useHistory } from 'react-router-dom'


const Signup = () => {
  const [credentials, setCredentials] = useState({name:"", email: "", password: "", cpassword:""})
  let history = useHistory(); 

  const handleSubmit = async (e) => {
    e.preventDefault();
    const {name, email, password} =credentials;
    const response = await fetch("http://localhost:5000/api/auth/createuser", {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({name,email,password})
    });
    const json = await response.json()
    console.log(json);
    if (json.success){
        // Save the auth token and redirect
        localStorage.setItem('token', json.authtoken); 
        history.push("/");

    }
    else{
        alert("Invalid credentials");
    }
}

const onChange = (e)=>{
    setCredentials({...credentials, [e.target.name]: e.target.value})
}

    return (
        <>
            <form onSubmit={handleSubmit}>
  <div className="mb-3">
    <label htmlFor="exampleInputEmail1" className="form-label">Name</label>
    <input type="text" className="form-control" id="name" name="name" onChange={onChange} aria-describedby="emailHelp"/>
    
  </div>
  <div className="mb-3">
    <label htmlFor="email" className="form-label">Email address</label>
    <input type="email" className="form-control" id="email" name="email" onChange={onChange} aria-describedby="emailHelp"/>
    <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
  </div>
  <div className="mb-3">
    <label htmlFor="password" className="form-label">Password</label>
    <input type="password" className="form-control" name="password" onChange={onChange} id="password" minLength={5} required/>
  </div>
  <div className="mb-3">
    <label htmlFor="cpassword" className="form-label"> Confirm Password</label>
    <input type="password" className="form-control" name="cpassword" onChange={onChange} id="cpassword" minLength={5} required/>
  </div>
  <button type="submit" className="btn btn-primary mb-3">Submit</button>
</form>
        </>
    );
}

export default Signup;


// import React from 'react';
// // import { Link } from 'react-router-dom';

// // import { OutlineButton } from '../components/button/Button';
// // import HeroSlide from '../components/hero-slide/HeroSlide';
// // import MovieList from '../components/movie-list/MovieList';

// // import { category, movieType, tvType } from '../api/tmdbApi';

// const Signup = () => {
//     return (
//         <>
//            hello i am signup 
//         </>
//     );
// }

// export default Signup;
