import { Link } from "react-router-dom";
import Icon from "./Icon";

function ProductCard({ product }) {
  return (
    <article className="product-card">
      <Link to="/product">
        <span className="product-badge">
          <Icon name="spark" size={16} />
          In stock
        </span>
        <img src={product.image} alt={product.name} />
        <p>{product.category}</p>
        <h3>{product.name}</h3>
        <div className="product-card-footer">
          <strong>{product.price}</strong>
          <span className="quick-icon">
            <Icon name="cart" size={17} />
          </span>
        </div>
      </Link>
    </article>
  );
}

export default ProductCard;
