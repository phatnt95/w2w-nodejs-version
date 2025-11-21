import React, { useEffect } from "react";

const ProductDetailModal = ({ product }) => {
    useEffect(() => {
        const M = window.M;
        const elems = document.querySelectorAll(".modal");
        M.Modal.init(elems);
        if (product?.images?.length > 0) {
            product.images = product.images.map((img, idx) => (
                img.path = 'http://localhost:3002/' + img.path
            ));
            const elems = document.querySelectorAll(".carousel");
            M.Carousel.init(elems, {
                fullWidth: true,
                indicators: true,
            });
        }
    }, []);




    if (!product) return null;

    return (
        <div id="product-detail-modal" className="modal">
            <div className="modal-content">
                <div className="card">
                    <div className="card-content">
                        <div className="row">
                            {/* Cột trái: Thông tin sản phẩm */}
                            <div className="col s12 m6">
                                <span className="card-title">
                                    {product.name}{" "}
                                    <button
                                        className="btn-flat right"
                                        onClick={() => onEdit(product)}
                                    >
                                        <i className="material-icons">edit</i>
                                    </button>
                                </span>

                                <ul className="collection">
                                    <li className="collection-item"><b>Giá:</b> {product.price}₫</li>
                                    <li className="collection-item"><b>Mô tả:</b> {product.description}</li>
                                    {product.brand && (
                                        <li className="collection-item"><b>Brand:</b> {product.brand.name}</li>
                                    )}
                                    {product.category && (
                                        <li className="collection-item"><b>Category:</b> {product.category.name}</li>
                                    )}
                                    {product.color && (
                                        <li className="collection-item"><b>Màu sắc:</b> {product.color.name}</li>
                                    )}
                                    {product.size && (
                                        <li className="collection-item"><b>Kích thước:</b> {product.size.name}</li>
                                    )}
                                    {product.style && (
                                        <li className="collection-item"><b>Style:</b> {product.style.name}</li>
                                    )}
                                    {product.neckline && (
                                        <li className="collection-item"><b>Cổ áo:</b> {product.neckline.name}</li>
                                    )}
                                    {product.sleeveLength && (
                                        <li className="collection-item"><b>Tay áo:</b> {product.sleeveLength.name}</li>
                                    )}
                                    {product.shoulder && (
                                        <li className="collection-item"><b>Vai:</b> {product.shoulder.name}</li>
                                    )}
                                    {product.occasion && (
                                        <li className="collection-item"><b>Dịp:</b> {product.occasion.name}</li>
                                    )}
                                    {product.seasonCode && (
                                        <li className="collection-item"><b>Mùa:</b> {product.seasonCode.name}</li>
                                    )}
                                    {product.tag && (
                                        <li className="collection-item"><b>Tag:</b> {product.tag.name}</li>
                                    )}
                                    {product.type && (
                                        <li className="collection-item"><b>Loại:</b> {product.type.name}</li>
                                    )}
                                </ul>
                            </div>

                            {/* Cột phải: Slider hình ảnh */}
                            <div className="col s12 m6">
                                {product.images && product.images.length > 0 && (
                                    <div className="carousel carousel-slider center">
                                        {product.images.map((img, idx) => (

                                            <div key={idx} className="carousel-item">
                                                {img.path}
                                                <img
                                                    src={img.path}
                                                    alt={img.alt || `image-${idx}`}
                                                    style={{ width: "100%", height: "auto" }}
                                                />
                                            </div>
                                        ))}
                                    </div>
                                )}
                            </div>
                        </div>
                    </div>
                </div>
                <div className="modal-footer">
                    <a href="#!" className="modal-close btn-flat">
                        Đóng
                    </a>
                </div>
            </div>
        </div>
    );

};

export default ProductDetailModal;
