import { FaEye, FaMagic } from "react-icons/fa";


const ProductCard = ({ product, onViewDetail, onTryOn }) => {
    const imgSrc = 'http://localhost:3002/' + product.images[0]?.path;
    return (
        <div className="card">
            <div className="card-image">
                <img src={imgSrc} alt={product.name} />
            </div>
            <div className="card-content">
                <span className="card-title">{product.name}</span>
            </div>
            <div className="card-action">
                <button className="btn-flat" onClick={() => onViewDetail(product)} title="View Detail">
                    <i className="material-icons">visibility</i>
                </button>
                <button className="btn-flat" onClick={() => onTryOn(product)} title="Try On">
                    {/* <i className="material-icons">visibility</i> */}
                    <i className="material-icons">touch_app</i>
                </button>
            </div>
        </div>
    );
}

export default ProductCard;