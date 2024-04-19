import React from 'react'
import Nav from './NavBar/Nav'
import Cookies from 'js-cookie';


const FileAccessQueries = () => {

    if (Cookies.get("username") == null) {
        window.location.href = "/"
    }
    const data = [
        { caseID: "1", value1: "Data for Column 1", value2: "Data for Column 2", status: "Accepted" },
        { caseID: "2", value1: "More data", value2: "Additional info", status: "Rejected" },
        { caseID: "3", value1: "More data1", value2: "Additional info1", status: "Rejected" },
        { caseID: "4", value1: "More data1", value2: "Additional info1", status: "Rejected" },
        // ... more objects
    ];


    const [filteredData, setFilteredData] = React.useState(data);

    const handleSearch = (event) => {
        if (event.target.value === "") {
            setFilteredData(data)
        }
        const searchTerm = event.target.value.toLowerCase();
        const filtered = data.filter((item) => {
            // Filter based on multiple properties (adjust as needed)
            return (
                item.value1.toLowerCase().includes(searchTerm) ||
                item.value2.toLowerCase().includes(searchTerm)
            );
        });
        setFilteredData(filtered);
    };

    return (
        <div>
            <Nav />
            <div className="stats">
                <div className="draft_pleading">
                    <div className="title">
                        <p>Documents To Verify</p>
                    </div>
                    <div className="count">
                        <img src="/writing-hand.png" alt="" />
                        <p>0</p>
                    </div>
                </div>
                <div className="completed_pleading">
                    <div className="title">
                        <p>Documents Uploaded</p>
                    </div>
                    <div className="count">
                        <img src="/checked.png" alt="" />
                        <p>0</p>
                    </div>
                </div>
                <div className="objections">
                    <div className="title">
                        <p>Objections</p>
                    </div>
                    <div className="count">
                        <img src="/objections.png" alt="" />
                        <p>0</p>
                    </div>
                </div>
                <div className="my_cases">
                    <div className="title">
                        <p>Documents Verified</p>
                    </div>
                    <div className="count">
                        <img src="/my-cases.png" alt="" />
                        <p>0</p>
                    </div>
                </div>
            </div>

            <div className="search-bar">
                <input
                    type="text"
                    id="search-input"
                    placeholder="Search Cases"
                    onChange={handleSearch}
                />
            </div>


            <div className="third_part">
                <p>Cases Listed</p>
                <div className="cases">
                    {data ? (
                        <table className="data-table">
                            <thead>
                                <tr>
                                    {Object.keys(data[0]).map((key) => (
                                        <th key={key}>{key}</th>
                                    ))}
                                </tr>
                            </thead>
                            <tbody>
                                {/* {data.map((row) => (
                                    <tr key={row.id}>

                                        {Object.values(row).map((value) => (
                                            <td key={value}>{value}</td>
                                        ))}
                                    </tr>
                                ))} */}
                                {filteredData.map((row) => (
                                    <tr key={row.id}>

                                        {Object.values(row).map((value) => (
                                            <td key={value}>{value}</td>
                                        ))}
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

export default FileAccessQueries 