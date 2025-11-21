import React, { useEffect, useState } from "react";

const ProductFilter = ({ onChange }) => {
    const [filters, setFilters] = useState({});
    const [options, setOptions] = useState({});

    useEffect(() => {
        fetch("http://localhost:3002/attributes")
            .then((res) => res.json())
            .then((data) => {
                console.log(data);
                setOptions(data)
            }).catch((err) => console.error(err));
    }, []);

    const handleChange = (key, value) => {
        const newFilters = { ...filters, [key]: value };
        console.log(newFilters);
        setFilters(newFilters);
        onChange(newFilters);
    };

    return (
        <ul className="collection with-header">
            <li className="collection-header"><h5>Filters</h5></li>

            {Object.entries(options).map(([key, list]) => (
                <li className="collection-filter-item" key={key}>
                    <div className="input-field">
                        <select className="browser-default" name={filters[key]} value={filters[key] || ""} onChange={(e) => handleChange(key, e.target.value)}>
                            <option value="">All {key}</option>
                            {list.map((item) => (
                                <option key={item._id} value={item._id}>{item.name}</option>
                            ))}
                        </select>
                        <label className="active">{key}</label>
                    </div>
                </li>
            ))}

            {/* Price Range */}
            <li className="collection-item">
                <p>Price: {filters.priceMin || 0} - {filters.priceMax || 1000}</p>
                <p className="range-field">
                    <input
                        type="range"
                        min="0"
                        max="1000"
                        value={filters.priceMax || 1000}
                        onChange={(e) => handleChange("priceMax", parseInt(e.target.value))}
                    />
                </p>
            </li>
        </ul>
    );

};

export default ProductFilter;
