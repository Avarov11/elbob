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
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <button
            onClick={() => onNavigate('products')}
            className="flex items-center text-gray-600 hover:text-red-600 transition-colors mb-8"
          >
            <ArrowLeft size={20} className="mr-2" />
            Continue Shopping
          </button>

          <div className="text-center py-16">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Your cart is empty</h2>
            <p className="text-gray-600 mb-8">Discover our amazing collection of shoes</p>
            <button
              onClick={() => onNavigate('products')}
             className="bg-orange-500 text-white px-8 py-3 rounded-md hover:bg-orange-600 transition-colors font-semibold"
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
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <button
          onClick={() => onNavigate('products')}
          className="flex items-center text-gray-600 hover:text-orange-500 transition-colors mb-8"
        >
          <ArrowLeft size={20} className="mr-2" />
          Continue Shopping
        </button>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Cart Items */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-lg shadow-sm">
              <div className="p-6 border-b border-gray-200">
                <div className="flex items-center justify-between">
                  <h2 className="text-2xl font-bold text-gray-900">Shopping Cart</h2>
                  <button
                    onClick={clearCart}
                    className="text-orange-500 hover:text-orange-600 transition-colors text-sm"
                  >
                    Clear Cart
                  </button>
                </div>
              </div>

              <div className="p-6 space-y-6">
                {state.items.map((item, index) => (
                  <div key={`${item.product.id}-${item.size}-${item.color}`} className="flex space-x-4">
                    <img
                      src={item.product.images[0]}
                      alt={item.product.name}
                      className="w-24 h-24 object-cover rounded-md"
                    />

                    <div className="flex-1">
                      <h3 className="font-semibold text-gray-900">{item.product.name}</h3>
                      <p className="text-gray-600 text-sm">
                        Size: {item.size} • Color: {item.color}
                      </p>
                      <p className="text-lg font-bold text-black mt-2">
                        {item.product.price.toLocaleString()} EGP
                      </p>
                    </div>

                    <div className="flex items-center space-x-4">
                      {/* Quantity Controls */}
                      <div className="flex items-center border border-gray-300 rounded-md">
                        <button
                          onClick={() => updateQuantity(item.product.id, item.size, item.color, Math.max(1, item.quantity - 1))}
                          className="p-2 hover:bg-gray-50 transition-colors"
                        >
                          <Minus size={16} />
                        </button>
                        <span className="px-4 py-2 font-medium">{item.quantity}</span>
                        <button
                          onClick={() => updateQuantity(item.product.id, item.size, item.color, item.quantity + 1)}
                          className="p-2 hover:bg-gray-50 transition-colors"
                        >
                          <Plus size={16} />
                        </button>
                      </div>

                      {/* Total Price */}
                      <div className="text-right min-w-[100px]">
                        <p className="font-bold text-black">
                          {(item.product.price * item.quantity).toLocaleString()} EGP
                        </p>
                      </div>

                      {/* Remove Button */}
                      <button
                        onClick={() => removeItem(item.product.id)}
                        className="text-red-600 hover:text-red-700 transition-colors p-2"
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
            <div className="bg-white rounded-lg shadow-sm p-6 sticky top-8">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Order Summary</h3>

              <div className="space-y-3 mb-6">
                <div className="flex justify-between">
                  <span className="text-gray-600">Subtotal</span>
                  <span className="font-medium">{state.total.toLocaleString()} EGP</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Shipping</span>
                  <span className="font-medium">
                    {state.total >= 500 ? 'Free' : '50 EGP'}
                  </span>
                </div>
                {state.total < 500 && (
                  <p className="text-sm text-gray-500">
                    Add {(500 - state.total).toLocaleString()} EGP more for free shipping
                  </p>
                )}
                <div className="border-t pt-3">
                  <div className="flex justify-between text-lg font-bold">
                    <span>Total</span>
                    <span>{(state.total + (state.total >= 500 ? 0 : 50)).toLocaleString()} EGP</span>
                  </div>
                </div>
              </div>

              <button
                onClick={() => onNavigate('checkout')}
               className="w-full bg-orange-500 text-white py-3 rounded-md hover:bg-orange-600 transition-colors font-semibold mb-4"
              >
                Proceed to Checkout
              </button>

              <div className="space-y-3 text-sm text-gray-600">
                <div className="flex items-center space-x-2">
                  <span>✓</span>
                  <span>Cash on delivery</span>
                </div>
                <div className="flex items-center space-x-2">
                  <span>✓</span>
                  <span>30-day return policy</span>
                </div>
                <div className="flex items-center space-x-2">
                  <span>✓</span>
                  <span>Customer support</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartPage;