import React from 'react';
import { Minus, Plus, Trash2, ArrowLeft } from 'lucide-react';
import { useCart } from '../context/CartContext';

interface CartPageProps {
  onNavigate: (page: string) => void;
}

const CartPage: React.FC<CartPageProps> = ({ onNavigate }) => {
  const { state, updateQuantity, removeItem, clearCart } = useCart();

  if (state.items.length === 0) {
    return (
      <div className="min-h-screen bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-8">
          <button
            onClick={() => onNavigate('products')}
            className="flex items-center text-gray-600 hover:text-red-600 transition-colors mb-6 sm:mb-8"
          >
            <ArrowLeft size={18} className="mr-2" />
            Continue Shopping
          </button>

          <div className="text-center py-12 sm:py-16">
            <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-3 sm:mb-4">Your cart is empty</h2>
            <p className="text-sm sm:text-base text-gray-600 mb-6 sm:mb-8">Discover our amazing collection of shoes</p>
            <button
              onClick={() => onNavigate('products')}
              className="bg-orange-500 text-white px-6 sm:px-8 py-3 rounded-md hover:bg-orange-600 transition-colors font-semibold text-sm sm:text-base"
            >
              Start Shopping
            </button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-8">
        <button
          onClick={() => onNavigate('products')}
          className="flex items-center text-gray-600 hover:text-orange-500 transition-colors mb-6 sm:mb-8"
        >
          <ArrowLeft size={18} className="mr-2" />
          Continue Shopping
        </button>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 sm:gap-8">
          {/* Cart Items */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-lg shadow-sm">
              <div className="p-4 sm:p-6 border-b border-gray-200">
                <div className="flex items-center justify-between">
                  <h2 className="text-xl sm:text-2xl font-bold text-gray-900">Shopping Cart</h2>
                  <button
                    onClick={clearCart}
                    className="text-orange-500 hover:text-orange-600 transition-colors text-sm p-2"
                  >
                    Clear Cart
                  </button>
                </div>
              </div>

              <div className="p-4 sm:p-6 space-y-4 sm:space-y-6">
                {state.items.map((item, index) => (
                  <div key={`${item.product.id}-${item.size}-${item.color}`} className="flex space-x-3 sm:space-x-4">
                    <img
                      src={item.product.images[0]}
                      alt={item.product.name}
                      className="w-20 h-20 sm:w-24 sm:h-24 object-cover rounded-md flex-shrink-0"
                    />

                    <div className="flex-1 min-w-0">
                      <h3 className="font-semibold text-gray-900 text-sm sm:text-base">{item.product.name}</h3>
                      <p className="text-gray-600 text-xs sm:text-sm">
                        Size: {item.size} • Color: {item.color}
                      </p>
                      <p className="text-base sm:text-lg font-bold text-black mt-1 sm:mt-2">
                        {item.product.price.toLocaleString()} EGP
                      </p>
                    </div>

                    <div className="flex flex-col items-end space-y-2 sm:space-y-4">
                      {/* Quantity Controls */}
                      <div className="flex items-center border border-gray-300 rounded-md">
                        <button
                          onClick={() => updateQuantity(item.product.id, item.size, item.color, Math.max(1, item.quantity - 1))}
                          className="p-2 hover:bg-gray-50 transition-colors"
                        >
                          <Minus size={14} />
                        </button>
                        <span className="px-3 sm:px-4 py-2 font-medium text-sm">{item.quantity}</span>
                        <button
                          onClick={() => updateQuantity(item.product.id, item.size, item.color, item.quantity + 1)}
                          className="p-2 hover:bg-gray-50 transition-colors"
                        >
                          <Plus size={14} />
                        </button>
                      </div>

                      {/* Remove Button */}
                      <button
                        onClick={() => removeItem(item.product.id, item.size, item.color)}
                        className="text-red-500 hover:text-red-600 transition-colors p-1"
                      >
                        <Trash2 size={16} />
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Order Summary */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-lg shadow-sm p-4 sm:p-6">
              <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-4">Order Summary</h3>
              
              <div className="space-y-3 mb-6">
                <div className="flex justify-between text-sm sm:text-base">
                  <span>Subtotal ({state.items.length} items)</span>
                  <span>{state.items.reduce((total, item) => total + (item.product.price * item.quantity), 0).toLocaleString()} EGP</span>
                </div>
                <div className="flex justify-between text-sm sm:text-base">
                  <span>Shipping</span>
                  <span className="text-green-600">Free</span>
                </div>
                <div className="border-t border-gray-200 pt-3">
                  <div className="flex justify-between font-bold text-lg">
                    <span>Total</span>
                    <span>{state.items.reduce((total, item) => total + (item.product.price * item.quantity), 0).toLocaleString()} EGP</span>
                  </div>
                </div>
              </div>

              <button
                onClick={() => onNavigate('checkout')}
                className="w-full bg-orange-500 text-white py-3 sm:py-4 rounded-md hover:bg-orange-600 transition-colors font-semibold text-sm sm:text-base"
              >
                Proceed to Checkout
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartPage;