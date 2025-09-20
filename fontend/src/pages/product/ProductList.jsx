import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";

const ProductList = () => {
    const navigate = useNavigate();
    const [products, setProducts] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = 10;

    useEffect(() => {
        console.log(import.meta.env.API_BASE_URL);
        // Giả sử gọi API -> setProducts
        fetch("http://localhost:3002/products")
            .then((res) => res.json())
            .then((data) => {
                console.log(data);
                setProducts(data)
            }).catch((err) => console.error(err));
    }, []);

    // Pagination logic
    const indexOfLast = currentPage * itemsPerPage;
    const indexOfFirst = indexOfLast - itemsPerPage;
    const currentItems = products.slice(indexOfFirst, indexOfLast);
    const totalPages = Math.ceil(products.length / itemsPerPage);

    return (
        <div className="container">
            <div className="row valign-wrapper" style={{ marginTop: "20px" }}>
                <div className="col s6 left-align">
                    <h4>Product List</h4>
                </div>
                <div className="col s6 right-align">
                    <button className="btn green" onClick={() => navigate("/create-product")}>
                        <i className="material-icons left">add</i>
                        New
                    </button>
                </div>
            </div>

            <div className="row">
                {currentItems.map((product) => (
                    <div className="col s12 m6 l4" key={product._id}>
                        <div className="card">
                            <div className="card-image">
                                {/* <img src={'http://localhost:3002/' + product.images[0]?.path} alt={product.name} /> */}
                                <img src={`http://localhost:3002/${product.images[0]?.path}`} alt={product.name} />
                            </div>
                            <div className="card-content">
                                <span className="card-title">{product.name}</span>
                            </div>
                            <div className="card-action">
                                <Link to={`/product/${product._id}`} className="btn blue">
                                    View Detail
                                </Link>
                            </div>
                        </div>
                    </div>
                ))}
            </div>

            {/* Pagination controls */}
            <ul className="pagination center-align">
                <li className={currentPage === 1 ? "disabled" : "waves-effect"}>
                    <a href="#!" onClick={() => setCurrentPage((p) => Math.max(p - 1, 1))}>
                        <i className="material-icons">chevron_left</i>
                    </a>
                </li>

                {Array.from({ length: totalPages }, (_, i) => (
                    <li
                        key={i + 1}
                        className={currentPage === i + 1 ? "active" : "waves-effect"}
                    >
                        <a href="#!" onClick={() => setCurrentPage(i + 1)}>
                            {i + 1}
                        </a>
                    </li>
                ))}

                <li
                    className={
                        currentPage === totalPages ? "disabled" : "waves-effect"
                    }
                >
                    <a
                        href="#!"
                        onClick={() =>
                            setCurrentPage((p) => Math.min(p + 1, totalPages))
                        }
                    >
                        <i className="material-icons">chevron_right</i>
                    </a>
                </li>
            </ul>
        </div>
    );
};

export default ProductList;
