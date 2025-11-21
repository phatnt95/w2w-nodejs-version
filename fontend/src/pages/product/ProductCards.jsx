import React from "react";
import ProductCard from "./ProductCard";

const ProductCards = ({ products, onViewDetail, onTryOn }) => {
    return (
        <div className="row">
            {products.map((product) => (
                <div className="col s12 m6 l4" key={product._id}>
                    <ProductCard
                        product={product}
                        onViewDetail={onViewDetail}
                        onTryOn={onTryOn}
                    />
                </div>
            ))}
        </div>
    )
}

export default ProductCards;