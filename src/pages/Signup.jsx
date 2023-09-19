import React from 'react';

const Signup = () => {
    return (
        <>
            <form>
  <div className="mb-3">
    <label htmlFor="exampleInputEmail1" className="form-label">Name</label>
    <input type="text" className="form-control" id="name" onChange={onchange} aria-describedby="emailHelp"/>
    
  </div>
  <div className="mb-3">
    <label htmlFor="email" className="form-label">Email address</label>
    <input type="email" className="form-control" id="email" onChange={onchange} aria-describedby="emailHelp"/>
    <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
  </div>
  <div className="mb-3">
    <label htmlFor="password" className="form-label">Password</label>
    <input type="password" className="form-control" onChange={onchange} id="password"/>
  </div>
  <div className="mb-3">
    <label htmlFor="cpassword" className="form-label"> Confirm Password</label>
    <input type="password" className="form-control" onChange={onchange} id="cpassword"/>
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
