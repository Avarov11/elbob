import React, { useState } from 'react';
import { ChevronDown, ChevronUp, Search } from 'lucide-react';

const FAQPage: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [activeCategory, setActiveCategory] = useState<string | null>('general');
  const [openItems, setOpenItems] = useState<string[]>(['general-1']);

  const faqCategories = [
    {
      id: 'general',
      title: 'General Questions',
      items: [
        {
          id: 'general-1',
          question: 'What is StepStyle?',
          answer: 'StepStyle is Egypt\'s premier online destination for high-quality imported footwear. We specialize in bringing trendy and comfortable shoes from international brands to Egyptian customers, focusing on styles that appeal to fashion-conscious individuals aged 18-35.'
        },
        {
          id: 'general-2',
          question: 'Where do you source your products from?',
          answer: 'We carefully curate our collection from trusted manufacturers and brands across multiple countries including Italy, Spain, Turkey, Portugal, and other renowned footwear production centers. All our products are authentic and come directly from authorized distributors.'
        },
        {
          id: 'general-3',
          question: 'Are your products authentic?',
          answer: 'Yes, we guarantee 100% authentic products. We work exclusively with authorized distributors and manufacturers. Every item comes with proper documentation, and we stand behind the authenticity of all our products with our reputation and return policy.'
        }
      ]
    },
    {
      id: 'orders',
      title: 'Orders & Payment',
      items: [
        {
          id: 'orders-1',
                  question: 'What payment methods do you accept?',
        answer: 'We currently accept cash on delivery (COD) only. You can pay with cash when your order arrives at your doorstep. This ensures a secure and convenient shopping experience without the need for online payment methods.'
        },
        {
          id: 'orders-2',
          question: 'Can I cancel or modify my order?',
          answer: 'Orders can be cancelled or modified within 2 hours of placing them, as long as they haven\'t been processed for shipping. Please contact our customer service team immediately at +20 100 123 4567 or email orders@stepstyle.eg to make changes.'
        },
        {
          id: 'orders-3',
          question: 'How do I track my order?',
          answer: 'Once your order ships, you\'ll receive a tracking number via email and SMS. You can track your package status on our website or directly with our shipping partners. We also provide proactive updates on your order status throughout the delivery process.'
        },
        {
          id: 'orders-4',
                  question: 'Do you offer installment payments?',
        answer: 'Currently, we accept cash on delivery only. We\'re working on introducing installment payment options in the future. Stay tuned for updates on this service.'
        }
      ]
    },
    {
      id: 'shipping',
      title: 'Shipping & Delivery',
      items: [
        {
          id: 'shipping-1',
          question: 'What are your shipping options and costs?',
          answer: 'We offer free standard shipping on orders over 500 EGP throughout Egypt. For orders under 500 EGP, shipping costs 50 EGP. Express shipping is available for an additional 100 EGP, guaranteeing delivery within 1-2 business days in major cities.'
        },
        {
          id: 'shipping-2',
          question: 'How long does delivery take?',
          answer: 'Standard delivery takes 2-4 business days in Cairo and Giza, 3-5 business days in Alexandria, and 4-7 business days in other governorates. Express delivery is 1-2 business days in major cities. Orders placed before 2 PM are processed the same day.'
        },
        {
          id: 'shipping-3',
          question: 'Do you deliver to all areas in Egypt?',
          answer: 'Yes, we deliver to all governorates in Egypt. However, delivery times may vary for remote areas, and some locations may require pickup from the nearest delivery center. Contact us for specific delivery information for your area.'
        },
        {
          id: 'shipping-4',
          question: 'What if I\'m not home during delivery?',
          answer: 'Our delivery partners will attempt delivery 3 times. If unsuccessful, the package will be held at the local distribution center for 7 days for pickup. You\'ll receive SMS notifications with pickup location and instructions. After 7 days, the order will be returned to us.'
        }
      ]
    },
    {
      id: 'returns',
      title: 'Returns & Exchanges',
      items: [
        {
          id: 'returns-1',
          question: 'What is your return policy?',
          answer: 'We offer a 30-day return policy for unworn items in their original packaging with all tags attached. Items must be in sellable condition. We provide prepaid return labels for your convenience, and refunds are processed within 5-7 business days after we receive your return.'
        },
        {
          id: 'returns-2',
          question: 'How do I exchange for a different size?',
          answer: 'Size exchanges are free within Egypt! Simply contact us within 30 days of purchase, and we\'ll arrange a pickup of your original item and delivery of the new size. The exchange process typically takes 5-7 business days from pickup to delivery.'
        },
        {
          id: 'returns-3',
          question: 'Can I return sale items?',
          answer: 'Yes, sale items can be returned within our standard 30-day policy, provided they meet our return conditions (unworn, original packaging, tags attached). However, sale items are eligible for store credit or exchange only, not cash refunds.'
        },
        {
          id: 'returns-4',
          question: 'How do I initiate a return?',
          answer: 'To start a return, email support@stepstyle.eg with your order number and reason for return, or call +20 100 123 4567. We\'ll provide you with a return authorization number and prepaid shipping label. Pack your items securely and schedule a pickup.'
        }
      ]
    },
    {
      id: 'sizing',
      title: 'Sizing & Fit',
      items: [
        {
          id: 'sizing-1',
          question: 'How do I find my correct size?',
          answer: 'Each product page includes a detailed size guide with measurements in centimeters. We recommend measuring your feet in the evening when they\'re naturally slightly larger. Stand on paper, mark your longest toe, and measure from heel to toe. Compare with our size chart for the best fit.'
        },
        {
          id: 'sizing-2',
          question: 'Do sizes vary between different brands?',
          answer: 'Yes, sizing can vary between brands and styles. We provide individual size guides for each product, and our customer service team can provide personalized size recommendations based on your measurements and the specific shoe you\'re interested in.'
        },
        {
          id: 'sizing-3',
          question: 'What if the shoes don\'t fit?',
          answer: 'Don\'t worry! We offer free size exchanges within Egypt. If the fit isn\'t right, contact us within 30 days and we\'ll arrange an exchange for a better size. We want you to love your shoes and feel confident in your purchase.'
        },
        {
          id: 'sizing-4',
          question: 'Do you offer wide or narrow width options?',
          answer: 'Currently, most of our shoes come in standard width (medium). However, we do carry select styles in wide widths, clearly marked on product pages. We\'re working to expand our width options based on customer feedback and demand.'
        }
      ]
    },
    {
      id: 'products',
      title: 'Products & Quality',
      items: [
        {
          id: 'products-1',
          question: 'How often do you add new products?',
          answer: 'We add new arrivals weekly and launch major seasonal collections quarterly. Follow us on social media or subscribe to our newsletter to be the first to know about new arrivals, exclusive launches, and special promotions.'
        },
        {
          id: 'products-2',
          question: 'Do you offer warranties on your products?',
          answer: 'All our shoes come with a manufacturer\'s quality guarantee. If you experience any manufacturing defects within 6 months of purchase under normal wear conditions, we\'ll replace the item or provide a full refund. This doesn\'t cover normal wear and tear.'
        },
        {
          id: 'products-3',
          question: 'Can you recommend shoes for specific occasions?',
          answer: 'Absolutely! Our customer service team is knowledgeable about our entire collection and can recommend shoes based on your needs - whether for office wear, special events, casual outings, or athletic activities. Contact us for personalized recommendations.'
        },
        {
          id: 'products-4',
          question: 'Do you have a loyalty or rewards program?',
          answer: 'We\'re launching our VIP customer program soon, which will offer exclusive early access to sales, special discounts, and priority customer service. Current customers will be automatically enrolled based on their purchase history. Stay tuned for more details!'
        }
      ]
    }
  ];

  const toggleItem = (itemId: string) => {
    setOpenItems(prev =>
      prev.includes(itemId)
        ? prev.filter(id => id !== itemId)
        : [...prev, itemId]
    );
  };

  const filteredCategories = faqCategories.map(category => ({
    ...category,
    items: category.items.filter(item =>
      searchTerm === '' ||
      item.question.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.answer.toLowerCase().includes(searchTerm.toLowerCase())
    )
  })).filter(category => category.items.length > 0);

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-black text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl lg:text-5xl font-bold mb-4">Frequently Asked Questions</h1>
          <p className="text-xl text-gray-300 mb-8">
            Find answers to common questions about StepStyle products and services
          </p>
          
          {/* Search Bar */}
          <div className="max-w-2xl mx-auto relative">
            <input
              type="text"
              placeholder="Search for answers..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full px-4 py-3 pl-12 text-black rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
            />
            <Search size={20} className="absolute left-4 top-3.5 text-gray-400" />
          </div>
        </div>
      </section>

      {/* FAQ Content */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
            {/* Category Sidebar */}
            <div className="lg:col-span-1">
              <div className="bg-white rounded-lg shadow-sm p-6 sticky top-8">
                <h3 className="font-semibold text-gray-900 mb-4">Categories</h3>
                <nav className="space-y-2">
                  {faqCategories.map(category => (
                    <button
                      key={category.id}
                      onClick={() => setActiveCategory(category.id)}
                      className={`w-full text-left px-3 py-2 rounded-md transition-colors ${
                        activeCategory === category.id
                          ? 'bg-orange-500 text-white'
                          : 'text-gray-700 hover:bg-gray-100'
                      }`}
                    >
                      {category.title}
                    </button>
                  ))}
                </nav>
              </div>
            </div>

            {/* FAQ Items */}
            <div className="lg:col-span-3">
              <div className="space-y-6">
                {filteredCategories.map(category => (
                  <div key={category.id} className="bg-white rounded-lg shadow-sm overflow-hidden">
                    <div className="bg-gray-50 px-6 py-4 border-b">
                      <h2 className="text-xl font-semibold text-gray-900">{category.title}</h2>
                    </div>
                    
                    <div className="divide-y divide-gray-200">
                      {category.items.map(item => (
                        <div key={item.id}>
                          <button
                            onClick={() => toggleItem(item.id)}
                            className="w-full px-6 py-4 text-left hover:bg-gray-50 transition-colors flex items-center justify-between"
                          >
                            <span className="font-medium text-gray-900 pr-4">{item.question}</span>
                            {openItems.includes(item.id) ? (
                              <ChevronUp size={20} className="text-gray-500 flex-shrink-0" />
                            ) : (
                              <ChevronDown size={20} className="text-gray-500 flex-shrink-0" />
                            )}
                          </button>
                          
                          {openItems.includes(item.id) && (
                            <div className="px-6 pb-4">
                              <p className="text-gray-700 leading-relaxed">{item.answer}</p>
                            </div>
                          )}
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>

              {/* No Results */}
              {filteredCategories.length === 0 && searchTerm && (
                <div className="text-center py-12">
                  <p className="text-gray-500 text-lg mb-4">
                    No results found for "{searchTerm}"
                  </p>
                  <button
                    onClick={() => setSearchTerm('')}
                    className="text-orange-500 hover:text-orange-600 transition-colors"
                  >
                    Clear search and view all FAQs
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Still have questions?</h2>
          <p className="text-xl text-gray-600 mb-8">
            Our customer service team is here to help you with any additional questions
          </p>
          
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            <div className="text-center">
              <div className="bg-orange-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-orange-500 text-2xl">📞</span>
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">Call Us</h3>
              <p className="text-gray-600">+20 100 123 4567</p>
            </div>
            
            <div className="text-center">
              <div className="bg-yellow-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-yellow-500 text-2xl">📱</span>
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">WhatsApp</h3>
              <p className="text-gray-600">+20 120 987 6543</p>
            </div>
            
            <div className="text-center">
              <div className="bg-orange-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-orange-500 text-2xl">✉️</span>
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">Email</h3>
              <p className="text-gray-600">support@stepstyle.eg</p>
            </div>
          </div>

          <div className="mt-8 p-6 bg-gray-50 rounded-lg">
            <p className="text-gray-600">
              <strong>Business Hours:</strong> Sunday - Thursday: 9:00 AM - 8:00 PM | Friday - Saturday: 10:00 AM - 6:00 PM
              <br />
              <strong>Response Time:</strong> We typically respond within 2-4 hours during business hours
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default FAQPage;