'use client';
import { useState } from 'react';
import { useParams } from 'next/navigation';
import Link from 'next/link';
import { FiStar, FiTruck, FiRefreshCw, FiShield, FiMinus, FiPlus, FiShoppingBag } from 'react-icons/fi';
import { getProductBySlug, getRelatedProducts } from '../../data/products';
import { useCart } from '../../context/CartContext';
import ProductCard from '../../components/ProductCard';

export default function ProductPage() {
    const { slug } = useParams();
    const product = getProductBySlug(slug);
    const related = getRelatedProducts(slug, 4);
    const { addToCart } = useCart();
    const [selectedSize, setSelectedSize] = useState('');
    const [selectedColor, setSelectedColor] = useState('');
    const [quantity, setQuantity] = useState(1);
    const [activeTab, setActiveTab] = useState('description');

    if (!product) return <div className="container" style={{ padding: '80px 0', textAlign: 'center' }}><h2>Product Not Found</h2><Link href="/shop" className="btn btn-primary" style={{ marginTop: 16 }}>Shop All</Link></div>;

    const discount = Math.round(((product.comparePrice - product.price) / product.comparePrice) * 100);

    const handleAddToCart = () => {
        if (!selectedSize) { alert('Please select a size'); return; }
        if (!selectedColor) { alert('Please select a color'); return; }
        addToCart(product, selectedSize, selectedColor, quantity);
    };

    return (
        <div className="product-page">
            <div className="container">
                <div className="breadcrumb"><Link href="/">Home</Link> / <Link href="/shop">Shop</Link> / <span>{product.title}</span></div>
                <div className="product-layout">
                    <div className="product-gallery">
                        <div className="product-main-image"><img src={product.images[0]} alt={product.title} /></div>
                    </div>
                    <div className="product-info">
                        <p className="product-type-label">{product.productType}</p>
                        <h1>{product.title}</h1>
                        <div className="product-rating-summary">
                            <div className="stars">{[...Array(5)].map((_, i) => <FiStar key={i} size={16} fill={i < Math.round(product.averageRating) ? '#d4af37' : 'none'} />)}</div>
                            <span>{product.averageRating} ({product.reviewCount} reviews)</span>
                        </div>
                        <div className="product-pricing">
                            <span className="current-price">${product.price}</span>
                            <span className="original-price">${product.comparePrice}</span>
                            <span className="discount-badge">Save {discount}%</span>
                        </div>
                        <p className="product-description">{product.description}</p>
                        <div className="variant-selector">
                            <label>Size: {selectedSize}</label>
                            <div className="variant-options">{product.variants.sizes.map(s => (
                                <button key={s} className={`variant-option ${selectedSize === s ? 'selected' : ''}`} onClick={() => setSelectedSize(s)}>{s}</button>
                            ))}</div>
                        </div>
                        <div className="variant-selector">
                            <label>Color: {selectedColor}</label>
                            <div className="variant-options">{product.variants.colors.map(c => (
                                <button key={c} className={`variant-option ${selectedColor === c ? 'selected' : ''}`} onClick={() => setSelectedColor(c)}>{c}</button>
                            ))}</div>
                        </div>
                        <div className="quantity-selector">
                            <label>Quantity:</label>
                            <button onClick={() => setQuantity(Math.max(1, quantity - 1))}><FiMinus /></button>
                            <span className="qty">{quantity}</span>
                            <button onClick={() => setQuantity(quantity + 1)}><FiPlus /></button>
                        </div>
                        <div className="add-to-cart-section">
                            <button className="btn btn-primary btn-lg btn-full" onClick={handleAddToCart}><FiShoppingBag /> Add to Cart — ${(product.price * quantity).toFixed(2)}</button>
                        </div>
                        <div className="trust-badges-row">
                            <div className="trust-badge-item"><FiTruck /> Free Shipping</div>
                            <div className="trust-badge-item"><FiRefreshCw /> 30-Day Returns</div>
                            <div className="trust-badge-item"><FiShield /> Secure Checkout</div>
                        </div>
                        <div className="product-features"><h3>Features</h3><ul>{product.features.map((f, i) => <li key={i}>{f}</li>)}</ul></div>
                        <div className="shipping-info"><FiTruck /> {product.shipping}</div>
                    </div>
                </div>

                {/* Tabs */}
                <div className="tabs">
                    <div className="tab-buttons">
                        <button className={`tab-btn ${activeTab === 'description' ? 'active' : ''}`} onClick={() => setActiveTab('description')}>Description</button>
                        <button className={`tab-btn ${activeTab === 'shipping' ? 'active' : ''}`} onClick={() => setActiveTab('shipping')}>Shipping</button>
                        <button className={`tab-btn ${activeTab === 'reviews' ? 'active' : ''}`} onClick={() => setActiveTab('reviews')}>Reviews ({product.reviewCount})</button>
                    </div>
                    <div className="tab-content">
                        {activeTab === 'description' && <div><p style={{ color: 'var(--text-light)', lineHeight: 1.8 }}>{product.description}</p><ul className="product-features" style={{ marginTop: 16 }}>{product.features.map((f, i) => <li key={i}>{f}</li>)}</ul></div>}
                        {activeTab === 'shipping' && <div style={{ color: 'var(--text-light)', lineHeight: 1.8 }}><p><strong>Processing Time:</strong> 1-2 business days</p><p><strong>Standard Shipping:</strong> 5-7 business days (Free over $75)</p><p><strong>Express Shipping:</strong> 2-3 business days ($14.99)</p><p style={{ marginTop: 16 }}>All orders include tracking. International shipping available.</p></div>}
                        {activeTab === 'reviews' && <div className="reviews-section">{product.reviews.map((r, i) => (
                            <div key={i} className="review-card">
                                <div className="review-header"><span className="review-author">{r.author}</span><span className="review-date">{r.date}</span></div>
                                <div className="stars">{[...Array(r.rating)].map((_, j) => <FiStar key={j} size={14} fill="#d4af37" />)}</div>
                                <p className="review-text">{r.text}</p>
                            </div>
                        ))}</div>}
                    </div>
                </div>

                {/* Related Products */}
                <section className="section">
                    <div className="section-header"><h2>You May Also Like</h2></div>
                    <div className="product-grid">{related.map(p => <ProductCard key={p.id} product={p} />)}</div>
                </section>
            </div>

            {/* Sticky ATC Mobile */}
            <div className="sticky-atc">
                <div className="sticky-atc-inner">
                    <span className="sticky-atc-price">${product.price}</span>
                    <button className="btn btn-primary" onClick={handleAddToCart}><FiShoppingBag /> Add to Cart</button>
                </div>
            </div>
        </div>
    );
}
