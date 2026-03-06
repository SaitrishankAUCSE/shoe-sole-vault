'use client';
import { createContext, useContext, useState, useEffect } from 'react';
import { discountCodes } from '../data/products';

const CartContext = createContext();

export function CartProvider({ children }) {
    const [cartItems, setCartItems] = useState([]);
    const [isCartOpen, setIsCartOpen] = useState(false);
    const [discountCode, setDiscountCode] = useState('');
    const [appliedDiscount, setAppliedDiscount] = useState(null);
    const [notification, setNotification] = useState(null);

    useEffect(() => {
        const saved = localStorage.getItem('solevault-cart');
        if (saved) setCartItems(JSON.parse(saved));
    }, []);

    useEffect(() => {
        localStorage.setItem('solevault-cart', JSON.stringify(cartItems));
    }, [cartItems]);

    const showNotification = (message) => {
        setNotification(message);
        setTimeout(() => setNotification(null), 3000);
    };

    const addToCart = (product, selectedSize, selectedColor, quantity = 1) => {
        setCartItems(prev => {
            const existingIndex = prev.findIndex(
                item => item.id === product.id && item.selectedSize === selectedSize && item.selectedColor === selectedColor
            );
            if (existingIndex > -1) {
                const updated = [...prev];
                updated[existingIndex].quantity += quantity;
                return updated;
            }
            return [...prev, { id: product.id, title: product.title, price: product.price, comparePrice: product.comparePrice, image: product.images[0], selectedSize, selectedColor, quantity, slug: product.slug }];
        });
        showNotification(`${product.title} added to cart!`);
    };

    const removeFromCart = (id, size, color) => {
        setCartItems(prev => prev.filter(item => !(item.id === id && item.selectedSize === size && item.selectedColor === color)));
    };

    const updateQuantity = (id, size, color, newQuantity) => {
        if (newQuantity < 1) return removeFromCart(id, size, color);
        setCartItems(prev => prev.map(item =>
            item.id === id && item.selectedSize === size && item.selectedColor === color ? { ...item, quantity: newQuantity } : item
        ));
    };

    const cartCount = cartItems.reduce((sum, item) => sum + item.quantity, 0);
    const subtotal = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);

    const applyDiscount = (code) => {
        const upper = code.toUpperCase();
        const discount = discountCodes[upper];
        if (discount) {
            if (subtotal >= discount.minOrder) {
                setAppliedDiscount({ code: upper, ...discount });
                showNotification(`Discount "${upper}" applied!`);
                return true;
            }
            showNotification(`Minimum order of $${discount.minOrder} required.`);
            return false;
        }
        showNotification('Invalid discount code.');
        return false;
    };

    const removeDiscount = () => setAppliedDiscount(null);
    const clearCart = () => { setCartItems([]); setAppliedDiscount(null); };

    let discountAmount = 0;
    if (appliedDiscount) {
        if (appliedDiscount.type === 'percentage') discountAmount = subtotal * (appliedDiscount.value / 100);
        else if (appliedDiscount.type === 'fixed') discountAmount = appliedDiscount.value;
    }
    const shipping = subtotal > 75 || (appliedDiscount?.type === 'free_shipping') ? 0 : 9.99;
    const total = Math.max(0, subtotal - discountAmount + shipping);

    return (
        <CartContext.Provider value={{ cartItems, addToCart, removeFromCart, updateQuantity, clearCart, cartCount, subtotal, shipping, total, discountAmount, isCartOpen, setIsCartOpen, discountCode, setDiscountCode, applyDiscount, removeDiscount, appliedDiscount, notification }}>
            {children}
        </CartContext.Provider>
    );
}

export function useCart() {
    const ctx = useContext(CartContext);
    if (!ctx) throw new Error('useCart must be used within CartProvider');
    return ctx;
}
