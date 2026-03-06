'use client';
import Link from 'next/link';
import { FiStar, FiTruck, FiRefreshCw, FiShield, FiHeadphones } from 'react-icons/fi';
import { products, collections, testimonials } from './data/products';
import ProductCard from './components/ProductCard';

export default function HomePage() {
  const bestSellers = products.filter(p => p.collections.includes('best-sellers'));
  const featuredCollections = collections.filter(c => ['mens', 'womens', 'running', 'lifestyle'].includes(c.slug));

  return (
    <>
      {/* Hero Section */}
      <section className="hero">
        <div className="hero-glow"></div>
        <div className="hero-content">
          <div className="hero-text">
            <div className="hero-badge-wrapper">
              <span className="hero-badge">✨ New Season Collection</span>
            </div>
            <h1>Elevate Your<br />Everyday <span>Stride</span></h1>
            <p>Discover premium sneakers engineered for peak performance and uncompromising style. Your next adventure starts from the ground up.</p>
            <div className="hero-buttons">
              <Link href="/shop" className="btn btn-primary btn-lg">Explore Collection</Link>
              <Link href="/collections/new-arrivals" className="btn btn-outline-light btn-lg">View Lookbook</Link>
            </div>
            <div className="hero-stats">
              <div className="hero-stat"><h3>10K+</h3><p>Customers</p></div>
              <div className="hero-stat"><h3>4.8/5</h3><p>Average Rating</p></div>
              <div className="hero-stat"><h3>Free</h3><p>Global Shipping</p></div>
            </div>
          </div>
          <div className="hero-visual">
            <div className="hero-visual-bg"></div>
            <div className="hero-card">
              <div className="hero-card-img">
                <img src="/images/products/aerostride.png" alt="Featured Sneaker" />
              </div>
              <div className="hero-card-info">
                <div>
                  <div className="hero-card-title">AeroStride Runner</div>
                  <div className="hero-card-subtitle">Performance Series</div>
                </div>
                <div className="hero-card-price">$129.99</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* USP Section */}
      <section className="section" style={{ background: 'var(--bg-alt)' }}>
        <div className="container">
          <div className="usp-grid">
            <div className="usp-card">
              <div className="usp-icon"><FiTruck /></div>
              <h3>Free Shipping</h3>
              <p>On all orders over $75. Fast and reliable delivery to your door.</p>
            </div>
            <div className="usp-card">
              <div className="usp-icon"><FiRefreshCw /></div>
              <h3>30-Day Returns</h3>
              <p>Not the right fit? Return hassle-free within 30 days.</p>
            </div>
            <div className="usp-card">
              <div className="usp-icon"><FiShield /></div>
              <h3>Secure Checkout</h3>
              <p>Your payment and data protected with 256-bit encryption.</p>
            </div>
            <div className="usp-card">
              <div className="usp-icon"><FiHeadphones /></div>
              <h3>24/7 Support</h3>
              <p>Need help? Our team is here around the clock for you.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Collections */}
      <section className="section">
        <div className="container">
          <div className="section-header">
            <h2>Shop by Collection</h2>
            <p>Find the perfect pair for every occasion</p>
          </div>
          <div className="collections-grid">
            {featuredCollections.map(col => (
              <Link href={`/collections/${col.slug}`} key={col.slug} className="collection-card">
                <img src={col.image} alt={col.title} />
                <div className="collection-card-overlay">
                  <h3>{col.title}</h3>
                  <p>{col.description}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Best Sellers */}
      <section className="section" style={{ background: 'var(--bg-alt)' }}>
        <div className="container">
          <div className="section-header">
            <h2>Best Sellers</h2>
            <p>Our most popular sneakers loved by thousands</p>
          </div>
          <div className="product-grid">
            {bestSellers.map(product => <ProductCard key={product.id} product={product} />)}
          </div>
          <div style={{ textAlign: 'center', marginTop: 40 }}>
            <Link href="/shop" className="btn btn-outline">View All Products</Link>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="section">
        <div className="container">
          <div className="section-header">
            <h2>What Our Customers Say</h2>
            <p>Real reviews from real sneakerheads</p>
          </div>
          <div className="testimonials-grid">
            {testimonials.map((t, i) => (
              <div key={i} className="testimonial-card">
                <div className="testimonial-avatar">{t.avatar}</div>
                <div className="stars">{[...Array(t.rating)].map((_, j) => <FiStar key={j} size={16} fill="#d4af37" />)}</div>
                <p>&ldquo;{t.text}&rdquo;</p>
                <div className="author">{t.name}</div>
                <div className="location">{t.location}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <section className="newsletter">
        <div className="container">
          <h2>Join the SoleVault Community</h2>
          <p>Subscribe for exclusive deals, early access, and style inspiration.</p>
          <form className="newsletter-form" onSubmit={e => e.preventDefault()}>
            <input type="email" placeholder="Enter your email address" />
            <button className="btn btn-primary" type="submit">Subscribe</button>
          </form>
        </div>
      </section>
    </>
  );
}
