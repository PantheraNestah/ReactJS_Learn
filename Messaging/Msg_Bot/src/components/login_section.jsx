import React, {useEffect} from "react";
import '../css/style.min.css'

export default function LoginSection() {
  useEffect(() => {
    const form_reg_link = document.getElementById("form_reg_link");
    const form_login_link = document.getElementById("form_login_link");
    const signIn = document.getElementById("signIn");
    const signUp = document.getElementById("signUp");

    form_reg_link.addEventListener("click", () => {
      signIn.classList.add("d-none");
      signUp.classList.remove("d-none");
    });

    form_login_link.addEventListener("click", () => {
      signUp.classList.add("d-none");
      signIn.classList.remove("d-none");
    });
  }, []);

  return (
    <>
      <div>
        <div id="signIn" className="login-section col-md-8 col-lg-5 mx-md-auto d-flex flex-column align-items-center border justify-content-center py-3">
          <div className="section_header">
            <h1 className="section_header_title">Welcome to Polluwatch</h1>
          </div>
          <div className="login-section_form d-flex flex-column align-items-center">
            <form className="section_form_form col-md-12 p-4">
              <span className="form_reg_link">
                don't have an account? <a href="#signUp" id="form_reg_link" className="">Sign Up</a>
              </span>
              <div className="form_input-group d-flex flex-column m-4">
                <label className="form_input-group_label" htmlFor="username">Username</label>
                <input className="form_input-group_input text-center" type="text" id="username" name="username" required />
              </div>
              <div className="form_input-group d-flex flex-column m-4">
                <label className="form_input-group_label" htmlFor="password">Password</label>
                <input className="form_input-group_input text-center" type="password" id="password" name="password" required />
              </div>
              <input value={"Sign In"} className="form_submit-button btn btn-primary" type="submit" />
            </form>
          </div>
        </div>
        <div id="signUp" className="login-section col-md-8 col-lg-5 mx-md-auto d-none flex-column align-items-center border justify-content-center">
          <div className="section_header">
            <h1 className="section_header_title mt-3 text-center">Register</h1>
          </div>
          <div className="login-section_form d-flex flex-column align-items-center">
            <form className="section_form_form col-md-12 p-4">
              <span className="form_reg_link">
                Already have an account? <a href="#signIn" id="form_login_link" className=""> Sign In</a>
              </span>
              <div className="form_input-group d-flex flex-column m-4">
                <label className="form_input-group_label" htmlFor="username">Email</label>
                <input className="form_input-group_input text-center" type="text" id="username" name="username" required />
              </div>
              <div className="form_input-group d-flex flex-column m-4">
                <label className="form_input-group_label" htmlFor="password">Password</label>
                <input className="form_input-group_input text-center" type="password" id="password" name="password" required />
              </div>
              <div className="form_input-group d-flex flex-column m-4">
                <label className="form_input-group_label" htmlFor="password">Confirm Password</label>
                <input className="form_input-group_input text-center" type="password" id="password" name="password" required />
              </div>
              <input value={"Sign In"} className="form_submit-button btn btn-primary" type="submit" />
            </form>
            {/* enable log in with google */}
            <div className="social-media-login d-flex justify-content-center align-items-center col-md-10">
              <div className="d-flex align-items-center justify-content-center">
                <span className="social-media-login_text me-2">Or continue with</span>
                <span className="d-flex justify-content-between">
                  <button className="social-media-login_google btn btn-outline-secondary">
                    <img src="https://img.icons8.com/color/48/000000/google-logo.png" alt="google" width={"20px"} />oogle
                  </button>
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}