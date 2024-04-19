import React from 'react'
import "./CaseFilingNav.css";
import { useLocation, useNavigate } from 'react-router-dom';


const CaseFilingNav = () => {

  let location = useLocation();
  let navigate = useNavigate()
  // const setInitialInputComp = () => {
  //   navigate('/case-filing/initial-input');
  // }


  // const setLitigantComp = () => {
  //   navigate('/case-filing/litigant');
  // }
  const setCaseDetailComp = () => {
    navigate('/case-filing/case-details');
  }
  const setCaseFileUploadComp = () => {
    navigate('/case-filing/case-file-upload');
  }

  return (
    <div className='case-filing-div'>
      <ul className='case-filing-nav'>
        {/* <li onClick={setInitialInputComp} style={location.pathname.includes('/initial-input')?{backgroundColor:"#007DFA",color:"#FFF"}:{}} className='initial-input-button'>Initial Input</li> */}
        {/* <li onClick={setLitigantComp} style={location.pathname.includes('/litigant')?{backgroundColor:"#007DFA",color:"#FFF"}:{}} className='litigant-button'>Litigant</li> */}
        <li onClick={setCaseDetailComp} style={location.pathname.includes('/case-details') ? { backgroundColor: "#007DFA", color: "#FFF" } : {}} className='case-detail-button'>Case Details</li>
        <li onClick={setCaseFileUploadComp} style={location.pathname.includes('/case-file-upload') ? { backgroundColor: "#007DFA", color: "#FFF" } : {}} className='case-detail-button'>Case File Upload</li>
      </ul>
    </div>
  )
}

export default CaseFilingNav