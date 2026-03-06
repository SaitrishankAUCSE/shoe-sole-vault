'use client';
import { useState } from 'react';
import { FiChevronDown, FiChevronUp } from 'react-icons/fi';

const faqs = [
    { category: 'Orders', q: 'How do I track my order?', a: 'Once your order ships, you\'ll receive an email with a tracking number. You can also check your order status in your account dashboard.' },
    { category: 'Orders', q: 'Can I modify my order after placing it?', a: 'We process orders quickly! Contact us within 1 hour of placing your order and we\'ll do our best to accommodate changes.' },
    { category: 'Orders', q: 'What payment methods do you accept?', a: 'We accept Visa, Mastercard, American Express, PayPal, Apple Pay, and Google Pay. All transactions are secured with 256-bit SSL encryption.' },
    { category: 'Shipping', q: 'How long does shipping take?', a: 'Standard shipping takes 5-7 business days. Express shipping takes 2-3 business days. All orders include tracking.' },
    { category: 'Shipping', q: 'Do you offer free shipping?', a: 'Yes! We offer free standard shipping on all orders over $75. Use code FREESHIP at checkout for free shipping on any order.' },
    { category: 'Shipping', q: 'Do you ship internationally?', a: 'Yes, we ship to over 15 countries worldwide. International shipping rates and delivery times vary by destination.' },
    { category: 'Returns', q: 'What is your return policy?', a: 'We offer a 30-day hassle-free return policy. Items must be in original condition with tags attached. Free return shipping within the US.' },
    { category: 'Returns', q: 'How do I start a return?', a: 'Email us at returns@solevault.com with your order number. We\'ll send you a prepaid return label within 24 hours.' },
    { category: 'Returns', q: 'How long do refunds take?', a: 'Refunds are processed within 3-5 business days of receiving your return. You\'ll receive an email confirmation once processed.' },
    { category: 'Products', q: 'How do I find my size?', a: 'Check our size guide on each product page. We recommend ordering your standard shoe size. If you\'re between sizes, we suggest going up half a size.' },
    { category: 'Products', q: 'Are your products authentic?', a: 'Absolutely. All SoleVault products are designed and manufactured by us using premium materials from trusted suppliers worldwide.' },
    { category: 'Products', q: 'Do you have a warranty?', a: 'Yes! All SoleVault shoes come with a 6-month warranty against manufacturing defects. Contact us if you experience any issues.' },
];

export default function FAQPage() {
    const [openIndex, setOpenIndex] = useState(null);
    const categories = [...new Set(faqs.map(f => f.category))];

    return (
        <>
            <div className="page-hero"><div className="container"><h1>Frequently Asked Questions</h1><p>Find answers to common questions about orders, shipping, and more.</p></div></div>
            <div className="content-page"><div className="container"><div className="content-narrow">
                {categories.map(cat => (
                    <div key={cat} style={{ marginBottom: 40 }}>
                        <h2 style={{ marginBottom: 16, fontSize: '1.3rem' }}>{cat}</h2>
                        {faqs.filter(f => f.category === cat).map((faq, i) => {
                            const idx = faqs.indexOf(faq);
                            return (
                                <div key={i} className="faq-item">
                                    <button className="faq-question" onClick={() => setOpenIndex(openIndex === idx ? null : idx)}>
                                        {faq.q} {openIndex === idx ? <FiChevronUp /> : <FiChevronDown />}
                                    </button>
                                    {openIndex === idx && <div className="faq-answer">{faq.a}</div>}
                                </div>
                            );
                        })}
                    </div>
                ))}
            </div></div></div>
        </>
    );
}
