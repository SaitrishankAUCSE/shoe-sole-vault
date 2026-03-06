'use client';
import { useState } from 'react';
import { FiMail, FiPhone, FiMapPin, FiClock } from 'react-icons/fi';

export default function ContactPage() {
    const [submitted, setSubmitted] = useState(false);
    if (submitted) return (
        <div className="content-page"><div className="container" style={{ textAlign: 'center', padding: '80px 0' }}>
            <div style={{ fontSize: '3rem', marginBottom: 16 }}>✅</div>
            <h2>Message Sent!</h2><p style={{ color: 'var(--text-light)', marginTop: 12 }}>We&apos;ll get back to you within 24 hours.</p>
        </div></div>
    );
    return (
        <>
            <div className="page-hero"><div className="container"><h1>Contact Us</h1><p>We&apos;d love to hear from you. Get in touch with our team.</p></div></div>
            <div className="content-page"><div className="container">
                <div className="contact-layout">
                    <div>
                        <h2 style={{ marginBottom: 24 }}>Send Us a Message</h2>
                        <form onSubmit={e => { e.preventDefault(); setSubmitted(true); }}>
                            <div className="form-row">
                                <div className="form-group"><label>Name</label><input required placeholder="Your name" /></div>
                                <div className="form-group"><label>Email</label><input type="email" required placeholder="your@email.com" /></div>
                            </div>
                            <div className="form-group"><label>Subject</label><select><option>General Inquiry</option><option>Order Issue</option><option>Returns</option><option>Product Question</option><option>Other</option></select></div>
                            <div className="form-group"><label>Message</label><textarea rows="5" required placeholder="How can we help?" style={{ resize: 'vertical' }} /></div>
                            <button className="btn btn-primary btn-lg" type="submit">Send Message</button>
                        </form>
                    </div>
                    <div>
                        <h2 style={{ marginBottom: 24 }}>Get in Touch</h2>
                        <div className="contact-info-card"><div className="contact-icon"><FiMail /></div><div><strong>Email</strong><p style={{ fontSize: '0.9rem', color: 'var(--text-light)' }}>support@solevault.com</p></div></div>
                        <div className="contact-info-card"><div className="contact-icon"><FiPhone /></div><div><strong>Phone</strong><p style={{ fontSize: '0.9rem', color: 'var(--text-light)' }}>1-800-SOLE-VAULT</p></div></div>
                        <div className="contact-info-card"><div className="contact-icon"><FiMapPin /></div><div><strong>Address</strong><p style={{ fontSize: '0.9rem', color: 'var(--text-light)' }}>123 Sneaker Lane, New York, NY 10001</p></div></div>
                        <div className="contact-info-card"><div className="contact-icon"><FiClock /></div><div><strong>Hours</strong><p style={{ fontSize: '0.9rem', color: 'var(--text-light)' }}>Mon-Fri 9am-6pm EST | 24/7 Live Chat</p></div></div>
                    </div>
                </div>
            </div></div>
        </>
    );
}
