import React, { useState } from 'react'
import Nav from './NavBar/Nav'
import "./Queries.css"
import Cookies from 'js-cookie';

const Queries = () => {
    if (Cookies.get("username") == null) {
        window.location.href = "/"
    }

    const [myFormData, setMyFormData] = useState({
        name: "",
        caseID: "",
        query: "",
        fileID: "",
    })

    const { name, caseID, query, fileID } = myFormData;
    const dataChange = (e) => {

        setMyFormData({ ...myFormData, [e.target.name]: e.target.value })
    }

    const handleSubmit = (event) => {
        event.preventDefault();

        const formData = new FormData();

        formData.set("name", name)
        formData.set("caseID", caseID)
        formData.set("query", query)
        formData.set("fileID", fileID)
        console.log(formData.get("name"))
        alert("Query Submitted")
    };

    return (
        <>
            <Nav />
            <div className="case-details">
                <form onSubmit={handleSubmit} action="">
                    <div className="personal-details">
                        <p className='pd-case-details-title' style={{ "top": "19vh" }}>Query Details</p>
                        <div className='pd-case-details'>
                            <div className="names">
                                <div className="plaintiff-name">
                                    <p className="labels">Name</p>
                                    <input type="text" name="name" id="plaintiff-name" placeholder='Type here' onChange={dataChange} />
                                </div>
                                <div className="defendant-name">
                                    <p className="labels">Case ID</p>
                                    <input type="text" name="caseID" id="defendant-name" placeholder='Type here' onChange={dataChange} />
                                </div>
                            </div>
                            <div className="first-row-pd-case-details">
                                <p className="labels" id='cause-of-action__p'>Query</p>
                                <textarea name="query" id="cause-of-action-textarea" cols="70" rows="5" placeholder="Type here" onChange={dataChange} />
                            </div>
                            <div className="date-div-case-details" style={{ "marginLeft": "5vw" }}>
                                <p className="labels" id="date-of-action-case-details__p">File ID</p>
                                <input type="text" name="fileID" id="date-of-action-case-details" placeholder='Type here' style={{ "marginLeft": "3vw" }} onChange={dataChange} />
                            </div>
                        </div>
                    </div>
                    <button type="submit" className='file-submit-button' style={{ "marginLeft": "45vw", "marginTop": "1vh" }}>Submit</button>
                </form>
            </div >
        </>
    )
}

export default Queries