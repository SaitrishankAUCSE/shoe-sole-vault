'use client';
import Link from 'next/link';
import { FiMinus, FiPlus, FiTrash2, FiArrowRight, FiTag } from 'react-icons/fi';
import { useCart } from '../context/CartContext';
import { products } from '../data/products';

export default function CartPage() {
    const { cartItems, removeFromCart, updateQuantity, subtotal, shipping, total, discountAmount, discountCode, setDiscountCode, applyDiscount, removeDiscount, appliedDiscount } = useCart();
    const upsells = products.filter(p => !cartItems.some(ci => ci.id === p.id)).slice(0, 2);

    if (cartItems.length === 0) return (
        <div className="empty-cart container">
            <div style={{ fontSize: '4rem', marginBottom: 16 }}>🛒</div>
            <h2>Your cart is empty</h2>
            <p>Looks like you haven&apos;t added any sneakers yet.</p>
            <Link href="/shop" className="btn btn-primary">Start Shopping</Link>
        </div>
    );

    return (
        <div className="cart-page">
            <div className="container">
                <h1 style={{ marginBottom: 32 }}>Shopping Cart</h1>
                <div className="cart-layout">
                    <div>
                        <div className="cart-items">
                            {cartItems.map((item, i) => (
                                <div key={i} className="cart-item">
                                    <Link href={`/product/${item.slug}`} className="cart-item-image"><img src={item.image} alt={item.title} /></Link>
                                    <div className="cart-item-details">
                                        <h3>{item.title}</h3>
                                        <p className="item-variant">{item.selectedSize} / {item.selectedColor}</p>
                                        <p className="item-price">${(item.price * item.quantity).toFixed(2)}</p>
                                    </div>
                                    <div className="cart-item-actions">
                                        <div className="quantity-selector">
                                            <button onClick={() => updateQuantity(item.id, item.selectedSize, item.selectedColor, item.quantity - 1)}><FiMinus /></button>
                                            <span className="qty">{item.quantity}</span>
                                            <button onClick={() => updateQuantity(item.id, item.selectedSize, item.selectedColor, item.quantity + 1)}><FiPlus /></button>
                                        </div>
                                        <button className="cart-item-remove" onClick={() => removeFromCart(item.id, item.selectedSize, item.selectedColor)}><FiTrash2 size={14} /> Remove</button>
                                    </div>
                                </div>
                            ))}
                        </div>

                        {upsells.length > 0 && (
                            <div className="upsell-section">
                                <h3>You Might Also Like</h3>
                                <div className="upsell-grid">
                                    {upsells.map(p => (
                                        <Link href={`/product/${p.slug}`} key={p.id} className="upsell-card">
                                            <div className="upsell-image"><img src={p.images[0]} alt={p.title} /></div>
                                            <div className="upsell-info"><h4>{p.title}</h4><p className="upsell-price">${p.price}</p></div>
                                        </Link>
                                    ))}
                                </div>
                            </div>
                        )}
                    </div>

                    <div className="order-summary">
                        <h3>Order Summary</h3>
                        <div className="summary-row"><span>Subtotal</span><span>${subtotal.toFixed(2)}</span></div>
                        <div className="summary-row"><span>Shipping</span><span>{shipping === 0 ? 'FREE' : `$${shipping.toFixed(2)}`}</span></div>
                        {discountAmount > 0 && <div className="summary-row" style={{ color: 'var(--success)' }}><span>Discount</span><span>-${discountAmount.toFixed(2)}</span></div>}

                        {appliedDiscount ? (
                            <div className="discount-applied">
                                <span><FiTag size={14} /> {appliedDiscount.code} - {appliedDiscount.description}</span>
                                <button onClick={removeDiscount}>Remove</button>
                            </div>
                        ) : (
                            <div className="discount-input">
                                <input placeholder="Discount code" value={discountCode} onChange={e => setDiscountCode(e.target.value)} />
                                <button className="btn btn-sm btn-secondary" onClick={() => applyDiscount(discountCode)}>Apply</button>
                            </div>
                        )}

                        <div className="summary-row total"><span>Total</span><span>${total.toFixed(2)}</span></div>
                        {shipping > 0 && subtotal < 75 && <p style={{ fontSize: '0.8rem', color: 'var(--text-lighter)', marginTop: 8 }}>Add ${(75 - subtotal).toFixed(2)} more for free shipping!</p>}
                        <Link href="/checkout" className="btn btn-primary btn-full btn-lg" style={{ marginTop: 20 }}>Proceed to Checkout <FiArrowRight /></Link>
                        <Link href="/shop" style={{ display: 'block', textAlign: 'center', marginTop: 12, fontSize: '0.85rem', color: 'var(--text-light)' }}>Continue Shopping</Link>
                    </div>
                </div>
            </div>
        </div>
    );
}
