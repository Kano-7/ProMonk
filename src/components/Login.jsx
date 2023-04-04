import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import Spinner from "./Spinner";
import { uniqueNamesGenerator, countries, names, colors } from 'unique-names-generator';
import { AvatarGenerator } from 'random-avatar-generator';
import { ToastContainer, toast } from "react-toastify";

const Login = (props) => {
  const [emai, setEmai] = useState("");
  const [pass, setPass] = useState("");
  const [loading, setLoading] = useState(false);
  const generator = new AvatarGenerator();
  const ramImage = generator.generateRandomAvatar();
  
  const ramname = {
    dictionaries: [names]
  }
  const ramcountry = {
    dictionaries: [countries]
  }
  const ramstate = {
    dictionaries: [colors]
  }
  const firstName = uniqueNamesGenerator(ramname);
  const lastName = uniqueNamesGenerator(ramname);
  const country = uniqueNamesGenerator(ramcountry);
  const state = uniqueNamesGenerator(ramstate);
  const User = { 
    'id':1,
    'email': emai,
    'username':'johnd',
    'password':'m38rmF$',
    'name':{
        'firstname':firstName,
        'lastname':lastName,
        'role':'ProMonk Customer'
    },
    'socialMedia': {
         'website':'www.ProMonk.com',
         'github': 'www.git.com',
         'twitter': 'www.twitter.com',
         'insta':'www.instagram.com/ProMonk',
         'facebook': 'www.facebook.com/ProMonk'
    },
    'userImage': ramImage,
    'address':{
        'city':'Surendranagar',
        'street':'7835 new road',
        'state': state,
        'country':country,
        'number':3,
        'zipcode':'12926-3874',
        'geolocation':{
            'lat':'-37.3159',
            'long':'81.1496'
        }
    },
    'phone':'1-570-236-7033'
}

  const history = useNavigate();
  

  const email = (e) => {
    setEmai(e.target.value);
  };
  const passwor = (e) => {
    setPass(e.target.value);
  };

  const signup = () => {
    history("/signup");
    return console.log("yeahh");
  };

  const handleLoginSubmit = async (event) => {
    event.preventDefault();
    setLoading(true);

    // Make API call to verify user's credentials
    //
    axios
      .post(
        "https://fake-e-commerce-api.onrender.com/login",
        {
          email: emai,
          password: pass,
        },
        {
          withCredentials: true,
        }
      )
      .then((res) => {
        setLoading(false);
        if (res.data == "logged in") {
          // Navigate to home page
          toast.success('Logged In Successfully', {
            position: "top-center",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
          });
          setLoading(true);
          history("/home");
          localStorage.setItem('user',JSON.stringify(User))
          setLoading(false);
          return res.data;
        }
      })
      .catch((error) => {
        if (error.response.data === "User not found") {
          
          toast.warn('No user found, pls check email or sign up', {
            position: "top-center",
            autoClose: 3000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
            });
          setLoading(false);
        } else if (error.response.data === "Invalid password") {
          toast.warn('incorrect password', {
            position: "top-center",
            autoClose: 1000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
            });
          setLoading(false);
        } else {
          toast.error('Something went Wrong', {
            position: "top-center",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
            });
          setLoading(false);
        }
      });
  };
  return (
    <>
      <ToastContainer
position="top-right"
autoClose={3000}
hideProgressBar={false}
newestOnTop={false}
closeOnClick
rtl={false}
pauseOnFocusLoss
draggable
pauseOnHover
theme="light"
/>
      {loading ? (
       <div style={{
        paddingLeft: "100px",
        paddingBottom: "150px",
        paddingTop: "60px",
      }}><Spinner /></div>
      ) : (
        <div className="container-fluid">
          <section className="vh-100">
            <div className="container py-5 h-100">
              <div className="row d-flex align-items-center justify-content-center h-100">
                <div className="col-md-8 col-lg-7 col-xl-6">
                  <img
                    src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/draw2.svg"
                    className="img-fluid"
                    alt="Phone image"
                  />
                </div>
                <div className="col-md-7 col-lg-5 col-xl-5 offset-xl-1">
                  <form>
                    {/* Email input */}
                    <div className="form-outline mb-4">
                      <input
                        type="email"
                        id="form1Example13"
                        className="form-control form-control-lg"
                        onChange={email}
                      />
                      <label className="form-label" htmlFor="form1Example13">
                        Email
                      </label>
                    </div>
                    {/* Password input */}
                    <div className="form-outline mb-4">
                      <input
                        type="password"
                        id="form1Example23"
                        className="form-control form-control-lg"
                        onChange={passwor}
                      />
                      <label className="form-label" htmlFor="form1Example23">
                        Password
                      </label>
                    </div>
                    <div className="d-flex justify-content-around align-items-center mb-4">
                      {/* Checkbox */}
                      <div className="form-check">
                        <input
                          className="form-check-input"
                          type="checkbox"
                          defaultValue=""
                          id="form1Example3"
                          defaultChecked=""
                        />
                        <label
                          className="form-check-label"
                          htmlFor="form1Example3"
                        >
                          {" "}
                          Remember me{" "}
                        </label>
                      </div>
                      <a href="#!">Forgot password?</a>
                    </div>
                    {/* Submit button */}
                    <button
                      type="submit"
                      className="btn btn-primary btn-lg btn-block"
                      onClick={handleLoginSubmit}
                    >
                      Sign in
                    </button>
                    <div className="divider d-flex align-items-center my-4">
                      <p className="text-center fw-bold mx-3 mb-0 text-muted">
                        OR
                      </p>
                    </div>
                    <button
                      type="submit"
                      className="btn btn-primary btn-lg btn-block"
                      onClick={signup}
                    >
                      Sign Up
                    </button>
                    <a
                      className="btn btn-primary btn-lg btn-block"
                      style={{ backgroundColor: "#3b5998" }}
                      href="#!"
                      role="button"
                    >
                      <i className="fab fa-facebook-f me-2" />
                      Continue with Facebook
                    </a>
                    <a
                      className="btn btn-primary btn-lg btn-block"
                      style={{ backgroundColor: "#55acee" }}
                      href="#!"
                      role="button"
                    >
                      <i className="fab fa-twitter me-2" />
                      Continue with Twitter
                    </a>
                  </form>
                </div>
              </div>
            </div>
          </section>
        </div>
      )}
    </>
  );
};

export default Login;
