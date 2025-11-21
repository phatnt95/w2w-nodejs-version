import React from "react";

const PreviewTryOn = ({ product }) => {
    if (!product) return <div>Chọn sản phẩm để thử</div>;
    const productImg = 'http://localhost:3002/' + product.images[0].path;
    return (
        <div className="preview-container">
            <h4>Try On Preview</h4>
            <img src={productImg} alt={product.name} style={{ width: "100%" }} />
        </div>
    );
};

export default PreviewTryOn;