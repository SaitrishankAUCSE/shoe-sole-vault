import './globals.css';
import { CartProvider } from './context/CartContext';
import Header from './components/Header';
import Footer from './components/Footer';
import AnnouncementBar from './components/AnnouncementBar';
import NewsletterPopup from './components/NewsletterPopup';
import Notification from './components/Notification';

export const metadata = {
  title: 'SoleVault | Premium Athletic & Lifestyle Sneakers',
  description: 'Discover premium sneakers crafted for performance and style. Shop running shoes, lifestyle sneakers, and luxury footwear with free shipping on orders over $75.',
  keywords: 'sneakers, shoes, running shoes, lifestyle sneakers, premium footwear, SoleVault',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <CartProvider>
          <AnnouncementBar />
          <Header />
          <main>{children}</main>
          <Footer />
          <NewsletterPopup />
          <Notification />
        </CartProvider>
      </body>
    </html>
  );
}
