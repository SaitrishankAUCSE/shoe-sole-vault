export const metadata = { title: 'Shipping & Returns | SoleVault', description: 'Learn about SoleVault shipping rates, delivery times, and return policy.' };

export default function ShippingReturnsPage() {
    return (
        <>
            <div className="page-hero"><div className="container"><h1>Shipping & Returns</h1><p>Everything you need to know about getting your sneakers.</p></div></div>
            <div className="content-page"><div className="container"><div className="content-narrow">
                <h2>Shipping Information</h2>
                <p>We ship to all 50 US states and over 15 countries worldwide. All orders are processed within 1-2 business days.</p>
                <div style={{ overflowX: 'auto', margin: '24px 0' }}>
                    <table style={{ width: '100%', borderCollapse: 'collapse' }}>
                        <thead><tr style={{ background: 'var(--bg-alt)' }}>
                            <th style={{ padding: '12px 16px', textAlign: 'left', fontWeight: 600 }}>Method</th>
                            <th style={{ padding: '12px 16px', textAlign: 'left', fontWeight: 600 }}>Delivery Time</th>
                            <th style={{ padding: '12px 16px', textAlign: 'left', fontWeight: 600 }}>Cost</th>
                        </tr></thead>
                        <tbody>
                            <tr style={{ borderBottom: '1px solid var(--accent)' }}><td style={{ padding: '12px 16px' }}>Standard Shipping</td><td style={{ padding: '12px 16px' }}>5-7 business days</td><td style={{ padding: '12px 16px' }}>Free over $75 / $9.99</td></tr>
                            <tr style={{ borderBottom: '1px solid var(--accent)' }}><td style={{ padding: '12px 16px' }}>Express Shipping</td><td style={{ padding: '12px 16px' }}>2-3 business days</td><td style={{ padding: '12px 16px' }}>$14.99</td></tr>
                            <tr style={{ borderBottom: '1px solid var(--accent)' }}><td style={{ padding: '12px 16px' }}>International</td><td style={{ padding: '12px 16px' }}>7-14 business days</td><td style={{ padding: '12px 16px' }}>Calculated at checkout</td></tr>
                        </tbody>
                    </table>
                </div>
                <p>All orders include a tracking number sent via email once your order ships.</p>
                <h2>Return Policy</h2>
                <p>We want you to love your SoleVault sneakers. If you&apos;re not completely satisfied, we offer a hassle-free 30-day return policy.</p>
                <ul>
                    <li>Items must be in original, unworn condition with all tags attached</li>
                    <li>Returns must be initiated within 30 days of delivery</li>
                    <li>Free return shipping within the United States</li>
                    <li>Refunds are processed within 3-5 business days of receiving your return</li>
                    <li>Original shipping costs are non-refundable</li>
                </ul>
                <h2>Exchanges</h2>
                <p>Need a different size or color? We offer free exchanges on all orders. Simply initiate a return and place a new order, or contact our support team for assistance.</p>
                <h2>Damaged or Defective Items</h2>
                <p>If you receive a damaged or defective item, please contact us within 48 hours of delivery at <strong>support@solevault.com</strong>. Include photos of the damage and we&apos;ll send a replacement immediately at no extra cost.</p>
                <h2>How to Initiate a Return</h2>
                <ul>
                    <li>Email us at returns@solevault.com with your order number</li>
                    <li>We&apos;ll send you a prepaid return shipping label within 24 hours</li>
                    <li>Pack your items securely in original packaging</li>
                    <li>Drop off your package at any authorized shipping location</li>
                </ul>
            </div></div></div>
        </>
    );
}
