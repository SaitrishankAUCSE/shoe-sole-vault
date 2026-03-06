'use client';
import { useState } from 'react';
import Link from 'next/link';
import { FiSearch, FiShoppingBag, FiMenu, FiX, FiChevronDown } from 'react-icons/fi';
import { useCart } from '../context/CartContext';
import SearchOverlay from './SearchOverlay';

export default function Header() {
    const { cartCount, setIsCartOpen } = useCart();
    const [mobileOpen, setMobileOpen] = useState(false);
    const [searchOpen, setSearchOpen] = useState(false);

    return (
        <>
            <header className="header">
                <div className="header-inner">
                    <Link href="/" className="logo">SOLE<span>VAULT</span></Link>
                    <nav className="nav">
                        <Link href="/">Home</Link>
                        <Link href="/shop">Shop All</Link>
                        <div className="nav-dropdown">
                            <a href="#" style={{ display: 'flex', alignItems: 'center', gap: '4px' }}>Collections <FiChevronDown size={14} /></a>
                            <div className="dropdown-menu">
                                <Link href="/collections/mens">Men&apos;s</Link>
                                <Link href="/collections/womens">Women&apos;s</Link>
                                <Link href="/collections/running">Running</Link>
                                <Link href="/collections/lifestyle">Lifestyle</Link>
                                <Link href="/collections/new-arrivals">New Arrivals</Link>
                                <Link href="/collections/best-sellers">Best Sellers</Link>
                            </div>
                        </div>
                        <Link href="/about">About</Link>
                        <Link href="/contact">Contact</Link>
                    </nav>
                    <div className="header-actions">
                        <button onClick={() => setSearchOpen(true)} aria-label="Search"><FiSearch /></button>
                        <Link href="/cart" style={{ position: 'relative', fontSize: '1.3rem', padding: '8px' }}>
                            <FiShoppingBag />
                            {cartCount > 0 && <span className="cart-count">{cartCount}</span>}
                        </Link>
                        <button className="mobile-toggle" onClick={() => setMobileOpen(true)} aria-label="Menu"><FiMenu /></button>
                    </div>
                </div>
            </header>
            <div className={`mobile-overlay ${mobileOpen ? 'visible' : ''}`} onClick={() => setMobileOpen(false)} />
            <nav className={`mobile-nav ${mobileOpen ? 'open' : ''}`}>
                <div className="mobile-nav-header">
                    <span className="logo">SOLE<span>VAULT</span></span>
                    <button className="mobile-nav-close" onClick={() => setMobileOpen(false)}><FiX /></button>
                </div>
                <Link href="/" onClick={() => setMobileOpen(false)}>Home</Link>
                <Link href="/shop" onClick={() => setMobileOpen(false)}>Shop All</Link>
                <Link href="/collections/mens" onClick={() => setMobileOpen(false)}>Men&apos;s</Link>
                <Link href="/collections/womens" onClick={() => setMobileOpen(false)}>Women&apos;s</Link>
                <Link href="/collections/running" onClick={() => setMobileOpen(false)}>Running</Link>
                <Link href="/collections/lifestyle" onClick={() => setMobileOpen(false)}>Lifestyle</Link>
                <Link href="/about" onClick={() => setMobileOpen(false)}>About</Link>
                <Link href="/contact" onClick={() => setMobileOpen(false)}>Contact</Link>
                <Link href="/faq" onClick={() => setMobileOpen(false)}>FAQ</Link>
                <Link href="/cart" onClick={() => setMobileOpen(false)}>Cart ({cartCount})</Link>
            </nav>
            {searchOpen && <SearchOverlay onClose={() => setSearchOpen(false)} />}
        </>
    );
}
