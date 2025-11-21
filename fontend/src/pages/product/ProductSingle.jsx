import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import api from "../../services/api.service.js"
import axios from "axios";

const ProductSingle = () => {
    const { id } = useParams(); // lấy productId từ URL
    const [product, setProduct] = useState(null);
    const [formData, setFormData] = useState(null);
    const [isEditing, setIsEditing] = useState(false);

    // Load product khi mount
    useEffect(() => {
        api.get(`/product/${id}`).then((res) => {
            console.log(res);
            setProduct(res.data);
            setFormData(res.data);
        });
    }, [id]);

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSave = () => {
        axios.put(`/api/products/${id}`, formData).then((res) => {
            setProduct(res.data);
            setIsEditing(false);
        });
    };

    if (!product) return <div className="container">Loading...</div>;

    return (
        <div className="container" style={{ marginTop: "30px" }}>
            <div className="card">
                <div className="card-content">
                    {!isEditing ? (
                        <>
                            <span className="card-title">{product.name}</span>
                            <div className="row">
                                <div className="col s6">
                                    {product.images?.[0] && (
                                        <img
                                            src={product.images[0].path}
                                            alt={product.images[0].alt}
                                            className="responsive-img"
                                        />
                                    )}
                                </div>
                                <div className="col s6">
                                    <p><strong>Description:</strong> {product.description}</p>
                                    <p><strong>Price:</strong> ${product.price}</p>
                                    <p><strong>Brand:</strong> {product.brand?.name || "-"}</p>
                                    <p><strong>Category:</strong> {product.category?.name || "-"}</p>
                                    <p><strong>Color:</strong> {product.color?.name || "-"}</p>
                                    <p><strong>Size:</strong> {product.size?.name || "-"}</p>
                                </div>
                            </div>
                            <div className="card-action">
                                <button className="btn blue" onClick={() => setIsEditing(true)}>
                                    Edit
                                </button>
                            </div>
                        </>
                    ) : (
                        <>
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
                                        name="description"
                                        value={formData.description}
                                        onChange={handleChange}
                                    />
                                    <label className="active">Description</label>
                                </div>
                                <div className="input-field col s6">
                                    <input
                                        type="number"
                                        name="price"
                                        value={formData.price}
                                        onChange={handleChange}
                                    />
                                    <label className="active">Price</label>
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
                                    onClick={() => setIsEditing(false)}
                                >
                                    Cancel
                                </button>
                            </div>
                        </>
                    )}
                </div>
            </div>
        </div>
    );
}

export default ProductSingle;
