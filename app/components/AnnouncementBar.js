'use client';
import { useState, useEffect } from 'react';
import { FiX } from 'react-icons/fi';

const messages = [
    '🚀 FREE SHIPPING on orders over $75 | Use code SOLE10 for 10% off',
    '🔥 New Arrivals Just Dropped — Shop the Latest Kicks',
    '⚡ Limited Time: Up to 25% off Best Sellers'
];

export default function AnnouncementBar() {
    const [visible, setVisible] = useState(true);
    const [index, setIndex] = useState(0);

    useEffect(() => {
        const timer = setInterval(() => setIndex(i => (i + 1) % messages.length), 4000);
        return () => clearInterval(timer);
    }, []);

    if (!visible) return null;
    return (
        <div className="announcement-bar">
            <span>{messages[index]}</span>
            <button className="close-btn" onClick={() => setVisible(false)} aria-label="Close"><FiX /></button>
        </div>
    );
}
