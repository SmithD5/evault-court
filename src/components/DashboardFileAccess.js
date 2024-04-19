import React, { useState } from 'react'
import Nav from "./NavBar/Nav.js"
import "./Dashboard.css";
import Cookies from 'js-cookie';



const DashboardFileAccess = () => {

    if (Cookies.get("username") == null) {
        window.location.href = "/"
    }
    const data = [
        { fileID: '1', value1: 'Data for Column 1', value2: 'Data for Column 2', status: 'Accepted' },
        { fileID: '2', value1: 'More data', value2: 'Additional info', status: 'Rejected' },
        { fileID: '3', value1: 'More data1', value2: 'Additional info1', status: 'Rejected' },
        { fileID: '4', value1: 'More data1', value2: 'Additional info1', status: 'Rejected' },
        // ... more objects
    ];

    const [filteredData, setFilteredData] = useState(data);

    const handleSearch = (event) => {
        const searchTerm = event.target.value.toLowerCase();
        const filtered = data.filter(
            (item) =>
                item.value1.toLowerCase().includes(searchTerm) || item.value2.toLowerCase().includes(searchTerm)
        );
        setFilteredData(filtered);
    };

    const handleRequest = (fileID) => {
        // const judgeID = Cookies.get('username'); // to get judge username
        // Simulating response




    };

    return (
        <div>
            <Nav />
            <div className="search-bar">
                <input type="text" id="search-input" placeholder="Search Cases" onChange={handleSearch} />
            </div>
            <div className="third_part">
                <p>Case Files Listed</p>
                <div className="cases">
                    {filteredData.length > 0 ? (
                        <table className="data-table">
                            <thead>
                                <tr>
                                    {Object.keys(filteredData[0]).map((key) => (
                                        key !== 'link' && <th key={key}>{key}</th>
                                    ))}
                                    <th>Request</th>
                                    <th>View</th>
                                </tr>
                            </thead>
                            <tbody>
                                {filteredData.map((row) => (
                                    <tr key={row.fileID}>
                                        {Object.keys(row).map((key) => (

                                            <td key={key}>{row[key]}</td>

                                        ))}
                                        <td>
                                            <button
                                                className="request-view"
                                                style={{ backgroundColor: 'yellow', color: "black", cursor: 'pointer', fontSize: "25px" }}
                                                onClick={() => handleRequest(row.fileID)}
                                            >
                                                Button 1
                                            </button>
                                        </td>
                                        <td>
                                            <button
                                                className="request-view"
                                                style={{ backgroundColor: 'blue', color: "black", cursor: 'pointer', fontSize: "25px" }}
                                                onClick={() => handleRequest(row.fileID)}
                                            >
                                                Button 2
                                            </button>

                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    ) : (
                        <>
                            <img src="no-case.png" alt="" />
                            <p>No cases</p>
                        </>
                    )}
                </div>

            </div>



        </div>
    )
}

export default DashboardFileAccess