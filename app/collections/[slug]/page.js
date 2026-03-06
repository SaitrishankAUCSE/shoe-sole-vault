import { collections, getProductsByCollection, getCollectionBySlug } from '../../data/products';
import ProductCard from '../../components/ProductCard';
import Link from 'next/link';

export async function generateStaticParams() {
    return collections.map(c => ({ slug: c.slug }));
}

export default async function CollectionPage({ params }) {
    const { slug } = await params;
    const collection = getCollectionBySlug(slug);
    const collectionProducts = getProductsByCollection(slug);

    if (!collection) return <div className="container" style={{ padding: '80px 0', textAlign: 'center' }}><h1>Collection Not Found</h1><Link href="/shop" className="btn btn-primary" style={{ marginTop: 20 }}>Shop All</Link></div>;

    return (
        <>
            <div className="page-hero"><div className="container"><h1>{collection.title}</h1><p>{collection.description}</p></div></div>
            <div className="shop-page">
                <div className="container">
                    <div className="breadcrumb"><Link href="/">Home</Link> / <Link href="/shop">Shop</Link> / <span>{collection.title}</span></div>
                    <div className="product-grid">{collectionProducts.map(p => <ProductCard key={p.id} product={p} />)}</div>
                    {collectionProducts.length === 0 && <div style={{ textAlign: 'center', padding: 60 }}><h3>No products in this collection yet.</h3><Link href="/shop" className="btn btn-primary" style={{ marginTop: 16 }}>Browse All Shoes</Link></div>}
                </div>
            </div>
        </>
    );
}
