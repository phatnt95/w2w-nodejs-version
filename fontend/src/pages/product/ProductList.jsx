import React, { useState, useEffect } from "react";
import ProductFilter from "./ProductFilter";
import ProductCards from "./ProductCards";
import ProductDetailModal from "./ProductDetailModal";
import PreviewTryOn from "./PreviewTryOn.jsx";
import TryOn from "../tryon/TryOn.jsx";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import "./Product.css"

const ProductList = () => {
    const navigate = useNavigate();
    const [products, setProducts] = useState([]);
    const [filters, setFilters] = useState({}); // lưu filter hiện tại
    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = 10;

    useEffect(() => {
        console.log(import.meta.env.API_BASE_URL);
        // Giả sử gọi API -> setProducts
        fetch("http://localhost:3002/products")
            .then((res) => res.json())
            .then((data) => {
                console.log(data);
                setProducts(data.items)
            }).catch((err) => console.error(err));
    }, []);


    // Xử lý khi SidebarFilter thay đổi
    const handleFilterChange = (newFilters) => {
        setFilters(newFilters);
        // setCurrentPage(1); // reset về page 1 khi đổi filter
    };
    const handleViewDetail = (product) => {
        setSelectedProduct(product);
        // wait for modal to render
        setTimeout(() => {
            const elem = document.getElementById("product-detail-modal");
            const instance = M.Modal.getInstance(elem) || M.Modal.init(elem);
            instance.open();
        }, 100);
    };

    const handleTryOn = (product) => {
        setTryOnProduct(product);
    };
    // Pagination logic
    // const indexOfLast = currentPage * itemsPerPage;
    // const indexOfFirst = indexOfLast - itemsPerPage;
    // const currentItems; //= products.slice(indexOfFirst, indexOfLast);
    const totalPages = Math.ceil(products.length / itemsPerPage);
    const [selectedProduct, setSelectedProduct] = useState(null);
    const [tryOnProduct, setTryOnProduct] = useState(null);
    const handleCloseModal = () => setSelectedProduct(null);
    return (
        <div className="container">
            <div className="row valign-wrapper" style={{ marginTop: "20px" }}>
                <div className="col s12 m2"></div>


                <div className="col s12 m4 left-align">
                    <h4>Product List</h4>
                </div>
                <div className="col s12 m3 right-align">
                    <button className="btn green" onClick={() => navigate("/create-product")}>
                        <i className="material-icons">add</i>
                    </button>
                </div>
                <div className="col s12 m3"></div>
            </div>

            <div className="row">
                {/* Sidebar filter */}
                <div className="col s12 m2">
                    <ProductFilter onChange={handleFilterChange} />
                </div>

                {/* Product list */}
                <div className="col s12 m7">
                    <ProductCards products={products} onViewDetail={handleViewDetail} onTryOn={handleTryOn} />
                </div>

                {/* Preview try on */}
                <div className="col s12 m3">
                    <PreviewTryOn product={tryOnProduct} />
                </div>
            </div>

            {/* Pagination controls */}
            <ul className="pagination center-align">
                <li className={currentPage === 1 ? "disabled" : "waves-effect"}>
                    <a href="#!" onClick={() => setCurrentPage((p) => Math.max(p - 1, 1))}>
                        <i className="material-icons">chevron_left</i>
                    </a>
                </li>

                {Array.from({ length: totalPages }, (_, i) => (
                    <li key={i + 1} className={currentPage === i + 1 ? "active" : "waves-effect"}>
                        <a href="#!" onClick={() => setCurrentPage(i + 1)}>
                            {i + 1}
                        </a>
                    </li>
                ))}

                <li className={currentPage === totalPages ? "disabled" : "waves-effect"}>
                    <a href="#!" onClick={() => setCurrentPage((p) => Math.min(p + 1, totalPages))}>
                        <i className="material-icons">chevron_right</i>
                    </a>
                </li>
            </ul>

            {/* Modal */}
            {selectedProduct && (
                <ProductDetailModal
                    product={selectedProduct}
                    onClose={handleCloseModal}
                />
            )}
        </div>
    );
};

export default ProductList;
