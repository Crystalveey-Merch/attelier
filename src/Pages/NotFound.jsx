import { NavLink } from "react-router-dom";

const NotFound = () => {
    return (
     <NavLink to="/"> <div className="m-auto flex flex-col m-10 mt-24 sm:mt-16">
        <img width={500} className="m-auto p-10" src="https://img.freepik.com/free-vector/oops-404-error-with-broken-robot-concept-illustration_114360-1932.jpg?w=740&t=st=1687211588~exp=1687212188~hmac=e5f20ac716558211ed8b6ffda7438eeca7c2e9c4ed86ca1e305286bdc896dd5b" alt="Page not found" />

        <button className="btn m-auto mb-10 ">Go Home</button>
      </div>
      </NavLink>
    );
  };
  
  export default NotFound;