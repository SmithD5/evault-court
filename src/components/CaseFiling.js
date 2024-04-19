import React, { useState } from 'react';
import "./CaseFiling.css";
import Nav from "./NavBar/Nav.js";
import Cookies from 'js-cookie';

const CaseFiling = () => {

  if (Cookies.get("username") == null) {
    window.location.href = "/"
  }

  const [myFormData, setMyFormData] = useState({
    plaintiff: "",
    defendant: "",
    causeOfAction: "",
    dateOfAction: "",
  })

  const { plaintiff, defendant, causeOfAction, dateOfAction } = myFormData

  // const [noOfSections, setNoOFSections] = useState(1);
  // const increaseActSections = () => {
  //   setNoOFSections(noOfSections + 1)
  // }
  // const decreaseActSections = () => {
  //   if (noOfSections > 1) {
  //     setNoOFSections(noOfSections - 1)
  //   }
  // }

  const [selectedFile, setSelectedFile] = useState(null);

  const handleFileChange = (event) => {
    setSelectedFile(event.target.files[0]);
  };




  // const actSections = Array.from({ length: noOfSections }, (_, no) => (
  //   <div className="act-details-div">
  //     <div className="act-div-case-details">
  //       <p className="labels" id='act-no-case-details__p'>Act {no + 1}</p>
  //       <input type="text" name={`act${no + 1}`} id="act" placeholder='Type your act' onChange={actUpdate} />
  //     </div>
  //     <div className="section-case-details">
  //       <p className="labels" id='section-case-details__p'>Section {no + 1}</p>
  //       <input type="text" name={`section${no + 1}`} id="section" placeholder='Type here' onChange={actUpdate} />
  //     </div>
  //     <div className="more-acts-button-div">
  //       <button className="more-acts-button" onClick={increaseActSections}>+More Acts</button>
  //       {noOfSections > 1 && <button className="more-acts-button" onClick={decreaseActSections}>Remove</button>}
  //     </div>
  //   </div>)
  // );

  const dataChange = (e) => {

    setMyFormData({ ...myFormData, [e.target.name]: e.target.value })
  }

  const handleSubmit = (event) => {
    event.preventDefault();

    const formData = new FormData();

    formData.set("plaintiff", plaintiff)
    formData.set("defendant", defendant)
    formData.set("causeOfAction", causeOfAction)
    formData.set("dateOfAction", dateOfAction)
    // formData.set("acts", acts)
    formData.append("file", selectedFile)



  };


  return (
    <div>
      <Nav />
      <form onSubmit={handleSubmit} action="">

        <div className="case-filing-case-details-grid">
          {/* <div className="case-filing-case-details-note">
            <p>Note: All Fields are compulsory</p>
          </div> */}

          <div className="case-details">
            <div className="personal-details">
              <p className='pd-case-details-title'>Case Details</p>
              <div className='pd-case-details'>
                <div className="names">
                  <div className="plaintiff-name">
                    <p className="labels">Plaintiff</p>
                    <input type="text" name="plaintiff" id="plaintiff-name" placeholder='Type Here' onChange={dataChange} />
                  </div>
                  <div className="defendant-name">
                    <p className="labels">Defendant</p>
                    <input type="text" name="defendant" id="defendant-name" placeholder='Type here' onChange={dataChange} />
                  </div>
                </div>
                <div className="first-row-pd-case-details">
                  <p className="labels" id='cause-of-action__p'>Cause of Action</p>
                  <textarea name="causeOfAction" id="cause-of-action-textarea" cols="70" rows="5" placeholder="Type here" onChange={dataChange} />
                </div>
                <div className="date-div-case-details">
                  <p className="labels" id="date-of-action-case-details__p">Date of Action</p>
                  <input type="date" name="dateOfAction" id="date-of-action-case-details" onChange={dataChange} />
                </div>
              </div>
            </div>
            {/* <div className="act-details-main-div">
              <p className='act-details-title'>Act detail</p> */}
            {/* <div className="act-details">
                {actSections}
              </div> */}
            {/* <div className="save-button-div">
                <button className="more-acts-button" onClick={increaseActSections}>Save</button>
              </div>
            </div>*/}
          </div>
        </div>
        <>
          <div className="file-upload-div">
            <div className="file-upload">
              <input type="file" name="file" id="file"
                onChange={handleFileChange}
              />
              <button type="submit" className='file-submit-button'>Submit</button>
            </div>
          </div>
        </>
      </form >
    </div >
  )
}

export default CaseFiling