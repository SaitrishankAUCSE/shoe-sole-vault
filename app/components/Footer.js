import Link from 'next/link';
import { FiInstagram, FiTwitter, FiFacebook, FiYoutube } from 'react-icons/fi';

export default function Footer() {
    return (
        <footer className="footer">
            <div className="container">
                <div className="footer-grid">
                    <div className="footer-brand">
                        <Link href="/" className="logo" style={{ color: '#fff', fontSize: '1.8rem' }}>SOLE<span>VAULT</span></Link>
                        <p>Premium sneakers crafted for those who demand excellence in both performance and style. Every pair tells a story.</p>
                        <div className="footer-social">
                            <a href="#" aria-label="Instagram"><FiInstagram /></a>
                            <a href="#" aria-label="Twitter"><FiTwitter /></a>
                            <a href="#" aria-label="Facebook"><FiFacebook /></a>
                            <a href="#" aria-label="YouTube"><FiYoutube /></a>
                        </div>
                    </div>
                    <div>
                        <h4>Shop</h4>
                        <ul>
                            <li><Link href="/shop">All Shoes</Link></li>
                            <li><Link href="/collections/mens">Men&apos;s</Link></li>
                            <li><Link href="/collections/womens">Women&apos;s</Link></li>
                            <li><Link href="/collections/running">Running</Link></li>
                            <li><Link href="/collections/lifestyle">Lifestyle</Link></li>
                        </ul>
                    </div>
                    <div>
                        <h4>Customer Service</h4>
                        <ul>
                            <li><Link href="/contact">Contact Us</Link></li>
                            <li><Link href="/faq">FAQ</Link></li>
                            <li><Link href="/shipping-returns">Shipping & Returns</Link></li>
                            <li><Link href="/privacy-policy">Privacy Policy</Link></li>
                            <li><Link href="/terms-of-service">Terms of Service</Link></li>
                        </ul>
                    </div>
                    <div>
                        <h4>About SoleVault</h4>
                        <ul>
                            <li><Link href="/about">Our Story</Link></li>
                            <li><a href="#">Careers</a></li>
                            <li><a href="#">Press</a></li>
                            <li><a href="#">Sustainability</a></li>
                        </ul>
                    </div>
                </div>
                <div className="footer-bottom">
                    <p>© 2026 SoleVault. All rights reserved.</p>
                    <div className="payment-icons">
                        <span>💳</span><span>🏧</span><span>📱</span><span>🔒</span>
                    </div>
                </div>
            </div>
        </footer>
    );
}
