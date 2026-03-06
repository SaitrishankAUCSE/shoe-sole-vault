import Link from 'next/link';
import { FiStar } from 'react-icons/fi';

export default function ProductCard({ product }) {
    const discount = Math.round(((product.comparePrice - product.price) / product.comparePrice) * 100);
    return (
        <Link href={`/product/${product.slug}`} className="product-card">
            <div className="product-card-image">
                <div className="product-card-badges">
                    {product.tags.includes('new-arrival') && <span className="badge badge-new">New</span>}
                    {discount > 0 && <span className="badge badge-sale">-{discount}%</span>}
                </div>
                <img src={product.images[0]} alt={product.title} />
            </div>
            <div className="product-card-info">
                <p className="product-type">{product.productType}</p>
                <h3>{product.title}</h3>
                <div className="product-card-pricing">
                    <span className="price">${product.price}</span>
                    {product.comparePrice > product.price && <span className="compare-price">${product.comparePrice}</span>}
                    {discount > 0 && <span className="save">Save ${(product.comparePrice - product.price).toFixed(2)}</span>}
                </div>
                <div className="product-card-rating">
                    <div className="stars">{[...Array(5)].map((_, i) => <FiStar key={i} size={14} fill={i < Math.round(product.averageRating) ? '#d4af37' : 'none'} />)}</div>
                    <span>({product.reviewCount})</span>
                </div>
            </div>
        </Link>
    );
}
