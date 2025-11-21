import React, { useState, useEffect } from "react";
import api from "../../services/api.service";


const LocationSetup = () => {
    const [location, setLocation] = useState(null);
    const [formData, setFormData] = useState({
        name: '',
        code: ''
    });
    const [isEditing, setIsEditing] = useState(false);
    useEffect(() => {
        api.get('')
    });

    // Handle text input
    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
        console.log(formData);
    };

    const handleSave = () => {
        // api.put(`/api/products/${id}`, formData).then((res) => {
        //     setProduct(res.data);
        //     setIsEditing(false);
        // });
    };

    const handleCancle = () => {

    }

    return (
        <div>
            <div className="container" style={{ marginTop: "30px" }}>
                <div className="card">
                    <div className="card-content">
                        <span className="card-title">Edit Product</span>
                        <div className="row">
                            <div className="input-field col s6">
                                <input
                                    type="text"
                                    name="name"
                                    value={formData.name}
                                    onChange={handleChange}
                                />
                                <label className="active">Name</label>
                            </div>
                            <div className="input-field col s6">
                                <input
                                    type="text"
                                    name="code"
                                    value={formData.code}
                                    onChange={handleChange}
                                />
                                <label className="active">Code</label>
                            </div>
                        </div>
                        <div className="card-action">
                            <button
                                className="btn green"
                                onClick={handleSave}
                                style={{ marginRight: "10px" }}
                            >
                                Save
                            </button>
                            <button
                                className="btn red"
                                onClick={handleCancle}
                            >
                                Cancel
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default LocationSetup;