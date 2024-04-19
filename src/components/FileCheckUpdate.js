import React, { useState } from 'react'
import Nav from './NavBar/Nav';
const FileCheckUpdate = () => {

    const [fileCaseID, setFileCaseID] = useState('');



    const [selectedFile, setSelectedFile] = useState(null);
    const handleFileChange = (event) => {
        const file = event.target.files[0]; // Get the first selected file
        setSelectedFile(file);
    };

    const handleSubmit = (event) => {
        event.preventDefault();

        if (selectedFile) {
            console.log('Selected file:', selectedFile);
            console.log('case ID:', fileCaseID);
        }
    };

    return (
        <>
            <Nav />

            <div className="file-upload-div">
                <p className="file-upload-title" style={{ "top": "18vh" }}>File Upload</p>
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
            </div>

        </>
    );
}

export default FileCheckUpdate