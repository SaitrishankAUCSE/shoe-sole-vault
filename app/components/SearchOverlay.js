'use client';
import { useState } from 'react';
import Link from 'next/link';
import { FiSearch, FiX } from 'react-icons/fi';
import { products } from '../data/products';

export default function SearchOverlay({ onClose }) {
    const [query, setQuery] = useState('');
    const results = query.length > 1 ? products.filter(p => p.title.toLowerCase().includes(query.toLowerCase()) || p.tags.some(t => t.includes(query.toLowerCase()))) : [];

    return (
        <div className="search-overlay">
            <button className="search-close" onClick={onClose}><FiX /></button>
            <input type="text" placeholder="Search for sneakers..." value={query} onChange={e => setQuery(e.target.value)} autoFocus />
            <div className="search-results">
                {results.map(p => (
                    <Link href={`/product/${p.slug}`} key={p.id} className="search-result-item" onClick={onClose}>
                        <div className="search-result-img"><img src={p.images[0]} alt={p.title} /></div>
                        <div>
                            <div style={{ fontWeight: 600, marginBottom: 2 }}>{p.title}</div>
                            <div style={{ fontSize: '0.85rem', color: '#666' }}>${p.price}</div>
                        </div>
                    </Link>
                ))}
                {query.length > 1 && results.length === 0 && <p style={{ padding: 20, color: '#999' }}>No results found for &quot;{query}&quot;</p>}
            </div>
        </div>
    );
}
