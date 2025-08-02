import { useState, lazy, Suspense, useEffect } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import { CartProvider } from './context/CartContext';

// Lazy load pages for better performance
const HomePage = lazy(() => import('./pages/HomePage'));
const MensPage = lazy(() => import('./pages/MensPage'));
const WomensPage = lazy(() => import('./pages/WomensPage'));
const ProductDetailPage = lazy(() => import('./pages/ProductDetailPage'));
const CartPage = lazy(() => import('./pages/CartPage'));
const CheckoutPage = lazy(() => import('./pages/CheckoutPage'));
const ContactPage = lazy(() => import('./pages/ContactPage'));
const FAQPage = lazy(() => import('./pages/FAQPage'));

type Page = 
  | 'home' 
  | 'products-men' 
  | 'products-women' 
  | 'product-detail'
  | 'cart' 
  | 'checkout' 
  | 'contact' 
  | 'faq';

function App() {
  const [currentPage, setCurrentPage] = useState<Page>('home');
  const [selectedProductId, setSelectedProductId] = useState<string | null>(null);

  // Initialize page from URL on app load
  useEffect(() => {
    const path = window.location.pathname;
    const urlParams = new URLSearchParams(window.location.search);
    const productId = urlParams.get('product');
    
    if (productId) {
      setSelectedProductId(productId);
      setCurrentPage('product-detail');
    } else {
      // Map URL paths to pages
      const pathToPage: Record<string, Page> = {
        '/': 'home',
        '/men': 'products-men',
        '/women': 'products-women',
        '/cart': 'cart',
        '/checkout': 'checkout',
        '/contact': 'contact',
        '/faq': 'faq'
      };
      
      const page = pathToPage[path] || 'home';
      setCurrentPage(page);
    }
    // Scroll to top when initializing from URL
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  // Update URL when page changes
  useEffect(() => {
    const pageToPath: Record<Page, string> = {
      'home': '/',
      'products-men': '/men',
      'products-women': '/women',
      'product-detail': selectedProductId ? `/product?product=${selectedProductId}` : '/',
      'cart': '/cart',
      'checkout': '/checkout',
      'contact': '/contact',
      'faq': '/faq'
    };

    const path = pageToPath[currentPage];
    if (path && window.location.pathname !== path) {
      window.history.pushState({ page: currentPage, productId: selectedProductId }, '', path);
    }
  }, [currentPage, selectedProductId]);

  // Handle browser back/forward buttons
  useEffect(() => {
    const handlePopState = () => {
      const path = window.location.pathname;
      const urlParams = new URLSearchParams(window.location.search);
      const productId = urlParams.get('product');
      
      if (productId) {
        setSelectedProductId(productId);
        setCurrentPage('product-detail');
      } else {
        const pathToPage: Record<string, Page> = {
          '/': 'home',
          '/men': 'products-men',
          '/women': 'products-women',
          '/cart': 'cart',
          '/checkout': 'checkout',
          '/contact': 'contact',
          '/faq': 'faq'
        };
        
        const page = pathToPage[path] || 'home';
        setCurrentPage(page);
        setSelectedProductId(null);
      }
      // Scroll to top when using browser navigation
      window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    window.addEventListener('popstate', handlePopState);
    return () => window.removeEventListener('popstate', handlePopState);
  }, []);

  const handleNavigate = (page: string) => {
    setCurrentPage(page as Page);
    if (page !== 'product-detail') {
      setSelectedProductId(null);
    }
    // Scroll to top when navigating
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleViewProduct = (productId: string) => {
    setSelectedProductId(productId);
    setCurrentPage('product-detail');
    // Scroll to top when viewing product details
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // Loading component
  const LoadingSpinner = () => (
    <div className="min-h-screen flex items-center justify-center">
      <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-[#f2b749]"></div>
    </div>
  );

  const renderPage = () => {
    switch (currentPage) {
      case 'home':
        return <HomePage onNavigate={handleNavigate} />;
      case 'products-men':
        return <MensPage onViewProduct={handleViewProduct} />;
      case 'products-women':
        return <WomensPage onViewProduct={handleViewProduct} />;
      case 'product-detail':
        return selectedProductId ? (
          <ProductDetailPage productId={selectedProductId} onNavigate={handleNavigate} />
        ) : (
          <HomePage onNavigate={handleNavigate} />
        );
      case 'cart':
        return <CartPage onNavigate={handleNavigate} />;
      case 'checkout':
        return <CheckoutPage onNavigate={handleNavigate} />;
      case 'contact':
        return <ContactPage />;
      case 'faq':
        return <FAQPage />;
      default:
        return <HomePage onNavigate={handleNavigate} />;
    }
  };

  return (
    <CartProvider>
      <div className="min-h-screen flex flex-col">
        <Header currentPage={currentPage} onNavigate={handleNavigate} />
        <main className="flex-1">
          <Suspense fallback={<LoadingSpinner />}>
            {renderPage()}
          </Suspense>
        </main>
        <Footer onNavigate={handleNavigate} />
      </div>
    </CartProvider>
  );
}

export default App;