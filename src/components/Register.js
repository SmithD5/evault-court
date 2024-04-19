import React from 'react';
import "./Register.css";
import { useNavigate, useLocation } from "react-router-dom";
import Cookies from 'js-cookie';

const Register = () => {

  let location = useLocation();
  const navigate = useNavigate()
  const handleSubmit = (event) => {
    event.preventDefault();

    const formData = new FormData(event.target); // Get form data directly



    // Send the formData to the server using a fetch request or a library like Axios

    console.log(formData)

    navigate("/signin");
  };

  if (Cookies.get('username') != null) {
    const judgeLinks = location.pathname.includes('/judge');
    const fileAccessLinks = location.pathname.includes('/file-access');
    window.location.href = judgeLinks ? "/dashboard/judge" : fileAccessLinks ? "/dashboard/file-access/main" : "/dashboard/file-check/main";
  }

  // Add the action which will happen after submit button is clicked, by default it routes to user dashboard 
  return (
    <div className='register-grid'>
      <div><p className='register-title'>Registration Form</p></div>
      <form onSubmit={handleSubmit} action="">
        <div className="radio-buttons">
          <div className="advocate">
            <input type="radio" name="userType" id="fileAccess" value="fileAccess" />
            <label htmlFor="fileAccess">File Access</label>
          </div>
          <div className="advocate">
            <input type="radio" name="userType" id="fileChecker" value="fileChecker" />
            <label htmlFor="fileChecker">File Checker</label>
          </div>
          <div className="judge">
            <input type="radio" name="userType" id="judge" value="judge" />
            <label htmlFor="judge">Judge</label>
          </div>
        </div>
        <div className="bar-registration-details">
          <p className='bar-registration-title'>Personal Details</p>
          <div className="registration-details">
            <div className="first-row">
              <div className="advocate-name">
                <p className="labels" id='advocate__p'>Name</p>
                <input type="text" name="advocateName" id="advocate" />
              </div>

              <div className="state-name">
                <p className="labels" id='state__p'>State</p>
                <select name="advocateState" id="state" className='state__select'>
                  <option value="null" >Select State</option>
                  <option value="Maharashtra">Maharashtra</option>
                  <option value="Delhi">Delhi</option>
                  <option value="Goa">Goa</option>
                  <option value="Gujarat">Gujarat</option>
                </select>
              </div>

            </div>
            {/* <div className="second-row">
              <div className="bar-registration-name">
                <p className="labels" id='bar_registration__p'>Bar registration number</p>
                <input type="text" name="bar-registration-number" id="advocate-name" placeholder='Number' />
              </div>
              <div className="d-o-b">
                <p className="labels">Date Of Birth</p>
                <input type="text" name="date-of-birth" id="d-o-b" />
              </div>
            </div> */}
            <div className="third-row">
              <div className="radio-buttons">
                <div className="gender-label">
                  <label className="gender-select-label" style={{ fontWeight: 700 }} htmlFor="gender">Gender</label>
                </div>
                <div className="gender-select">
                  <input type="radio" name="advocateGender" id="man" value="man" />
                  <label className="gender-select-label" style={{ fontWeight: 700 }} htmlFor="man">Man</label>
                  <input type="radio" name="advocateGender" id="woman" value="woman" />
                  <label className="gender-select-label" style={{ fontWeight: 700 }} htmlFor="woman">Woman</label>
                  <input type="radio" name="advocateGender" id="other" value="other" />
                  <label className="gender-select-label" style={{ fontWeight: 700 }} htmlFor="other">Other</label>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="Ordinary-place-of-practice">
          <p className='opp-title'>Ordinary Place of Practice</p>
          <div className='opp'>
            <div className="first-row-opp">
              <div className="court-type">
                <div className="court-select">
                  <input type="radio" name="courtType" id="district_court" value="district-court" />
                  <label className="court-select-label" style={{ fontWeight: 700 }} htmlFor="district_court">District Court</label>
                  <input type="radio" name="courtType" id="high_court" value="high-court" />
                  <label className="court-select-label" style={{ fontWeight: 700 }} htmlFor="high_court">High Court</label>
                  <input type="radio" name="courtType" id="supreme_court" value="supreme-court" />
                  <label className="court-select-label" style={{ fontWeight: 700 }} htmlFor="supreme_court">Supreme Court</label>
                </div>
              </div>
              <div className="state-name-opp">
                <p className="labels" id='state__p'>State</p>
                <input type="text" name="stateOPP" id="state" />
              </div>
            </div>
            <div className="second-row-opp">
              <div className="district-name">
                <p className="labels" id='district__p'>District</p>
                <select name="districtOPP" id="district" className='district__select'>
                  <option value="null" >Select District</option>
                  <option value="Mumbai">Mumbai</option>
                  <option value="Palghar">Palghar</option>
                  <option value="Thane">Thane</option>
                </select>
              </div>
            </div>
          </div>
        </div>
        <div className="contact-details">
          <p className='cd-title'>Contact Details</p>
          <div className='cd'>
            <div className="first-row-cd">
              <div className="mobile-no-div" id="mobile-no-div">
                <p className="labels" id='mobile-no__p'>Mobile Number (+91)</p>
                <input type="text" name="advocateMobileNo" id="mobile-no" placeholder='Mobile Number' />
              </div>
              <div className="email-div">
                <p className="labels" id="email__p">Email</p>
                <input type="email" name="advocateEmail" id="email" />
              </div>
            </div>
          </div>
        </div>
        <div className="choose-password">
          <p className='cp-title'>Choose Password</p>
          <div className='cp'>
            <div className="first-row-password">
              <div className="password-div">
                <p className="labels" id='password__p'>Password</p>
                <input type="password" name="advocatePassword" id="password" />
              </div>
              <div className="confirm-password-div">
                <p className="labels" id="confirm-password__p">Confirm Password</p>
                <input type="password" name="advocateConfirmPassword" id="confirm-password" />
              </div>
            </div>
          </div>
        </div>
        <div className="register-buttons">
          <button type="submit" className="file-submit-button" style={{ "color": "white", "cursor": "pointer", "marginRight": "45vw", "width": "7vw", "height": "7vh" }} >Submit</button>
        </div>
      </form>
    </div>
  )
}

export default Register