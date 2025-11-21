import React, { useEffect, useState } from "react";
import ProductList from "../product/ProductList";
// import M from "materialize-css";
// import ProductList from "./ProductList"; // component có sẵn

const StockUp = () => {
    const [selectedProducts, setSelectedProducts] = useState([]);
    const [modalInstance, setModalInstance] = useState(null);

    // Dữ liệu giả cho 4 select box
    const [categories] = useState(["Electronics", "Clothing", "Food"]);
    const [subCategories, setSubCategories] = useState([]);
    const [brands, setBrands] = useState([]);
    const [warehouses, setWarehouses] = useState([]);

    const [selectedCategory, setSelectedCategory] = useState("");
    const [selectedSubCategory, setSelectedSubCategory] = useState("");
    const [selectedBrand, setSelectedBrand] = useState("");
    const [selectedWarehouse, setSelectedWarehouse] = useState("");

    // Khởi tạo Materialize modal và select
    useEffect(() => {
        const modal = document.querySelector("#stockup-modal");
        const instance = M.Modal.init(modal);
        setModalInstance(instance);

        M.FormSelect.init(document.querySelectorAll("select"));
    }, []);

    // Khi chọn category → cập nhật dependent select
    useEffect(() => {
        if (selectedCategory === "Electronics") setSubCategories(["Phone", "Laptop"]);
        else if (selectedCategory === "Clothing") setSubCategories(["Men", "Women"]);
        else if (selectedCategory === "Food") setSubCategories(["Fresh", "Packaged"]);
        else setSubCategories([]);
        setSelectedSubCategory("");
        setBrands([]);
        setWarehouses([]);
    }, [selectedCategory]);

    useEffect(() => {
        if (selectedSubCategory)
            setBrands(["Brand A", "Brand B", "Brand C"]);
        else setBrands([]);
        setSelectedBrand("");
        setWarehouses([]);
    }, [selectedSubCategory]);

    useEffect(() => {
        if (selectedBrand)
            setWarehouses(["Warehouse 1", "Warehouse 2"]);
        else setWarehouses([]);
        setSelectedWarehouse("");
    }, [selectedBrand]);

    const toggleProduct = (productId) => {
        setSelectedProducts((prev) =>
            prev.includes(productId)
                ? prev.filter((id) => id !== productId)
                : [...prev, productId]
        );
    };

    const handleSave = () => {
        console.log("Stock up:", {
            selectedProducts,
            selectedCategory,
            selectedSubCategory,
            selectedBrand,
            selectedWarehouse,
        });
        modalInstance.close();
    };

    return (
        <div className="container">
            {/* Header */}
            <div className="row valign-wrapper">
                <div className="col s6">
                    <h5>Stock Up Products</h5>
                </div>
                <div className="col s6 right-align">
                    <button
                        className="btn waves-effect waves-light"
                        // disabled={selectedProducts.length === 0}
                        onClick={() => modalInstance.open()}
                    >
                        Stock Up
                    </button>
                </div>
            </div>

            {/* Product List */}
            Product List Here

            {/* Modal */}
            <div id="stockup-modal" className="modal">
                <div className="modal-content">
                    <h5>Stock Up Details</h5>
                    <form>
                        <div className="input-field">
                            <select className="browser-default"
                                value={selectedCategory}
                                onChange={(e) => setSelectedCategory(e.target.value)}
                            >
                                <option value="">Choose category</option>
                                {categories.map((c) => (
                                    <option key={c} value={c}>
                                        {c}
                                    </option>
                                ))}
                            </select>
                            <label className="active">Category</label>
                        </div>
                    </form>
                    {/* Category */}


                    {/* Sub-category */}
                    <div className="input-field">
                        <select className="browser-default"
                            value={selectedSubCategory}
                            onChange={(e) => setSelectedSubCategory(e.target.value)}
                            disabled={!subCategories.length}
                        >
                            <option value="">Choose sub-category</option>
                            {subCategories.map((sc) => (
                                <option key={sc} value={sc}>
                                    {sc}
                                </option>
                            ))}
                        </select>
                        <label className="active">Sub Category</label>
                    </div>

                    {/* Brand */}
                    <div className="input-field">
                        <select className="browser-default"
                            value={selectedBrand}
                            onChange={(e) => setSelectedBrand(e.target.value)}
                            disabled={!brands.length}
                        >
                            <option value="">Choose brand</option>
                            {brands.map((b) => (
                                <option key={b} value={b}>
                                    {b}
                                </option>
                            ))}
                        </select>
                        <label className="active">Brand</label>
                    </div>

                    {/* Warehouse */}
                    <div className="input-field">
                        <select className="browser-default"
                            value={selectedWarehouse}
                            onChange={(e) => setSelectedWarehouse(e.target.value)}
                            disabled={!warehouses.length}
                        >
                            <option value="">Choose warehouse</option>
                            {warehouses.map((w) => (
                                <option key={w} value={w}>
                                    {w}
                                </option>
                            ))}
                        </select>
                        <label className="active">Warehouse</label>
                    </div>
                </div>

                <div className="modal-footer">
                    <button
                        className="btn waves-effect waves-light"
                        onClick={handleSave}
                    >
                        Save
                    </button>
                </div>
            </div>
        </div>
    );
};

export default StockUp;
