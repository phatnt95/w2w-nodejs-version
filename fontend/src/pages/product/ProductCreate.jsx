import React, { useState, useEffect } from "react";
import axios from 'axios';
import { useNavigate } from "react-router-dom";

const ProductCreate = () => {
    const navigate = useNavigate();
    const [images, setImages] = useState([]);
    const [previewUrls, setPreviewUrls] = useState([]);
    const [attributes, setAttributes] = useState({});
    const [formData, setFormData] = useState({
        name: "",
        description: "",
        price: "",
        brand: "",
        category: "",
        type: "",
        color: "",
        size: "",
        style: "",
        neckline: "",
        sleeveLength: "",
        shoulder: "",
        occasion: "",
        seasonCode: "",
        tags: ""
    });

    // Fetch all attributes from backend
    useEffect(() => {
        fetch("http://localhost:3000/attributes")
            .then((res) => res.json())
            .then((data) => {
                console.log(data);
                setAttributes(data)
            }).catch((err) => console.error(err));
    }, []);

    // Handle text input
    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    // Handle single select (brand, category, type)
    const handleSelect = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value === '' ? null : e.target.value
        });
    };

    // Handle multi-select (attributes)
    const handleMultiSelect = (e) => {
        const options = Array.from(e.target.selectedOptions, (opt) => opt.value);
        setFormData({
            ...formData,
            attributes: {
                ...formData.attributes,
                [e.target.name]: options.length === 0 ? null : options
            }
        });
    };




    const handleFileChange = (e) => {
        const files = Array.from(e.target.files);
        setImages(files);

        // tạo preview url
        const urls = files.map((file) => URL.createObjectURL(file));
        setPreviewUrls(urls);
    };
    // Submit product
    const handleSubmit = (e) => {
        e.preventDefault();
        const data = new FormData();
        images.forEach((file) => {
            data.append("images", file);
        });
        console.log(formData);
        console.log(data);
        axios.post(
            'http://localhost:3000/products',
            formData,
            {
                headers: {
                    Authorization: 'token'
                }
            }
        ).then(res => {
            console.log(res);
            navigate("/product/" + res.data_id);
        }).catch(err => {
            console.error(err);

        });

    }


    return (
        <div className="container">
            <h4>Create Product</h4>
            <form onSubmit={handleSubmit}>
                <div className="row">
                    <div className="col s6">
                        {/* Name */}
                        <div className="input-field">
                            <input type="text" name="name" value={formData.name} onChange={handleChange} required />
                            <label className="active">Product Name<span style={{ color: "red" }}> *</span></label>
                        </div>
                        {/* Brand */}
                        <div className="input-field">
                            <select name="brand" value={formData.brand} onChange={handleSelect} className="browser-default" required>
                                <option value="">Choose brand</option>
                                {attributes.brands && attributes.brands.map((b) => (
                                    <option key={b._id} value={b._id}>
                                        {b.name}
                                    </option>
                                ))}
                            </select>
                            <label className="active">Brand<span style={{ color: "red" }}> *</span></label>
                        </div>

                        {/* Category */}
                        <div className="input-field">
                            <label className="active">Category<span style={{ color: "red" }}> *</span></label>
                            <select name="category" value={formData.category} onChange={handleSelect} className="browser-default" >
                                <option value="">Choose category</option>
                                {attributes.categories && attributes.categories.map((c) => (
                                    <option key={c._id} value={c._id}>
                                        {c.name}
                                    </option>
                                ))}
                            </select>
                        </div>

                        {/* Type */}
                        <div className="input-field">
                            <label className="active">Type<span style={{ color: "red" }}> *</span></label>
                            <select
                                name="type"
                                value={formData.type}
                                onChange={handleSelect}
                                className="browser-default"
                            >
                                <option value="">Choose type</option>
                                {attributes.types &&
                                    attributes.types.map((t) => (
                                        <option key={t._id} value={t._id}>
                                            {t.name}
                                        </option>
                                    ))}
                            </select>
                        </div>

                        {/* Color */}
                        <div className="input-field">
                            <select
                                name="color"
                                value={formData.color}
                                onChange={handleSelect}
                                className="browser-default"
                            >
                                <option value="">Choose color</option>
                                {attributes.colors &&
                                    attributes.colors.map((c) => (
                                        <option key={c._id} value={c._id}>
                                            {c.name}
                                        </option>
                                    ))}
                            </select>
                            <label className="active">Color<span style={{ color: "red" }}> *</span></label>
                        </div>

                        {/* Size */}
                        <div className="input-field">
                            <select
                                name="size"
                                value={formData.size}
                                onChange={handleSelect}
                                className="browser-default"
                            >
                                <option value="">Choose size</option>
                                {attributes.sizes &&
                                    attributes.sizes.map((s) => (
                                        <option key={s._id} value={s._id}>
                                            {s.name}
                                        </option>
                                    ))}
                            </select>
                            <label className="active">Size<span style={{ color: "red" }}> *</span></label>
                        </div>

                        {/* Style */}
                        <div className="input-field">
                            <select
                                name="style"
                                value={formData.style}
                                onChange={handleSelect}
                                className="browser-default"
                            >
                                <option value="">Choose style</option>
                                {attributes.styles &&
                                    attributes.styles.map((st) => (
                                        <option key={st._id} value={st._id}>
                                            {st.name}
                                        </option>
                                    ))}
                            </select>
                            <label className="active">Style<span style={{ color: "red" }}> *</span></label>
                        </div>
                    </div>
                    <div className="col s6">
                        {/* Price */}
                        <div className="input-field">
                            <input type="number" name="price" value={formData.price} onChange={handleChange} required />
                            <label className="active">Price<span style={{ color: "red" }}> *</span></label>
                        </div>
                        {/* Neckline */}
                        <div className="input-field">
                            <select
                                name="neckline"
                                value={formData.neckline}
                                onChange={handleSelect}
                                className="browser-default"
                            >
                                <option value="">Choose neckline</option>
                                {attributes.necklines &&
                                    attributes.necklines.map((n) => (
                                        <option key={n._id} value={n._id}>
                                            {n.name}
                                        </option>
                                    ))}
                            </select>
                            <label className="active">Neckline<span style={{ color: "red" }}> *</span></label>
                        </div>

                        {/* Sleeve Length */}
                        <div className="input-field">
                            <select
                                name="sleeveLength"
                                value={formData.sleeveLength}
                                onChange={handleSelect}
                                className="browser-default"
                            >
                                <option value="">Choose sleeve length</option>
                                {attributes.sleeveLengths &&
                                    attributes.sleeveLengths.map((sl) => (
                                        <option key={sl._id} value={sl._id}>
                                            {sl.name}
                                        </option>
                                    ))}
                            </select>
                            <label className="active">Sleeve Length<span style={{ color: "red" }}> *</span></label>
                        </div>

                        {/* Shoulder */}
                        <div className="input-field">
                            <select
                                name="shoulder"
                                value={formData.shoulder}
                                onChange={handleSelect}
                                className="browser-default"
                            >
                                <option value="">Choose shoulder</option>
                                {attributes.shoulders &&
                                    attributes.shoulders.map((sh) => (
                                        <option key={sh._id} value={sh._id}>
                                            {sh.name}
                                        </option>
                                    ))}
                            </select>
                            <label className="active">Shoulder<span style={{ color: "red" }}> *</span></label>
                        </div>

                        {/* Occasion */}
                        <div className="input-field">
                            <select
                                name="occasion"
                                value={formData.occasion}
                                onChange={handleSelect}
                                className="browser-default"
                            >
                                <option value="">Choose occasion</option>
                                {attributes.occasions &&
                                    attributes.occasions.map((o) => (
                                        <option key={o._id} value={o._id}>
                                            {o.name}
                                        </option>
                                    ))}
                            </select>
                            <label className="active">Occasion<span style={{ color: "red" }}> *</span></label>
                        </div>

                        {/* Season Code */}
                        <div className="input-field">
                            <select
                                name="seasonCode"
                                value={formData.seasonCode}
                                onChange={handleSelect}
                                className="browser-default"
                            >
                                <option value="">Choose season code</option>
                                {attributes.seasonCodes &&
                                    attributes.seasonCodes.map((sc) => (
                                        <option key={sc._id} value={sc._id}>
                                            {sc.name}
                                        </option>
                                    ))}
                            </select>
                            <label className="active">Season Code<span style={{ color: "red" }}> *</span></label>
                        </div>

                        {/* Tags */}
                        <div className="input-field">
                            <select
                                name="tags"
                                value={formData.tags}
                                onChange={handleSelect}
                                className="browser-default"
                            >
                                <option value="">Choose tag</option>
                                {attributes.tags &&
                                    attributes.tags.map((t) => (
                                        <option key={t._id} value={t._id}>
                                            {t.name}
                                        </option>
                                    ))}
                            </select>
                            <label className="active">Tag<span style={{ color: "red" }}> *</span></label>
                        </div>
                    </div>

                    <div className="col s12">
                        {/* Description */}
                        <div className="input-field">
                            <textarea className="materialize-textarea" name="description" value={formData.description} onChange={handleChange} ></textarea>
                            <label className="active">Description</label>
                        </div>
                        {/* Upload Images */}
                        <div className="file-field input-field">
                            <div className="btn">
                                <span>Upload Images</span>
                                <input type="file" multiple onChange={handleFileChange} />
                            </div>
                            <div className="file-path-wrapper">
                                <input className="file-path validate" type="text" />
                            </div>
                        </div>

                        {/* Preview */}
                        <div className="row">
                            {previewUrls.map((url, idx) => (
                                <div className="col s4" key={idx}>
                                    <img src={url} alt="preview" style={{ width: "100%", marginTop: "10px" }} />
                                </div>
                            ))}
                        </div>
                    </div>

                </div>




                {/* Multi-select for attributes
                {[
                    "color",
                    "size",
                    "style",
                    "neckline",
                    "sleeveLengths",
                    "shoulders",
                    "occasions",
                    "seasonCodes",
                    "tags"
                ].map((attr) => (
                    <div className="input-field" key={attr}>
                        <label className="active">{attr}</label>
                        <select name={attr} value={formData[attr] || []} onChange={handleMultiSelect} className="browser-default">
                            <option >-- Choose {attr} --</option>
                            {attributes[attr + "s"] && attributes[attr + "s"].map((a) => (
                                <option key={a._id} value={a._id}>
                                    {a.name}
                                </option>
                            ))}
                        </select>
                    </div>
                ))} */}

                {/* Submit */}
                <button type="submit" className="btn waves-effect waves-light">
                    Save Product
                </button>
            </form>
        </div>
    );
};

export default ProductCreate;
