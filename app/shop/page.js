'use client';
import { useState } from 'react';
import { products, collections } from '../data/products';
import ProductCard from '../components/ProductCard';

export default function ShopPage() {
    const [filter, setFilter] = useState('all');
    const [sort, setSort] = useState('featured');

    let filtered = filter === 'all' ? products : products.filter(p => p.collections.includes(filter));
    if (sort === 'price-low') filtered = [...filtered].sort((a, b) => a.price - b.price);
    else if (sort === 'price-high') filtered = [...filtered].sort((a, b) => b.price - a.price);
    else if (sort === 'rating') filtered = [...filtered].sort((a, b) => b.averageRating - a.averageRating);

    const filterCollections = collections.filter(c => ['all', 'mens', 'womens', 'running', 'lifestyle'].includes(c.slug));

    return (
        <>
            <div className="page-hero"><div className="container"><h1>Shop All Sneakers</h1><p>Browse our complete collection of premium footwear</p></div></div>
            <div className="shop-page">
                <div className="container">
                    <div className="shop-layout">
                        <aside className="shop-sidebar">
                            <div className="filter-group">
                                <h4>Collections</h4>
                                {filterCollections.map(c => (
                                    <div key={c.slug} className={`filter-option ${filter === c.slug ? 'active' : ''}`} onClick={() => setFilter(c.slug)}>{c.title}</div>
                                ))}
                            </div>
                            <div className="filter-group">
                                <h4>Price Range</h4>
                                <div className="filter-option" onClick={() => { setFilter('all'); setSort('price-low'); }}>Under $100</div>
                                <div className="filter-option" onClick={() => { setFilter('all'); setSort('price-low'); }}>$100 - $150</div>
                                <div className="filter-option" onClick={() => { setFilter('all'); setSort('price-high'); }}>$150+</div>
                            </div>
                        </aside>
                        <div>
                            <div className="sort-bar">
                                <span>{filtered.length} product{filtered.length !== 1 ? 's' : ''}</span>
                                <select value={sort} onChange={e => setSort(e.target.value)}>
                                    <option value="featured">Featured</option>
                                    <option value="price-low">Price: Low to High</option>
                                    <option value="price-high">Price: High to Low</option>
                                    <option value="rating">Highest Rated</option>
                                </select>
                            </div>
                            <div className="product-grid">{filtered.map(p => <ProductCard key={p.id} product={p} />)}</div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
