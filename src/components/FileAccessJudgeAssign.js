import React, { useState } from 'react';
import Nav from './NavBar/Nav';
import './FileAccessJudgeAssign.css';

const FileAccessJudgeAssign = () => {
    const [caseID, setCaseID] = useState('');
    const [userID, setUserID] = useState('');
    const [userRole, setUserRole] = useState('');
    const [errorMessage, setErrorMessage] = useState('');
    // const [fileCaseID, setFileCaseID] = useState('');

    const submitHandler = (e) => {
        e.preventDefault(); // Prevent default form submission behavior

        // Check if caseID and judgeID are not empty
        if (!caseID || !userID) {
            setErrorMessage('Please enter both Case ID and Judge ID.');
            return;
        }

        // Reset error message if there are no validation issues
        setErrorMessage('');

        const data = {
            user: userID,
            role: userRole,
            case: caseID,
        };
        console.log(data);
    };

    // const [selectedFile, setSelectedFile] = useState(null);
    // const handleFileChange = (event) => {
    //     const file = event.target.files[0]; // Get the first selected file
    //     setSelectedFile(file);
    // };

    // const handleSubmit = (event) => {
    //     event.preventDefault();

    //     if (selectedFile) {
    //         console.log('Selected file:', selectedFile);
    //         console.log('case ID:', fileCaseID);
    //     }
    // };

    return (
        <>
            <Nav />
            <div>
                <form onSubmit={submitHandler}>
                    <div className="court-dashboard-div">
                        <p className="court-dashboard-title">Case Assignment</p>
                        <div className="court-dashboard-buttons-div">
                            <div className="court-dashboard-buttons-row">
                                <input
                                    type="text"
                                    name="assignedUserID"
                                    id="assignedUserID"
                                    value={userID}
                                    onChange={(e) => setUserID(e.target.value)}
                                    placeholder="User ID"
                                />
                                <input
                                    type="text"
                                    name="assignedUserRole"
                                    id="assignedUserRole"
                                    value={userRole}
                                    onChange={(e) => setUserRole(e.target.value)}
                                    placeholder="User Role"
                                />
                                <input
                                    type="text"
                                    name="assignedCaseID"
                                    id="assignedCaseID"
                                    value={caseID}
                                    onChange={(e) => setCaseID(e.target.value)}
                                    placeholder="Case ID"
                                />
                                <button
                                    type="submit"
                                    className="court-dashboard-buttons"
                                    style={{ width: '10vw', height: '7vh', "border": "none" }}
                                >
                                    Submit
                                </button>
                            </div>
                        </div>
                    </div>
                </form >
                {errorMessage && alert(errorMessage)}
            </div >

            {/* <div className="file-upload-div">
                <p className="file-upload-title">File Upload</p>
                <form onSubmit={handleSubmit}>
                    <div className="file-upload">
                        <input type="file" name="file" id="file" onChange={handleFileChange} />
                        <input
                            type="text"
                            name="assignedCaseID"
                            id="assignedCaseID"
                            value={fileCaseID}
                            onChange={(e) => setFileCaseID(e.target.value)}
                            placeholder="Case ID"
                        />
                        <button type="submit" className='file-submit-button'>Submit</button>
                    </div>
                </form>
            </div> */}

        </>
    );
};

export default FileAccessJudgeAssign;
