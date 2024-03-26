import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Header from "./Header";

export default function Login() {
 
  const[input , setInput] = useState({
    email : "",
    password : "",
  });
  const navigate = useNavigate();

  function navigateToSignUp() {
    navigate("/signup");
  }
  function handleSubmit(e) {
    e.preventDefault();
    const loggeduser =JSON.parse(localStorage.getItem("user"));

    if(input.email === loggeduser.email && input.password === loggeduser.password)
    {
      localStorage.setItem("loggedin", true);
      navigate("/Home");


    }
    else{
      alert("wrong Email or Password");
    }

   
  };
  
  return (
    <div>
      { <Header /> }
      <form onSubmit={handleSubmit}>
        <h2>Login</h2>

        <div className="control-row">
          <div className="control no-margin">
            <label htmlFor="email">Email</label>
            <input
              id="email"
              type="email"
              name="email"
            
              value={input.email}
              onChange={(e) => setInput({...input,"email": e.target.value,})}
            />
          </div>
        </div>
        <div className="control no-margin">
          <div className="control no-margin">
            <label htmlFor="password">Password</label>
            <input
              id="password"
              type="password"
              name="password"
              
              value={input.password}
              onChange={(e) => setInput({...input,"password": e.target.value,})}
            />
          </div>
        </div>

        <p className="form-action">
          <button className="button button-flat">Reset</button>
          <button className="button">Login</button>
          <p>Don't have an Account?</p>
          <button type="submit" className="button signup" onClick={navigateToSignUp}>
            Sign Up
          </button>
        </p>
      </form>
    </div>
  );
}
