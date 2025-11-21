import React, { useEffect, useState } from "react";
import api from "../../services/api.service";
import Datatable from "../../components/Datatable";
const Inventory = () => {
    const [locations, setLocations] = useState([]);
    const [storages, setStorages] = useState([]);
    const [cabinets, setCabinets] = useState([]);
    const [bins, setBins] = useState([]);
    const [placements, setPlacements] = useState([]);
    const [header, setHeader] = useState([]);
    const [data, setData] = useState([]);

    useEffect(() => {
        setHeader(fakeheader);
        setData(fakedata);
    }, []);

    const fakedata = [
        { name: "Location 1", description: "Description 1", price: 100 },
        { name: "Location 2", description: "Description 2", price: 200 },
        { name: "Location 3", description: "Description 3", price: 300 },
    ];

    const fakeheader = [
        { accessor: "name", header: "Name" },
        { accessor: "description", header: "Description" },
        { accessor: "price", header: "Price" },
    ];


    // useEffect(() => {
    //     const fetchLocations = async () => {
    //         const response = await api.get("/locations");
    //         setLocations(response.data);
    //     };
    //     fetchLocations();
    // }, []);

    // useEffect(() => {
    //     const fetchStorages = async () => {
    //         const response = await api.get("/storages");
    //         setStorages(response.data);
    //     };
    //     fetchStorages();
    // }, []);

    // useEffect(() => {
    //     const fetchCabinets = async () => {
    //         const response = await api.get("/cabinets");
    //         setCabinets(response.data);
    //     };
    //     fetchCabinets();
    // }, []);

    // useEffect(() => {
    //     const fetchBins = async () => {
    //         const response = await api.get("/bins");
    //         setBins(response.data);
    //     };
    //     fetchBins();
    // }, []);

    // useEffect(() => {
    //     const fetchPlacements = async () => {
    //         const response = await api.get("/placements");
    //         setPlacements(response.data);
    //     };
    //     fetchPlacements();
    // }, []);

    return (
        <div>
            <div className="row">
                <div className="col s12">
                    <ul className="tabs">
                        <li className="tab col s3"><a href="#tab1">Locations</a></li>
                        <li className="tab col s3"><a className="active" href="#tab2">Storages</a></li>
                        <li className="tab col s3"><a href="#tab3">Cabinets</a></li>
                        <li className="tab col s3"><a href="#tab4">Bins</a></li>
                        <li className="tab col s3"><a href="#tab5">Placements</a></li>
                    </ul>
                </div>
                {header.length > 0 && data.length > 0 && (
                    <Datatable title="Locations" columns={header} data={data} />
                )}
            </div>
        </div>
    );
};

export default Inventory;