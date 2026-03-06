'use client';
import { useState, useEffect } from 'react';
import { FiX, FiMail } from 'react-icons/fi';

export default function NewsletterPopup() {
    const [show, setShow] = useState(false);
    const [email, setEmail] = useState('');
    const [submitted, setSubmitted] = useState(false);

    useEffect(() => {
        const dismissed = localStorage.getItem('sv-popup-dismissed');
        if (!dismissed) {
            const timer = setTimeout(() => setShow(true), 5000);
            return () => clearTimeout(timer);
        }
    }, []);

    const handleClose = () => { setShow(false); localStorage.setItem('sv-popup-dismissed', Date.now()); };
    const handleSubmit = (e) => { e.preventDefault(); setSubmitted(true); setTimeout(handleClose, 2000); };

    if (!show) return null;
    return (
        <div className="popup-overlay" onClick={handleClose}>
            <div className="popup-content" onClick={e => e.stopPropagation()}>
                <button className="popup-close" onClick={handleClose}><FiX /></button>
                <div style={{ fontSize: '3rem', marginBottom: '16px' }}>👟</div>
                {!submitted ? (
                    <>
                        <h2>Get 15% Off Your First Order</h2>
                        <p>Join the SoleVault family and receive exclusive deals, early access to new drops, and style tips.</p>
                        <form onSubmit={handleSubmit} className="newsletter-form" style={{ maxWidth: '100%' }}>
                            <input type="email" placeholder="Enter your email" value={email} onChange={e => setEmail(e.target.value)} required style={{ border: '2px solid #e0e0e0', color: '#1a1a2e' }} />
                            <button className="btn btn-primary" type="submit">Subscribe</button>
                        </form>
                        <p style={{ fontSize: '0.75rem', color: '#999', marginTop: '12px' }}>Use code WELCOME15 at checkout</p>
                    </>
                ) : (
                    <>
                        <h2>Welcome to SoleVault! 🎉</h2>
                        <p>Check your inbox for your 15% discount code.</p>
                    </>
                )}
            </div>
        </div>
    );
}
