import { FiHeart, FiAward, FiGlobe } from 'react-icons/fi';

export const metadata = { title: 'About Us | SoleVault', description: 'Learn about SoleVault — our mission, our story, and why we create premium sneakers for those who demand excellence.' };

export default function AboutPage() {
    return (
        <>
            <div className="page-hero"><div className="container"><h1>Our Story</h1><p>Premium sneakers crafted with passion, purpose, and performance.</p></div></div>
            <div className="content-page">
                <div className="container">
                    <div className="about-story" style={{ marginBottom: 80 }}>
                        <div>
                            <h2>Born From a Simple Belief</h2>
                            <p style={{ color: 'var(--text-light)', lineHeight: 1.8, marginTop: 16 }}>SoleVault was founded in 2024 with a clear mission: create sneakers that refuse to compromise between performance and style. We believe your shoes should work as hard as you do — whether you&apos;re crushing a marathon PR, navigating city streets, or making a statement at the office.</p>
                            <p style={{ color: 'var(--text-light)', lineHeight: 1.8, marginTop: 16 }}>Every pair we design goes through hundreds of hours of testing, refinement, and real-world validation. We partner with world-class material suppliers, from Italian leather craftsmen to Japanese mesh innovators, to bring you footwear that exceeds expectations.</p>
                            <p style={{ color: 'var(--text-light)', lineHeight: 1.8, marginTop: 16 }}>Our team of designers, engineers, and sneaker enthusiasts shares one goal: to create shoes that move people — both literally and figuratively.</p>
                        </div>
                        <div style={{ background: 'var(--bg-alt)', borderRadius: 'var(--radius-lg)', padding: 40, textAlign: 'center' }}>
                            <img src="/images/products/aerostride.png" alt="SoleVault Sneaker" style={{ maxWidth: '80%', margin: '0 auto' }} />
                        </div>
                    </div>
                    <div className="section-header"><h2>Our Values</h2><p>What drives every decision we make</p></div>
                    <div className="values-grid">
                        <div className="value-card"><div className="value-icon">🎨</div><h3>Design Excellence</h3><p>Every curve, stitch, and material is chosen with intention. We obsess over details so you can enjoy the result.</p></div>
                        <div className="value-card"><div className="value-icon">🌍</div><h3>Sustainable Future</h3><p>We&apos;re committed to reducing our environmental footprint through responsible sourcing and eco-friendly packaging.</p></div>
                        <div className="value-card"><div className="value-icon">💪</div><h3>Performance First</h3><p>Our sneakers are tested by athletes and everyday adventurers to ensure they deliver when it matters most.</p></div>
                    </div>
                    <div style={{ textAlign: 'center', marginTop: 60, padding: '60px 0', background: 'var(--bg-alt)', borderRadius: 'var(--radius-lg)' }}>
                        <h2>SoleVault by the Numbers</h2>
                        <div style={{ display: 'flex', justifyContent: 'center', gap: 60, marginTop: 32, flexWrap: 'wrap' }}>
                            <div><h3 style={{ fontSize: '2.5rem', color: 'var(--secondary)' }}>10K+</h3><p style={{ color: 'var(--text-light)' }}>Happy Customers</p></div>
                            <div><h3 style={{ fontSize: '2.5rem', color: 'var(--secondary)' }}>6</h3><p style={{ color: 'var(--text-light)' }}>Premium Styles</p></div>
                            <div><h3 style={{ fontSize: '2.5rem', color: 'var(--secondary)' }}>4.8</h3><p style={{ color: 'var(--text-light)' }}>Average Rating</p></div>
                            <div><h3 style={{ fontSize: '2.5rem', color: 'var(--secondary)' }}>15+</h3><p style={{ color: 'var(--text-light)' }}>Countries Served</p></div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
