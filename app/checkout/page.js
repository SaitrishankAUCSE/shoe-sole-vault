'use client';
import { useState } from 'react';
import Link from 'next/link';
import { useCart } from '../context/CartContext';
import { FiCheck } from 'react-icons/fi';

export default function CheckoutPage() {
    const { cartItems, subtotal, shipping, total, discountAmount, appliedDiscount, clearCart } = useCart();
    const [step, setStep] = useState(1);
    const [orderPlaced, setOrderPlaced] = useState(false);
    const [form, setForm] = useState({ firstName: '', lastName: '', email: '', phone: '', address: '', city: '', state: '', zip: '', country: 'US', shippingMethod: 'standard' });

    const update = (k, v) => setForm({ ...form, [k]: v });

    if (orderPlaced) return (
        <div className="container" style={{ padding: '80px 0', textAlign: 'center' }}>
            <div style={{ width: 80, height: 80, borderRadius: '50%', background: 'var(--success)', color: '#fff', display: 'inline-flex', alignItems: 'center', justifyContent: 'center', fontSize: '2rem', marginBottom: 24 }}><FiCheck /></div>
            <h1>Order Confirmed!</h1>
            <p style={{ color: 'var(--text-light)', marginTop: 12, marginBottom: 32, fontSize: '1.1rem' }}>Thank you for your purchase. Your order #SV-{Math.floor(Math.random() * 90000 + 10000)} has been placed.</p>
            <p style={{ color: 'var(--text-lighter)', marginBottom: 32 }}>You&apos;ll receive a confirmation email with tracking details shortly.</p>
            <Link href="/shop" className="btn btn-primary">Continue Shopping</Link>
        </div>
    );

    if (cartItems.length === 0) return (
        <div className="container" style={{ padding: '80px 0', textAlign: 'center' }}>
            <h2>Your cart is empty</h2>
            <Link href="/shop" className="btn btn-primary" style={{ marginTop: 16 }}>Start Shopping</Link>
        </div>
    );

    return (
        <div className="checkout-page">
            <div className="container">
                <h1 style={{ marginBottom: 16 }}>Checkout</h1>
                <div className="step-indicator">
                    <div className={`step ${step >= 1 ? 'active' : ''} ${step > 1 ? 'completed' : ''}`}><span className="step-number">1</span>Shipping</div>
                    <div className="step-divider" />
                    <div className={`step ${step >= 2 ? 'active' : ''} ${step > 2 ? 'completed' : ''}`}><span className="step-number">2</span>Payment</div>
                    <div className="step-divider" />
                    <div className={`step ${step >= 3 ? 'active' : ''}`}><span className="step-number">3</span>Confirm</div>
                </div>
                <div className="checkout-layout">
                    <div>
                        {step === 1 && (
                            <>
                                <h2 style={{ marginBottom: 24 }}>Shipping Information</h2>
                                <div className="form-row">
                                    <div className="form-group"><label>First Name</label><input value={form.firstName} onChange={e => update('firstName', e.target.value)} placeholder="John" /></div>
                                    <div className="form-group"><label>Last Name</label><input value={form.lastName} onChange={e => update('lastName', e.target.value)} placeholder="Doe" /></div>
                                </div>
                                <div className="form-row">
                                    <div className="form-group"><label>Email</label><input type="email" value={form.email} onChange={e => update('email', e.target.value)} placeholder="john@example.com" /></div>
                                    <div className="form-group"><label>Phone</label><input type="tel" value={form.phone} onChange={e => update('phone', e.target.value)} placeholder="(555) 000-0000" /></div>
                                </div>
                                <div className="form-group"><label>Address</label><input value={form.address} onChange={e => update('address', e.target.value)} placeholder="123 Main St" /></div>
                                <div className="form-row">
                                    <div className="form-group"><label>City</label><input value={form.city} onChange={e => update('city', e.target.value)} placeholder="New York" /></div>
                                    <div className="form-group"><label>State</label><input value={form.state} onChange={e => update('state', e.target.value)} placeholder="NY" /></div>
                                </div>
                                <div className="form-row">
                                    <div className="form-group"><label>ZIP Code</label><input value={form.zip} onChange={e => update('zip', e.target.value)} placeholder="10001" /></div>
                                    <div className="form-group"><label>Country</label><select value={form.country} onChange={e => update('country', e.target.value)}><option value="US">United States</option><option value="CA">Canada</option><option value="GB">United Kingdom</option></select></div>
                                </div>
                                <h3 style={{ margin: '24px 0 16px' }}>Shipping Method</h3>
                                <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
                                    <label style={{ display: 'flex', alignItems: 'center', gap: 12, padding: '16px', border: `2px solid ${form.shippingMethod === 'standard' ? 'var(--primary)' : 'var(--accent-dark)'}`, borderRadius: 'var(--radius-sm)', cursor: 'pointer' }}>
                                        <input type="radio" name="shipping" checked={form.shippingMethod === 'standard'} onChange={() => update('shippingMethod', 'standard')} />
                                        <div style={{ flex: 1 }}><strong>Standard Shipping</strong><br /><span style={{ fontSize: '0.85rem', color: 'var(--text-light)' }}>5-7 business days</span></div>
                                        <span style={{ fontWeight: 700 }}>{subtotal > 75 ? 'FREE' : '$9.99'}</span>
                                    </label>
                                    <label style={{ display: 'flex', alignItems: 'center', gap: 12, padding: '16px', border: `2px solid ${form.shippingMethod === 'express' ? 'var(--primary)' : 'var(--accent-dark)'}`, borderRadius: 'var(--radius-sm)', cursor: 'pointer' }}>
                                        <input type="radio" name="shipping" checked={form.shippingMethod === 'express'} onChange={() => update('shippingMethod', 'express')} />
                                        <div style={{ flex: 1 }}><strong>Express Shipping</strong><br /><span style={{ fontSize: '0.85rem', color: 'var(--text-light)' }}>2-3 business days</span></div>
                                        <span style={{ fontWeight: 700 }}>$14.99</span>
                                    </label>
                                </div>
                                <button className="btn btn-primary btn-lg btn-full" style={{ marginTop: 32 }} onClick={() => setStep(2)}>Continue to Payment</button>
                            </>
                        )}
                        {step === 2 && (
                            <>
                                <h2 style={{ marginBottom: 24 }}>Payment Information</h2>
                                <div style={{ padding: 24, background: 'var(--bg-alt)', borderRadius: 'var(--radius-md)', marginBottom: 24 }}>
                                    <p style={{ color: 'var(--text-light)', fontSize: '0.9rem' }}>🔒 <strong>Test Mode</strong> — No real payment will be processed. This is a development store demo.</p>
                                </div>
                                <div className="form-group"><label>Card Number</label><input placeholder="4242 4242 4242 4242" /></div>
                                <div className="form-row">
                                    <div className="form-group"><label>Expiry Date</label><input placeholder="MM/YY" /></div>
                                    <div className="form-group"><label>CVV</label><input placeholder="123" /></div>
                                </div>
                                <div className="form-group"><label>Name on Card</label><input placeholder="John Doe" /></div>
                                <div style={{ display: 'flex', gap: 12, marginTop: 24 }}>
                                    <button className="btn btn-outline" onClick={() => setStep(1)}>Back</button>
                                    <button className="btn btn-primary btn-lg" style={{ flex: 1 }} onClick={() => setStep(3)}>Review Order</button>
                                </div>
                            </>
                        )}
                        {step === 3 && (
                            <>
                                <h2 style={{ marginBottom: 24 }}>Review Your Order</h2>
                                {cartItems.map((item, i) => (
                                    <div key={i} style={{ display: 'flex', gap: 16, padding: '16px 0', borderBottom: '1px solid var(--accent)' }}>
                                        <div style={{ width: 60, height: 60, background: 'var(--bg-alt)', borderRadius: 8, display: 'flex', alignItems: 'center', justifyContent: 'center', overflow: 'hidden', padding: 4 }}><img src={item.image} alt={item.title} style={{ maxHeight: '100%', objectFit: 'contain' }} /></div>
                                        <div style={{ flex: 1 }}><div style={{ fontWeight: 600 }}>{item.title}</div><div style={{ fontSize: '0.8rem', color: 'var(--text-lighter)' }}>{item.selectedSize} / {item.selectedColor} × {item.quantity}</div></div>
                                        <div style={{ fontWeight: 700 }}>${(item.price * item.quantity).toFixed(2)}</div>
                                    </div>
                                ))}
                                <div style={{ display: 'flex', gap: 12, marginTop: 32 }}>
                                    <button className="btn btn-outline" onClick={() => setStep(2)}>Back</button>
                                    <button className="btn btn-primary btn-lg" style={{ flex: 1 }} onClick={() => { setOrderPlaced(true); clearCart(); }}>Place Order — ${total.toFixed(2)}</button>
                                </div>
                            </>
                        )}
                    </div>
                    <div className="order-summary">
                        <h3>Order Summary</h3>
                        {cartItems.map((item, i) => (
                            <div key={i} style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 8, fontSize: '0.85rem' }}>
                                <span>{item.title} × {item.quantity}</span><span>${(item.price * item.quantity).toFixed(2)}</span>
                            </div>
                        ))}
                        <div className="summary-row" style={{ marginTop: 16 }}><span>Subtotal</span><span>${subtotal.toFixed(2)}</span></div>
                        <div className="summary-row"><span>Shipping</span><span>{shipping === 0 ? 'FREE' : `$${shipping.toFixed(2)}`}</span></div>
                        {discountAmount > 0 && <div className="summary-row" style={{ color: 'var(--success)' }}><span>Discount</span><span>-${discountAmount.toFixed(2)}</span></div>}
                        <div className="summary-row total"><span>Total</span><span>${total.toFixed(2)}</span></div>
                    </div>
                </div>
            </div>
        </div>
    );
}
