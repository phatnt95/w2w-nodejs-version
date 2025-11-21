import React, { useEffect, useState } from "react";
import api from "../../services/api.service";
const LocationList = () => {
    const [locations, setLocations] = useState([]);

    useEffect(() => {
        api.get('/inventories/locations').then((res) => {
            console.log('location: ', res.data);
            setLocations(res.data);
        });
    }, []);

    return (
        <div className="container">
            <h4 className="center-align">Location List</h4>

            <table className="highlight responsive-table">
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Name</th>
                        <th>Code</th>
                        <th>Created At</th>
                    </tr>
                </thead>

                <tbody>
                    {locations.length === 0 ? (
                        <tr>
                            <td colSpan="6" className="center-align grey-text">
                                No locations found.
                            </td>
                        </tr>
                    ) : (
                        locations.map((location, index) => (
                            <tr key={location._id}>
                                <td>{index + 1}</td>
                                <td>{location.name}</td>
                                <td>{location.code || "N/A"}</td>

                                <td>{new Date(location.createdAt).toLocaleDateString()}</td>
                            </tr>
                        ))
                    )}
                </tbody>
            </table>
        </div>
    );
}

export default LocationList;